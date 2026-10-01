"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ⚠️ غيّر الأرقام دي حسب فريماتك
const FRAME_COUNT = 120;          // عدد فريمات الديسكتوب
const MOBILE_FRAME_COUNT = 120;   // عدد فريمات الموبايل (portrait)
const USE_MOBILE_FRAMES = false;  // خليها true لما تعمل public/frames-mobile

// على الفون والتابلت: 2 = يحمّل نص الفريمات (يوفر رامات)
const SMALL_SCREEN_FRAME_STEP = 2;

// الشاشة الطولية + فريمات أفقية:
// 0 = الفريم كله ظاهر | 1 = يملا الشاشة بالكامل ويتقص (من غير أي فراغ)
const PORTRAIT_FILL = 0.4;

// نعومة دمج حواف الفريم مع الخلفية (نسبة من حجم الفريم)
const EDGE_FEATHER = 0.2;

// ارتفاع الناف بار تقريباً + مسافة صغيرة (بالـ px). زوّدها لو الكاميرا لازقة في الناف
const TOP_GAP = 72;

// مكان الفريم رأسياً في المساحة اللي تحت الناف:
// 0 = لازق تحت الناف مباشرة | 0.5 = في النص | 1 = لازق تحت
const VERTICAL_ALIGN = 0.1;
const BOTTOM_TRIM_MOBILE = 140;

const frameSrc = (dir: string, n: number): string =>
  `/${dir}/${String(n).padStart(5, "0")}.jpg`;

const css = `
.cs-track{position:relative;width:100%}
.cs-sticky{position:sticky;top:0;width:100%;height:100vh;height:100svh;min-height:480px;overflow:hidden}
@media (max-width:767px){
  .cs-sticky{height:calc(100vh - ${BOTTOM_TRIM_MOBILE}px);height:calc(100svh - ${BOTTOM_TRIM_MOBILE}px)}
}
.cs-canvas{position:absolute;top:0;left:0;width:100%;height:100%;display:block}
`;

