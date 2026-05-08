import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "stress",
    label: "Stress",
    icon: "🧘",
    title: "Stress — Yoga Can Help",
    desc: "Chronic stress affects your body and mind. Our breathing techniques and restorative yoga help activate the parasympathetic nervous system naturally.",
    tags: ["Pranayama", "Meditation"],
  },
  {
    id: "mental",
    label: "Mental",
    icon: "🧠",
    title: "Mental Health — Yoga Can Help",
    desc: "Yoga supports mental wellness through mindfulness and breathwork that calm the nervous system.",
    tags: ["Mindfulness", "Breathing"],
  },
  {
    id: "weight",
    label: "Weight",
    icon: "⚖️",
    title: "Weight Loss — Yoga Can Help",
    desc: "Power yoga and vinyasa flow improve metabolism and burn calories naturally.",
    tags: ["Power Yoga", "Vinyasa"],
  },
  {
    id: "depression",
    label: "Mood",
    icon: "🌤️",
    title: "Depression — Yoga Can Help",
    desc: "Gentle yoga and mindful breathing can improve mood and emotional balance.",
    tags: ["Yoga Nidra", "Breathwork"],
  },
  {
    id: "anger",
    label: "Anger",
    icon: "😤",
    title: "Anger — Yoga Can Help",
    desc: "Yoga teaches pause and awareness so emotions become easier to manage.",
    tags: ["Meditation", "Yin Yoga"],
  },
  {
    id: "sleep",
    label: "Sleep",
    icon: "😴",
    title: "Sleep — Yoga Can Help",
    desc: "Night yoga routines relax your nervous system and improve sleep quality.",
    tags: ["Restorative", "Stretching"],
  },
  {
    id: "wellness",
    label: "Wellness",
    icon: "🌸",
    title: "Wellness — Yoga Can Help",
    desc: "Yoga creates harmony between body, mind, and soul for complete wellness.",
    tags: ["Hatha Yoga", "Detox"],
  },
  {
    id: "backpain",
    label: "Back Pain",
    icon: "🦴",
    title: "Back Pain — Yoga Can Help",
    desc: "Therapeutic yoga improves posture and relieves chronic back pain naturally.",
    tags: ["Stretching", "Core"],
  },
  {
    id: "energy",
    label: "Energy",
    icon: "⚡",
    title: "Fatigue — Yoga Can Help",
    desc: "Yoga boosts circulation and energy while calming mental exhaustion.",
    tags: ["Sun Salutation", "Flow"],
  },
];

function FindSolution() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="
      relative
      overflow-hidden

      bg-[linear-gradient(180deg,#f7f4ee_0%,#fffaf4_35%,#f3f8ef_100%)]

      px-4
      py-24

      md:px-10
      "
    >

      {/* TOP DECOR */}
      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#7d9b76]/10 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#d9924c]/10 blur-3xl" />

      {/* BADGE */}
      <div className="mb-5 flex justify-center">

        <div
          className="
          rounded-full

          border border-[#7d9b76]/20

          bg-white/60

          px-5
          py-2

          text-[11px]
          font-semibold
          uppercase
          tracking-[0.25em]

          text-[#6f8b67]

          backdrop-blur-md
          "
        >
          Yoga Solutions
        </div>

      </div>

      {/* HEADING */}
      <h2
        className="
        text-center

        text-4xl
        font-bold

        leading-tight

        text-[#2d241d]

        sm:text-5xl
        "
      >
        Find a Solution{" "}
        <span className="text-[#c77732]">
          For..
        </span>
      </h2>

      {/* SUBTEXT */}
      <p
        className="
        mx-auto
        mt-5
        max-w-[650px]

        text-center
        text-[15px]
        leading-relaxed

        text-[#6f665d]

        sm:text-[17px]
        "
      >
        Whatever you're going through, yoga has an answer.
        Choose your challenge below and explore calming solutions.
      </p>

      {/* DIVIDER */}
      <div className="mt-8 flex items-center justify-center gap-4">

        <div className="h-[2px] w-14 rounded-full bg-[#7d9b76]" />

        <span className="text-2xl">
          🪷
        </span>

        <div className="h-[2px] w-14 rounded-full bg-[#c77732]" />

      </div>

      {/* GRID */}
      <div
        className="
        mx-auto
        mt-14

        grid
        max-w-[1100px]

        grid-cols-3
        gap-4

        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        "
      >

        {solutions.map((item) => {

          const isActive = active?.id === item.id;

          return (
            <button
              key={item.id}
              onClick={() =>
                setActive(isActive ? null : item)
              }
              className={`
              group

              rounded-[28px]

              border

              p-5

              transition-all
              duration-300

              ${
                isActive
                  ? "border-[#c77732] bg-[#fff6ee] shadow-[0_18px_40px_rgba(199,119,50,0.12)]"
                  : "border-[#7d9b76]/15 bg-[#C0E1D2] hover:-translate-y-1 hover:border-[#7d9b76]/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
              }

              backdrop-blur-xl
              `}
            >

              {/* ICON */}
              <div
                className={`
                mx-auto

                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-[22px]

                text-3xl

                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-[#fff0e0]"
                    : "bg-[#f3f8ef]"
                }
                `}
              >
                {item.icon}
              </div>

              {/* LABEL */}
              <h3
                className={`
                mt-4

                text-sm
                font-semibold

                ${
                  isActive
                    ? "text-[#c77732]"
                    : "text-[#2d241d]"
                }
                `}
              >
                {item.label}
              </h3>

            </button>
          );
        })}

      </div>

      {/* RESULT BOX */}
      {active && (

        <div
          className="
          mx-auto
          mt-12

          max-w-[950px]

          rounded-[30px]

          border
          border-[#7d9b76]/10

          bg-white/75

          p-7

          shadow-[0_20px_50px_rgba(0,0,0,0.06)]

          backdrop-blur-2xl
          "
        >

          <div className="flex flex-col gap-5 md:flex-row">

            {/* EMOJI */}
            <div
              className="
              flex
              h-20
              w-20
              items-center
              justify-center

              rounded-[24px]

              bg-[#fff3e6]

              text-4xl
              "
            >
              {active.icon}
            </div>

            {/* CONTENT */}
            <div className="flex-1">

              <h3
                className="
                text-2xl
                font-bold

                text-[#2d241d]
                "
              >
                {active.title}
              </h3>

              <p
                className="
                mt-3

                text-[15px]
                leading-relaxed

                text-[#6f665d]
                "
              >
                {active.desc}
              </p>

              {/* TAGS */}
              <div className="mt-5 flex flex-wrap gap-3">

                {active.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                    rounded-full

                    border
                    border-[#7d9b76]/15

                    bg-[#f4f8f1]

                    px-4
                    py-2

                    text-xs
                    font-semibold

                    text-[#6f8b67]
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

      {/* BUTTON */}
      <div className="mt-14 flex justify-center">

        <Link
          to="/auth"
          className="
          inline-flex
          items-center
          gap-3

          rounded-full

          bg-[linear-gradient(135deg,#c77732,#d9924c)]

          px-8
          py-4

          text-sm
          font-semibold
          uppercase
          tracking-[0.08em]

          text-white

          shadow-[0_14px_35px_rgba(199,119,50,0.28)]

          transition-all
          duration-300

          hover:-translate-y-1
          "
        >
          🧘 Explore All Classes
        </Link>

      </div>

    </section>
  );
}

export default FindSolution;