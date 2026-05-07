import { useState, useEffect, useRef } from "react";

if (!document.head.querySelector("[data-yoga-why]")) {
  const s = document.createElement("style");
  s.setAttribute("data-yoga-why", "true");
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');

    @keyframes yw-fadeUp {
      from{opacity:0;transform:translateY(24px);}
      to{opacity:1;transform:translateY(0);}
    }

    .yw-section {
      font-family:'Poppins',sans-serif;
      background:linear-gradient(180deg,#1A2E1A 0%,#0f1f0f 100%);
      padding:90px 28px;position:relative;overflow:hidden;
    }

    .yw-orb {
      position:absolute;border-radius:50%;pointer-events:none;
    }
    .yw-orb-1{width:400px;height:400px;top:-100px;left:-100px;
      background:radial-gradient(circle,rgba(46,125,50,0.15) 0%,transparent 70%);}
    .yw-orb-2{width:350px;height:350px;bottom:-80px;right:-80px;
      background:radial-gradient(circle,rgba(232,101,26,0.12) 0%,transparent 70%);}

    .yw-inner{max-width:1100px;margin:0 auto;position:relative;z-index:1;}

    .yw-top{text-align:center;margin-bottom:60px;animation:yw-fadeUp 0.6s ease both;}
    .yw-heading{
      font-size:42px;font-weight:800;color:#ffffff;margin:0 0 6px;line-height:1.2;
    }
    .yw-heading .acc{color:#E8651A;}
    .yw-subtext{
      font-family:'Lato',sans-serif;font-size:16px;color:rgba(255,255,255,0.6);
      max-width:400px;margin:12px auto 0;line-height:1.7;
    }

    .yw-divider{
      display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:56px;
    }
    .yw-div-line{width:60px;height:2px;background:#E8651A;border-radius:2px;}

    .yw-grid{
      display:grid;grid-template-columns:repeat(3,1fr);gap:24px;
    }

    .yw-card {
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:22px;padding:36px 28px;
      transition:all 0.28s;cursor:default;
      position:relative;overflow:hidden;
    }
    .yw-card::before {
      content:'';position:absolute;inset:0;
      background:linear-gradient(135deg,rgba(46,125,50,0.08),transparent);
      opacity:0;transition:opacity 0.28s;border-radius:22px;
    }
    .yw-card:hover{
      border-color:rgba(46,125,50,0.4);
      background:rgba(255,255,255,0.07);
      transform:translateY(-6px);
      box-shadow:0 20px 40px rgba(0,0,0,0.3);
    }
    .yw-card:hover::before{opacity:1;}

    .yw-icon-wrap{
      width:64px;height:64px;border-radius:18px;
      background:rgba(46,125,50,0.15);border:1px solid rgba(46,125,50,0.25);
      display:flex;align-items:center;justify-content:center;
      font-size:30px;margin-bottom:20px;transition:all 0.28s;
    }
    .yw-card:hover .yw-icon-wrap{
      background:rgba(232,101,26,0.2);border-color:rgba(232,101,26,0.4);
      transform:scale(1.08);
    }

    .yw-card-title{
      font-size:17px;font-weight:700;color:#fff;margin:0 0 10px;
    }
    .yw-card-desc{
      font-family:'Lato',sans-serif;font-size:14px;
      color:rgba(255,255,255,0.55);line-height:1.7;margin:0;
    }

    .yw-card-num{
      position:absolute;top:20px;right:22px;
      font-size:48px;font-weight:800;
      color:rgba(255,255,255,0.04);line-height:1;
      font-variant-numeric:tabular-nums;
    }

    @media(max-width:900px){.yw-grid{grid-template-columns:1fr 1fr;}}
    @media(max-width:560px){
      .yw-grid{grid-template-columns:1fr;}
      .yw-heading{font-size:28px;}
    }
  `;
  document.head.appendChild(s);
}

const features = [
  {
    icon:"🧑‍🏫",
    title:"Expert Instructors",
    desc:"Certified yoga teachers with 10+ years of hands-on teaching experience.",
  },
  {
    icon:"📱",
    title:"Online & Offline Classes",
    desc:"Practice from home or join us at our serene studio — your choice.",
  },
  {
    icon:"🎯",
    title:"Personalized Programs",
    desc:"Custom yoga plans based on your unique goals and current fitness level.",
  },
  {
    icon:"🌍",
    title:"Global Community",
    desc:"Join 10,000+ students across 25+ cities who've transformed their lives.",
  },
  {
    icon:"⏰",
    title:"Flexible Scheduling",
    desc:"Morning, evening & weekend batches designed to fit your lifestyle.",
  },
  {
    icon:"💰",
    title:"Affordable Pricing",
    desc:"Premium yoga experience at prices that everyone can comfortably afford.",
  },
];

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section className="yw-section" ref={ref}>
      <div className="yw-orb yw-orb-1" aria-hidden="true" />
      <div className="yw-orb yw-orb-2" aria-hidden="true" />

      <div className="yw-inner">
        <div className="yw-top">
          <h2 className="yw-heading">
            Why Thousands <span className="acc">Choose</span> yoga
          </h2>
          <div className="yw-divider">
            <div className="yw-div-line" />
            <span style={{fontSize:20}}>🪷</span>
            <div className="yw-div-line" />
          </div>
          <p className="yw-subtext">
            We go beyond yoga classes — we build a lifestyle.
          </p>
        </div>

        <div className="yw-grid">
          {features.map((f, i) => (
            <div
              className="yw-card"
              key={f.title}
              style={
                visible
                  ? {
                      animation: `yw-fadeUp 0.55s ${i * 0.1}s ease both`,
                    }
                  : { opacity: 0 }
              }
            >
              <span className="yw-card-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="yw-icon-wrap" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="yw-card-title">{f.title}</h3>
              <p className="yw-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