export default function CameraScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;
    if (!track || !sticky || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const vw = window.innerWidth;
    const small = vw < 1100;
    const portrait = window.innerHeight > window.innerWidth;

    const useMobileFrames = USE_MOBILE_FRAMES && portrait;
    const dir = useMobileFrames ? "frames-mobile" : "frames";
    const count = useMobileFrames ? MOBILE_FRAME_COUNT : FRAME_COUNT;
    const step = small ? Math.max(1, SMALL_SCREEN_FRAME_STEP) : 1;
    const total = Math.ceil(count / step);

    const images: HTMLImageElement[] = [];
    const state = { frame: 0 };
    let lastIndex = -1;
    let rgb: [number, number, number] = [243, 239, 230]; // #F3EFE6 لحد ما نسحب اللون الحقيقي
    const bg = (a = 1) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;

    // يسحب لون خلفية الفريم من أول فريم
    const sampleBg = (img: HTMLImageElement) => {
      try {
        const c = document.createElement("canvas");
        c.width = 1;
        c.height = 1;
        const x = c.getContext("2d");
        if (!x) return;
        x.drawImage(img, 6, 6, 1, 1, 0, 0, 1, 1);
        const d = x.getImageData(0, 0, 1, 1).data;
        rgb = [d[0], d[1], d[2]];
        sticky.style.background = bg();
        track.style.background = bg();
      } catch {
        /* تجاهل لو المتصفح منع القراءة */
      }
    };

    const draw = (index: number): boolean => {
      const img = images[index];
      if (!img || !img.complete || !img.naturalWidth) return false;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const cover = Math.max(cw / iw, ch / ih);
      const contain = Math.min(cw / iw, ch / ih);
      const canvasPortrait = ch > cw;

      const scale =
        canvasPortrait && !useMobileFrames
          ? contain + (cover - contain) * PORTRAIT_FILL
          : cover;

      const w = iw * scale;
      const h = ih * scale;
      const x = (cw - w) / 2;

      // نحسب المساحة المتاحة تحت الناف، ونحط الفريم فيها حسب VERTICAL_ALIGN
      const dpr = cw / (sticky.clientWidth || window.innerWidth);
      const topGap = TOP_GAP * dpr;
      const free = ch - h; // الفراغ الكلي (لو الفريم أطول من الشاشة بتبقى سالبة)
      const y =
        free > 0
          ? topGap + Math.max(0, free - topGap) * VERTICAL_ALIGN
          : free / 2; // الفريم ملا الشاشة: بنوسّطه عادي

      ctx.fillStyle = bg();
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, x, y, w, h);

      // دمج الحواف مع الخلفية (يخفي الخطوط والفراغ)
      if (h < ch - 1) {
        const fh = h * EDGE_FEATHER;
        const top = ctx.createLinearGradient(0, y, 0, y + fh);
        top.addColorStop(0, bg(1));
        top.addColorStop(1, bg(0));
        ctx.fillStyle = top;
        ctx.fillRect(0, y, cw, fh);

        const bottom = ctx.createLinearGradient(0, y + h, 0, y + h - fh);
        bottom.addColorStop(0, bg(1));
        bottom.addColorStop(1, bg(0));
        ctx.fillStyle = bottom;
        ctx.fillRect(0, y + h - fh, cw, fh);
      }
      if (w < cw - 1) {
        const fw = w * EDGE_FEATHER;
        const left = ctx.createLinearGradient(x, 0, x + fw, 0);
        left.addColorStop(0, bg(1));
        left.addColorStop(1, bg(0));
        ctx.fillStyle = left;
        ctx.fillRect(x, 0, fw, ch);

        const right = ctx.createLinearGradient(x + w, 0, x + w - fw, 0);
        right.addColorStop(0, bg(1));
        right.addColorStop(1, bg(0));
        ctx.fillStyle = right;
        ctx.fillRect(x + w - fw, 0, fw, ch);
      }
      return true;
    };

    const render = () => {
      const index = Math.min(total - 1, Math.max(0, Math.round(state.frame)));
      if (index === lastIndex) return;
      if (draw(index)) lastIndex = index;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
      const w = sticky.clientWidth || window.innerWidth;
      const h = sticky.clientHeight || window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      lastIndex = -1;
      render();
    };

    // طول السكرول = ارتفاع الشاشة × معامل
    const setTrackHeight = () => {
      const w = window.innerWidth;
      const mult = w < 768 ? 4 : w < 1100 ? 4.5 : 5;
      const h = sticky.clientHeight || window.innerHeight;
      track.style.height = `${Math.round(h * mult)}px`;
    };

    // تحميل الفريمات
    for (let i = 0; i < total; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(dir, i * step + 1);
      if (i === 0) {
        img.onload = () => {
          sampleBg(img);
          lastIndex = -1;
          render();
        };
      }
      images.push(img);
    }

    setTrackHeight();
    resize();

    const st = ScrollTrigger.create({
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        gsap.to(state, {
          frame: self.progress * (total - 1),
          duration: 0.25,
          ease: "none",
          overwrite: true,
          onUpdate: render,
        });
      },
    });

    let lastW = sticky.clientWidth;
    let lastH = sticky.clientHeight;
    const ro = new ResizeObserver(() => {
      const w = sticky.clientWidth;
      const h = sticky.clientHeight;
      if (Math.abs(w - lastW) < 2 && Math.abs(h - lastH) < 2) return;
      lastW = w;
      lastH = h;
      setTrackHeight();
      resize();
      ScrollTrigger.refresh();
    });
    ro.observe(sticky);

    return () => {
      ro.disconnect();
      st.kill();
      gsap.killTweensOf(state);
    };
  }, []);

  return (
    <>
      <style>{css}</style>
      <div ref={trackRef} className="cs-track" style={{ height: "500svh" }}>
        <div ref={stickyRef} className="cs-sticky">
          <canvas ref={canvasRef} className="cs-canvas" />
        </div>
      </div>
    </>
  );
}