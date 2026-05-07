import { useState } from "react";
import { Link } from "react-router-dom";

if (!document.head.querySelector("[data-yoga-classes]")) {
  const s = document.createElement("style");
  s.setAttribute("data-yoga-classes", "true");
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');

    @keyframes yc-fadeUp {
      from{opacity:0;transform:translateY(28px);}
      to{opacity:1;transform:translateY(0);}
    }
    @keyframes yc-cardIn {
      from{opacity:0;transform:translateY(20px) scale(0.96);}
      to{opacity:1;transform:translateY(0) scale(1);}
    }

    .yc-section {
      font-family:'Poppins',sans-serif;
      background:#fff;padding:90px 40px;
      position:relative;overflow:hidden;
    }
    .yc-bg-pattern {
      position:absolute;inset:0;pointer-events:none;
      background-image:radial-gradient(circle,rgba(46,125,50,0.04) 1.5px,transparent 1.5px);
      background-size:28px 28px;
    }

    .yc-inner{max-width:1100px;margin:0 auto;position:relative;z-index:1;}

    .yc-top{text-align:center;margin-bottom:56px;animation:yc-fadeUp 0.6s ease both;}
    .yc-badge {
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(46,125,50,0.09);color:#2E7D32;
      font-size:11px;font-weight:700;letter-spacing:0.14em;
      text-transform:uppercase;padding:7px 18px;border-radius:50px;
      border:1px solid rgba(46,125,50,0.18);margin-bottom:18px;
    }
    .yc-heading{font-size:42px;font-weight:800;color:#1A2E1A;margin:0 0 12px;line-height:1.2;}
    .yc-heading .acc-o{color:#E8651A;}
    .yc-heading .acc-g{color:#2E7D32;}
    .yc-subtext{font-family:'Lato',sans-serif;font-size:16px;color:#666;
      max-width:440px;margin:0 auto;line-height:1.7;}

    .yc-filters {
      display:flex;align-items:center;justify-content:center;
      flex-wrap:wrap;gap:10px;margin-bottom:44px;
    }
    .yc-filter-btn {
      padding:9px 22px;border-radius:50px;border:1.5px solid rgba(46,125,50,0.2);
      background:#fff;color:#555;font-family:'Poppins',sans-serif;
      font-size:13px;font-weight:600;cursor:pointer;transition:all 0.22s;
    }
    .yc-filter-btn.active, .yc-filter-btn:hover {
      background:#2E7D32;color:#fff;border-color:#2E7D32;
    }

    .yc-grid {
      display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:48px;
    }

    .yc-card {
      background:#fff;border:1.5px solid rgba(46,125,50,0.13);
      border-radius:22px;overflow:hidden;
      transition:all 0.28s;cursor:pointer;
      animation:yc-cardIn 0.5s ease both;
    }
    .yc-card:hover {
      transform:translateY(-7px);
      box-shadow:0 20px 48px rgba(46,125,50,0.14);
      border-color:#2E7D32;
    }

    .yc-card-header {
      padding:28px 24px 20px;
      background:linear-gradient(135deg,#f0f7e6,#e8f5e1);
      position:relative;
    }
    .yc-card-emoji{font-size:42px;margin-bottom:10px;display:block;}
    .yc-card-title{font-size:19px;font-weight:700;color:#1A2E1A;margin:0 0 4px;}
    .yc-popular-badge {
      position:absolute;top:16px;right:16px;
      background:#E8651A;color:#fff;font-size:10px;font-weight:700;
      padding:4px 12px;border-radius:50px;letter-spacing:0.06em;
      text-transform:uppercase;
    }

    .yc-card-body{padding:20px 24px;}
    .yc-card-desc{
      font-family:'Lato',sans-serif;font-size:14px;color:#666;
      line-height:1.7;margin:0 0 18px;
    }
    .yc-card-meta {
      display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px;
    }
    .yc-meta-tag {
      display:inline-flex;align-items:center;gap:5px;
      background:#f0f7e6;color:#2E7D32;
      font-size:11px;font-weight:600;padding:5px 12px;border-radius:50px;
      border:1px solid rgba(46,125,50,0.15);
    }
    .yc-enroll-btn {
      width:100%;padding:12px;border-radius:10px;
      border:1.5px solid #2E7D32;background:transparent;
      color:#2E7D32;font-family:'Poppins',sans-serif;
      font-size:13px;font-weight:700;cursor:pointer;
      text-transform:uppercase;letter-spacing:0.05em;
      transition:all 0.22s;
    }
    .yc-enroll-btn:hover{background:#2E7D32;color:#fff;}

    .yc-cta-wrap{text-align:center;}
    .yc-cta-btn {
      display:inline-flex;align-items:center;gap:10px;
      background:#E8651A;color:#fff;
      font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;
      padding:16px 44px;border-radius:50px;border:none;cursor:pointer;
      text-transform:uppercase;letter-spacing:0.06em;transition:all 0.28s;
    }
    .yc-cta-btn:hover{
      background:#d45a14;transform:translateY(-3px);
      box-shadow:0 12px 30px rgba(232,101,26,0.32);
    }

    @media(max-width:900px){.yc-grid{grid-template-columns:1fr 1fr;}}
    @media(max-width:580px){
      .yc-grid{grid-template-columns:1fr;}
      .yc-heading{font-size:30px;}
    }
  `;
  document.head.appendChild(s);
}

const classes = [
  {
    id:1, emoji:"🌅", title:"Hatha Yoga",
    desc:"Perfect for beginners. Focus on breathing, posture & deep relaxation.",
    level:"Beginner", duration:"60 min", time:"Morning",
    filter:"Beginner", popular:false,
  },
  {
    id:2, emoji:"🌊", title:"Vinyasa Flow",
    desc:"Dynamic, flowing sequences that build strength and flexibility.",
    level:"Intermediate", duration:"75 min", time:"Evening",
    filter:"Intermediate", popular:true,
  },
  {
    id:3, emoji:"🌙", title:"Yin Yoga",
    desc:"Deep stretching and mindfulness for stress relief and recovery.",
    level:"All Levels", duration:"60 min", time:"Night",
    filter:"All Levels", popular:false,
  },
  {
    id:4, emoji:"🧘", title:"Meditation",
    desc:"Guided mindfulness sessions for a calmer, more focused mind.",
    level:"All Levels", duration:"45 min", time:"Flexible",
    filter:"All Levels", popular:false,
  },
  {
    id:5, emoji:"💪", title:"Power Yoga",
    desc:"High-energy workout that builds core strength and endurance.",
    level:"Advanced", duration:"90 min", time:"Morning",
    filter:"Advanced", popular:false,
  },
  {
    id:6, emoji:"👶", title:"Prenatal Yoga",
    desc:"Gentle, safe yoga designed especially for mothers-to-be.",
    level:"All Levels", duration:"50 min", time:"Morning",
    filter:"All Levels", popular:false,
  },
];

const filters = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

export default function ClassesSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? classes
    : classes.filter((c) => c.filter === activeFilter);

  return (
    <section id="classes"  className="yc-section">
      <div className="yc-bg-pattern" aria-hidden="true" />
      <div className="yc-inner">

        <div className="yc-top">
          <div className="yc-badge">🧘 What We Offer</div>
          <h2 className="yc-heading">
            Yoga For <span className="acc-o">Every</span>{" "}
            <span className="acc-g">Body</span>
          </h2>
          <p className="yc-subtext">
            Choose from our wide range of expertly designed yoga programs
          </p>
        </div>

        {/* Filters */}
        <div className="yc-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`yc-filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="yc-grid">
          {filtered.map((cls, i) => (
            <div
              className="yc-card"
              key={cls.id}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="yc-card-header">
                <span className="yc-card-emoji" aria-hidden="true">{cls.emoji}</span>
                <h3 className="yc-card-title">{cls.title}</h3>
                {cls.popular && <span className="yc-popular-badge">Popular</span>}
              </div>
              <div className="yc-card-body">
                <p className="yc-card-desc">{cls.desc}</p>
                <div className="yc-card-meta">
                  <span className="yc-meta-tag">📊 {cls.level}</span>
                  <span className="yc-meta-tag">⏱ {cls.duration}</span>
                  <span className="yc-meta-tag">🌤 {cls.time}</span>
                </div>
                <Link to="/auth" className="yc-enroll-btn" style={{display: 'inline-block'}}>Enroll Now</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="yc-cta-wrap">
          <Link to="/auth" className="yc-cta-btn" style={{display: 'inline-block'}}>
            View All Classes →
          </Link>
        </div>
      </div>
    </section>
  );
}
