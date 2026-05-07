import { useState } from "react";

if (!document.head.querySelector("[data-yoga-retreats]")) {
  const s = document.createElement("style");
  s.setAttribute("data-yoga-retreats", "true");
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');

    @keyframes yr-fadeUp {
      from{opacity:0;transform:translateY(28px);}
      to{opacity:1;transform:translateY(0);}
    }
    @keyframes yr-shimmer {
      0%{background-position:200% center;}
      100%{background-position:-200% center;}
    }

    .yr-section {
      font-family:'Poppins',sans-serif;
      background:linear-gradient(160deg,#f0f7e6 0%,#fff8f3 60%,#ffffff 100%);
      padding:90px 40px;position:relative;overflow:hidden;
    }
    .yr-orb {
      position:absolute;border-radius:50%;pointer-events:none;
    }
    .yr-orb-1{width:380px;height:380px;top:-100px;right:-80px;
      background:radial-gradient(circle,rgba(232,101,26,0.07) 0%,transparent 70%);}
    .yr-orb-2{width:280px;height:280px;bottom:-60px;left:-60px;
      background:radial-gradient(circle,rgba(46,125,50,0.08) 0%,transparent 70%);}

    .yr-inner{max-width:1100px;margin:0 auto;position:relative;z-index:1;}

    .yr-top{text-align:center;margin-bottom:56px;animation:yr-fadeUp 0.6s ease both;}
    .yr-badge{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(232,101,26,0.1);color:#E8651A;
      font-size:11px;font-weight:700;letter-spacing:0.14em;
      text-transform:uppercase;padding:7px 18px;border-radius:50px;
      border:1px solid rgba(232,101,26,0.2);margin-bottom:18px;
    }
    .yr-heading{font-size:42px;font-weight:800;color:#1A2E1A;margin:0 0 12px;line-height:1.2;}
    .yr-heading .acc-o{color:#E8651A;}
    .yr-heading .acc-g{color:#2E7D32;}
    .yr-subtext{
      font-family:'Lato',sans-serif;font-size:16px;color:#666;
      max-width:440px;margin:0 auto;line-height:1.7;
    }
    .yr-divider{
      display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:52px;
    }
    .yr-div-line{width:60px;height:2px;background:#2E7D32;border-radius:2px;}

    /* Cards */
    .yr-grid{
      display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-bottom:52px;
    }

    .yr-card{
      background:#fff;border-radius:26px;overflow:hidden;
      border:1.5px solid rgba(46,125,50,0.12);
      transition:all 0.3s;cursor:pointer;
      animation:yr-fadeUp 0.6s ease both;
      display:flex;flex-direction:column;
    }
    .yr-card:hover{
      transform:translateY(-8px);
      box-shadow:0 24px 56px rgba(46,125,50,0.16);
      border-color:#2E7D32;
    }

    /* Card image area */
    .yr-card-img{
      height:180px;display:flex;align-items:center;justify-content:center;
      position:relative;overflow:hidden;
    }
    .yr-card-img.mountain{
      background:linear-gradient(135deg,#c8e6c9,#81c784,#4caf50);
    }
    .yr-card-img.coastal{
      background:linear-gradient(135deg,#bbdefb,#64b5f6,#1976d2);
    }
    .yr-card-img.forest{
      background:linear-gradient(135deg,#dcedc8,#aed581,#689f38);
    }
    .yr-card-img-emoji{font-size:64px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));}
    .yr-duration-badge{
      position:absolute;top:14px;right:14px;
      background:rgba(0,0,0,0.35);backdrop-filter:blur(4px);
      color:#fff;font-size:11px;font-weight:700;
      padding:5px 12px;border-radius:50px;
      letter-spacing:0.05em;
    }
    .yr-tag-badge{
      position:absolute;bottom:14px;left:14px;
      background:#fff;color:#2E7D32;
      font-size:10px;font-weight:700;
      padding:4px 12px;border-radius:50px;
      letter-spacing:0.06em;text-transform:uppercase;
      box-shadow:0 2px 8px rgba(0,0,0,0.15);
    }

    /* Card body */
    .yr-card-body{padding:26px 24px;flex:1;display:flex;flex-direction:column;}
    .yr-card-title{font-size:19px;font-weight:700;color:#1A2E1A;margin:0 0 8px;}
    .yr-location{
      display:flex;align-items:center;gap:6px;
      font-family:'Lato',sans-serif;font-size:13px;color:#888;
      margin-bottom:12px;
    }
    .yr-card-desc{
      font-family:'Lato',sans-serif;font-size:14px;color:#666;
      line-height:1.7;margin:0 0 20px;flex:1;
    }

    .yr-card-footer{
      display:flex;align-items:center;justify-content:space-between;
      padding-top:16px;border-top:1px solid rgba(46,125,50,0.1);
      margin-top:auto;
    }
    .yr-price{
      font-size:20px;font-weight:800;color:#1A2E1A;
    }
    .yr-price span{font-size:12px;color:#888;font-weight:400;}
    .yr-book-btn{
      padding:10px 20px;border-radius:50px;
      background:#2E7D32;color:#fff;
      font-family:'Poppins',sans-serif;font-size:13px;font-weight:700;
      border:none;cursor:pointer;transition:all 0.22s;
      text-transform:uppercase;letter-spacing:0.05em;
    }
    .yr-book-btn:hover{background:#E8651A;transform:scale(1.04);}

    /* Highlights strip */
    .yr-highlights{
      display:flex;align-items:center;justify-content:center;
      flex-wrap:wrap;gap:32px;
      background:#fff;border:1.5px solid rgba(46,125,50,0.12);
      border-radius:20px;padding:28px 40px;margin-bottom:48px;
    }
    .yr-highlight{
      display:flex;align-items:center;gap:10px;
    }
    .yr-highlight-icon{font-size:24px;}
    .yr-highlight-text{font-size:13px;font-weight:600;color:#1A2E1A;}
    .yr-highlight-sub{font-family:'Lato',sans-serif;font-size:12px;color:#888;}

    /* CTA */
    .yr-cta-wrap{text-align:center;}
    .yr-cta-btn{
      display:inline-flex;align-items:center;gap:10px;
      background:linear-gradient(135deg,#2E7D32,#43A047);
      color:#fff;font-family:'Poppins',sans-serif;
      font-size:15px;font-weight:700;padding:16px 44px;
      border-radius:50px;border:none;cursor:pointer;
      text-transform:uppercase;letter-spacing:0.06em;transition:all 0.28s;
    }
    .yr-cta-btn:hover{
      background:linear-gradient(135deg,#E8651A,#f57c00);
      transform:translateY(-3px);
      box-shadow:0 14px 32px rgba(232,101,26,0.3);
    }

    @media(max-width:900px){.yr-grid{grid-template-columns:1fr 1fr;}}
    @media(max-width:560px){
      .yr-grid{grid-template-columns:1fr;}
      .yr-heading{font-size:28px;}
      .yr-highlights{gap:20px;padding:20px;}
    }
  `;
  document.head.appendChild(s);
}

const retreats = [
  {
    id:1,
    emoji:"🏔️",
    title:"Himalayan Yoga Retreat",
    location:"Rishikesh, Uttarakhand",
    days:"7 Days",
    price:"₹24,999",
    tag:"Most Popular",
    theme:"mountain",
    desc:"Sunrise yoga, meditation & ayurvedic meals in the heart of the mountains. A complete mind-body reset.",
    delay:"0s",
  },
  {
    id:2,
    emoji:"🌊",
    title:"Coastal Mindfulness Retreat",
    location:"Goa, India",
    days:"5 Days",
    price:"₹18,999",
    tag:"Beach Vibes",
    theme:"coastal",
    desc:"Beach yoga, breathwork & sunset meditation sessions by the ocean. Reconnect with nature's rhythm.",
    delay:"0.12s",
  },
  {
    id:3,
    emoji:"🌿",
    title:"Weekend Wellness Retreat",
    location:"Coorg, Karnataka",
    days:"2 Days",
    price:"₹8,999",
    tag:"Quick Escape",
    theme:"forest",
    desc:"Quick reset with yoga, nature walks and organic food. Perfect for a refreshing weekend getaway.",
    delay:"0.24s",
  },
];

const highlights = [
  { icon:"🍃", text:"All Meals Included", sub:"Organic & Ayurvedic" },
  { icon:"🏨", text:"Accommodation", sub:"Comfortable & Serene" },
  { icon:"🧘", text:"Expert Instructors", sub:"Certified & Experienced" },
  { icon:"📷", text:"Photography Sessions", sub:"Memories For Life" },
];

export default function RetreatsSection() {
  return (
    <section className="yr-section">
      <div className="yr-orb yr-orb-1" aria-hidden="true" />
      <div className="yr-orb yr-orb-2" aria-hidden="true" />

      <div className="yr-inner">
        <div className="yr-top">
          <div className="yr-badge">🏕️ Escape & Reconnect</div>
          <h2 className="yr-heading">
            Yoga <span className="acc-o">Retreats</span> &{" "}
            <span className="acc-g">Workshops</span>
          </h2>
          <p className="yr-subtext">
            Immerse yourself in transformative experiences in nature's lap
          </p>
        </div>

        <div className="yr-divider">
          <div className="yr-div-line" />
          <span style={{fontSize:20}}>🪷</span>
          <div className="yr-div-line" />
        </div>

        {/* Retreat Cards */}
        <div className="yr-grid">
          {retreats.map((r) => (
            <div
              className="yr-card"
              key={r.id}
              style={{ animationDelay: r.delay }}
            >
              <div className={`yr-card-img ${r.theme}`}>
                <span className="yr-card-img-emoji" aria-hidden="true">{r.emoji}</span>
                <span className="yr-duration-badge">📅 {r.days}</span>
                <span className="yr-tag-badge">{r.tag}</span>
              </div>
              <div className="yr-card-body">
                <h3 className="yr-card-title">{r.title}</h3>
                <div className="yr-location">
                  <span aria-hidden="true">📍</span>
                  {r.location}
                </div>
                <p className="yr-card-desc">{r.desc}</p>
                <div className="yr-card-footer">
                  <div className="yr-price">
                    {r.price}<br/>
                    <span>per person</span>
                  </div>
                  <button className="yr-book-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="yr-highlights">
          {highlights.map((h) => (
            <div className="yr-highlight" key={h.text}>
              <span className="yr-highlight-icon" aria-hidden="true">{h.icon}</span>
              <div>
                <div className="yr-highlight-text">{h.text}</div>
                <div className="yr-highlight-sub">{h.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="yr-cta-wrap">
          <button className="yr-cta-btn">
            Explore All Retreats →
          </button>
        </div>
      </div>
    </section>
  );
}
