import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ananya R.",
    text: "I found strength and softness in one place. Every class feels designed for real women and real lives."
  },
  {
    name: "Meera K.",
    text: "YogaWomans helped me reduce stress and reconnect with myself after years of burnout."
  },
  {
    name: "Sara M.",
    text: "The instructors are compassionate, powerful, and deeply inspiring. I finally stay consistent."
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-lightSage py-16 sm:py-20">
      <div className="section-container">
        <h2 className="text-center font-heading text-3xl font-extrabold sm:text-4xl">What Women Are Saying</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="glass-card p-6 shadow-soft">
              <div className="h-12 w-12 rounded-full bg-primaryBlue/20" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-lg font-bold text-darkText">{item.name}</h3>
              <p className="mt-3 text-grayText">{item.text}</p>
              <div className="mt-4 flex gap-1 text-primaryOrange" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
