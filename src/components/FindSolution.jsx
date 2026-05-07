import { useState } from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "stress",
    label: "Stress",
    icon: "🧘",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
        <path d="M8 6c0-1 .5-2 2-2M16 6c0-1-.5-2-2-2" />
      </svg>
    ),
    title: "Stress — Yoga Can Help",
    desc: "Chronic stress affects your body and mind. Our breathing techniques and restorative yoga help activate the parasympathetic nervous system, reducing cortisol levels naturally.",
    tags: ["Pranayama", "Restorative Yoga", "Meditation", "Yoga Nidra"],
  },
  {
    id: "mental",
    label: "Mental Health",
    icon: "🧠",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
      </svg>
    ),
    title: "Mental Health — Yoga Can Help",
    desc: "Yoga supports mental wellness through mindfulness, breathwork, and gentle movement — proven to reduce anxiety, boost mood and build emotional resilience.",
    tags: ["Mindfulness Yoga", "Breathing", "Yin Yoga", "Guided Meditation"],
  },
  {
    id: "weight",
    label: "Weight Loss",
    icon: "⚖️",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M12 3a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1Z" />
        <path d="M3 6h18l-1.5 9H4.5L3 6Z" />
        <path d="M6 15v4M18 15v4M6 19h12" />
      </svg>
    ),
    title: "Weight Loss — Yoga Can Help",
    desc: "Power Yoga and Vinyasa Flow combine cardio and strength training holistically — burning calories while improving metabolism and body awareness.",
    tags: ["Power Yoga", "Vinyasa Flow", "Hot Yoga", "Core Yoga"],
  },
  {
    id: "depression",
    label: "Depression",
    icon: "🌧️",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <line x1="8" y1="19" x2="8" y2="21" />
        <line x1="8" y1="13" x2="8" y2="15" />
        <line x1="16" y1="19" x2="16" y2="21" />
        <line x1="16" y1="13" x2="16" y2="15" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="12" y1="15" x2="12" y2="17" />
      </svg>
    ),
    title: "Depression — Yoga Can Help",
    desc: "Gentle yoga combined with breathwork lifts mood naturally by increasing serotonin and dopamine. Our guided sessions provide safe, nurturing support.",
    tags: ["Gentle Yoga", "Pranayama", "Sun Salutation", "Yoga Nidra"],
  },
  {
    id: "anger",
    label: "Anger",
    icon: "😤",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <path d="M9 9l2 2M13 9l2 2" />
        <path d="M8 5l2 2M14 5l2 2" />
      </svg>
    ),
    title: "Anger — Yoga Can Help",
    desc: "Yoga teaches you to pause, breathe, and respond instead of react. Our specialized sessions help release suppressed anger through movement and mindfulness.",
    tags: ["Cooling Pranayama", "Yin Yoga", "Meditation", "Chanting"],
  },
  {
    id: "sleep",
    label: "Sleep",
    icon: "😴",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M15 9h2M17 7v4" />
      </svg>
    ),
    title: "Sleep — Yoga Can Help",
    desc: "Evening yoga routines calm the nervous system and signal your body it's time to rest. Reduce insomnia naturally without medication.",
    tags: ["Yin Yoga", "Yoga Nidra", "Restorative Yoga", "Bedtime Stretching"],
  },
  {
    id: "wellness",
    label: "Wellness",
    icon: "🌸",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M12 22c4-4 8-7 8-12a8 8 0 0 0-16 0c0 5 4 8 8 12Z" />
        <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    ),
    title: "Wellness — Yoga Can Help",
    desc: "Holistic wellness is achieved through consistent yoga practice that nourishes your body, clears your mind, and uplifts your spirit every single day.",
    tags: ["Hatha Yoga", "Meditation", "Pranayama", "Detox Yoga"],
  },
  {
    id: "relationships",
    label: "Relationships",
    icon: "🤝",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Relationships — Yoga Can Help",
    desc: "Yoga builds emotional intelligence, patience, and empathy — the foundation of healthy relationships. Partner yoga and group sessions deepen connections.",
    tags: ["Partner Yoga", "Group Meditation", "Compassion Practice", "Communication Yoga"],
  },
  {
    id: "parenting",
    label: "Parenting",
    icon: "👨‍👧",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Parenting — Yoga Can Help",
    desc: "Yoga helps parents manage stress, stay present, and model mindfulness for their children. Family yoga sessions create stronger bonds and calmer homes.",
    tags: ["Family Yoga", "Stress Relief", "Mindful Parenting", "Breathing Techniques"],
  },
  {
    id: "backpain",
    label: "Back Pain",
    icon: "🦴",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M12 2v20M8 6c0 0 2 2 4 2s4-2 4-2M8 10c0 0 2 2 4 2s4-2 4-2M8 14c0 0 2 2 4 2s4-2 4-2M8 18c0 0 2 2 4 2s4-2 4-2" />
      </svg>
    ),
    title: "Back Pain — Yoga Can Help",
    desc: "Targeted yoga sequences strengthen core muscles, improve spinal alignment, and release tension — providing long-term relief from chronic back pain.",
    tags: ["Therapeutic Yoga", "Core Strengthening", "Spinal Yoga", "Stretching"],
  },
  {
    id: "fatigue",
    label: "Fatigue",
    icon: "🔋",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 2v2h4V2" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Fatigue — Yoga Can Help",
    desc: "Energizing yoga practices stimulate the lymphatic system, improve circulation, and boost vitality. Reclaim your energy and zest for life naturally.",
    tags: ["Energy Yoga", "Sun Salutation", "Inversions", "Breathwork"],
  },
  {
    id: "immunity",
    label: "Immunity",
    icon: "🛡️",
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Immunity — Yoga Can Help",
    desc: "Regular yoga practice reduces inflammation, improves lymphatic flow, and strengthens your immune response — keeping you naturally healthy year-round.",
    tags: ["Detox Yoga", "Twists", "Inversions", "Pranayama"],
  },
];

