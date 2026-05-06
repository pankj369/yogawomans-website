const programs = [
  {
    title: "Hatha Yoga",
    level: "Beginner",
    description: "Foundational postures and breathing to build confidence and calm.",
    image:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Vinyasa Yoga",
    level: "Intermediate",
    description: "Flowing sequences that connect movement and breath beautifully.",
    image:
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Yin Yoga",
    level: "Beginner",
    description: "Slow-paced deep stretches for recovery, flexibility, and grounding.",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Power Yoga",
    level: "Advanced",
    description: "Strength-focused, energizing sessions to challenge your limits.",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80"
  }
];

function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-20">
      <div className="section-container">
        <h2 className="text-center font-heading text-3xl font-extrabold sm:text-4xl">Programs & Classes</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <article key={program.title} className="group glass-card overflow-hidden shadow-soft transition hover:-translate-y-2">
              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <div className="inline-flex rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider text-primaryBlue">
                  {program.level}
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-darkText">{program.title}</h3>
                <p className="mt-2 text-grayText">{program.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
