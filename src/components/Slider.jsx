import { useEffect, useMemo, useState } from "react";
import { FaLeaf, FaSpa, FaBolt, FaHeart, FaBrain } from "react-icons/fa";

const cards = [
  { icon: FaLeaf, title: "Improve Flexibility", desc: "Gentle stretches help your body feel free and strong." },
  { icon: FaSpa, title: "Reduce Stress", desc: "Breath-centered practices calm your nervous system." },
  { icon: FaBolt, title: "Boost Energy", desc: "Dynamic movement keeps your day focused and vibrant." },
  { icon: FaBrain, title: "Increase Mindfulness", desc: "Stay present with guided meditation and body awareness." },
  { icon: FaHeart, title: "Enhance Well-being", desc: "Build lifelong habits for strength, joy, and confidence." }
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const orderedCards = useMemo(
    () => [...cards.slice(activeIndex), ...cards.slice(0, activeIndex)],
    [activeIndex]
  );

  return (
    <section id="discover" className="bg-lightSage py-16 sm:py-20">
      <div className="section-container">
        <h2 className="text-center font-heading text-3xl font-extrabold text-darkText sm:text-4xl">Your Yoga Benefits</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-grayText">
          Auto-flowing wellness highlights crafted for women balancing strength and serenity.
        </p>

        <div className="mt-10 overflow-hidden">
          <div className="flex gap-5 transition-transform duration-700">
            {orderedCards.map((card) => (
              <article
                key={card.title}
                className="glass-card min-w-[85%] p-6 shadow-soft sm:min-w-[48%] lg:min-w-[31%]"
              >
                <card.icon className="animate-float text-3xl text-primaryBlue" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-xl font-bold text-darkText">{card.title}</h3>
                <p className="mt-2 text-grayText">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