const styles = {
  section: {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(180deg, #f0f7e6 0%, #ffffff 100%)",
    padding: "80px 40px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  decorCircle1: {
    position: "absolute",
    top: -60, left: -60,
    width: 200, height: 200,
    borderRadius: "50%",
    background: "rgba(46,125,50,0.06)",
    pointerEvents: "none",
  },
  decorCircle2: {
    position: "absolute",
    bottom: -40, right: -40,
    width: 160, height: 160,
    borderRadius: "50%",
    background: "rgba(232,101,26,0.06)",
    pointerEvents: "none",
  },
  badge: {
    display: "inline-block",
    background: "rgba(46,125,50,0.1)",
    color: "#2E7D32",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "6px 18px",
    borderRadius: 50,
    marginBottom: 16,
  },
  heading: {
    fontSize: 42,
    fontWeight: 700,
    color: "#1A2E1A",
    margin: "0 0 10px",
    lineHeight: 1.2,
  },
  headingAccent: {
    color: "#E8651A",
  },
  subtext: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 17,
    color: "#555",
    margin: "0 auto 16px",
    maxWidth: 480,
    lineHeight: 1.6,
  },
  divider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 48,
  },
  dividerLine: {
    width: 60,
    height: 2,
    background: "#2E7D32",
    borderRadius: 2,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
    maxWidth: 900,
    margin: "0 auto 36px",
  },
  card: (isActive, isHovered) => ({
    background: isActive ? "rgba(232,101,26,0.05)" : "rgba(255,255,255,0.9)",
    border: `1.5px solid ${isActive ? "#E8651A" : isHovered ? "#2E7D32" : "rgba(46,125,50,0.18)"}`,
    borderRadius: 18,
    padding: "24px 12px 20px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    transform: isHovered && !isActive ? "translateY(-5px)" : "translateY(0)",
    boxShadow: isHovered ? "0 12px 28px rgba(46,125,50,0.15)" : "none",
  }),
  iconWrap: (isActive) => ({
    width: 58,
    height: 58,
    borderRadius: "50%",
    background: isActive ? "rgba(232,101,26,0.12)" : "rgba(46,125,50,0.08)",
    border: `1.5px solid ${isActive ? "rgba(232,101,26,0.3)" : "rgba(46,125,50,0.2)"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s",
    color: isActive ? "#E8651A" : "#2E7D32",
  }),
  cardLabel: (isActive) => ({
    fontSize: 13,
    fontWeight: 600,
    color: isActive ? "#E8651A" : "#1A2E1A",
    transition: "color 0.25s",
  }),
  resultBox: {
    background: "#fff",
    border: "1.5px solid rgba(46,125,50,0.2)",
    borderRadius: 16,
    padding: "22px 28px",
    maxWidth: 900,
    margin: "0 auto 36px",
    textAlign: "left",
    display: "flex",
    gap: 20,
    alignItems: "flex-start",
    animation: "fadeSlideIn 0.3s ease",
  },
  resultEmoji: {
    fontSize: 40,
    flexShrink: 0,
    marginTop: 2,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1A2E1A",
    margin: "0 0 8px",
  },
  resultDesc: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 15,
    color: "#555",
    lineHeight: 1.7,
    margin: "0 0 14px",
  },
  tagsWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    background: "rgba(46,125,50,0.08)",
    color: "#2E7D32",
    fontSize: 12,
    fontWeight: 600,
    padding: "5px 14px",
    borderRadius: 50,
    border: "1px solid rgba(46,125,50,0.15)",
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#E8651A",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    padding: "15px 40px",
    borderRadius: 50,
    border: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    transition: "all 0.25s",
  },
};

// Inject keyframes once
const styleTag = document.createElement("style");
styleTag.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
if (!document.head.querySelector("[data-yoga-style]")) {
  styleTag.setAttribute("data-yoga-style", "true");
  document.head.appendChild(styleTag);
}

function SolutionCard({ item, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={styles.card(isActive, hovered)}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={(e) => e.key === "Enter" && onClick(item)}
    >
      <div style={styles.iconWrap(isActive)}>
        {item.svgIcon}
      </div>
      <span style={styles.cardLabel(isActive)}>{item.label}</span>
    </div>
  );
}

export default function FindSolution() {
  const [active, setActive] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  const handleCardClick = (item) => {
    setActive((prev) => (prev?.id === item.id ? null : item));
  };

  return (
    <section style={styles.section}>
      {/* Decorative circles */}
      <div style={styles.decorCircle1} aria-hidden="true" />
      <div style={styles.decorCircle2} aria-hidden="true" />

      {/* Badge */}
      <div style={styles.badge}>Yoga Solutions</div>

      {/* Heading */}
      <h2 style={styles.heading}>
        Find a Solution{" "}
        <span style={styles.headingAccent}>For..</span>
      </h2>

      {/* Subtext */}
      <p style={styles.subtext}>
        Whatever you're going through, yoga has an answer.
        Choose your challenge below.
      </p>

      {/* Divider */}
      <div style={styles.divider}>
        <div style={styles.dividerLine} />
        <span style={{ fontSize: 22 }}>🪷</span>
        <div style={styles.dividerLine} />
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {solutions.map((item) => (
          <SolutionCard
            key={item.id}
            item={item}
            isActive={active?.id === item.id}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Result Box */}
      {active && (
        <div style={styles.resultBox} key={active.id}>
          <div style={styles.resultEmoji} aria-hidden="true">
            {active.icon}
          </div>
          <div>
            <h3 style={styles.resultTitle}>{active.title}</h3>
            <p style={styles.resultDesc}>{active.desc}</p>
            <div style={styles.tagsWrap}>
              {active.tags.map((tag) => (
                <span key={tag} style={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Button */}
      <Link
        to="/auth"
        style={{
          ...styles.ctaBtn,
          ...(ctaHovered
            ? {
                background: "#d45a14",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(232,101,26,0.3)",
              }
            : {}),
          display: 'inline-block'
        }}
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
      >
        🧘 Explore All Classes
      </Link>
    </section>
  );
}
