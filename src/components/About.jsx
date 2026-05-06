function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
          alt="Women practicing yoga together"
          loading="lazy"
          className="h-full min-h-[320px] w-full rounded-3xl object-cover shadow-glow"
        />

        <article className="glass-card p-6 sm:p-8">
          <h2 className="font-heading text-3xl font-extrabold text-darkText sm:text-4xl">About YogaWomans</h2>
          <h3 className="mt-6 font-heading text-xl font-bold text-primaryBlue">Our Story</h3>
          <p className="mt-2 text-grayText">
            YogaWomans began as a safe space where women could breathe deeply, heal gently, and rediscover their strength.
          </p>
          <h3 className="mt-5 font-heading text-xl font-bold text-primaryOrange">Philosophy</h3>
          <p className="mt-2 text-grayText">
            We believe wellness is not perfection, it is progress. Every session honors your body, mind, and personal rhythm.
          </p>
          <h3 className="mt-5 font-heading text-xl font-bold text-primaryGreen">Mission</h3>
          <p className="mt-2 text-grayText">
            To empower women through mindful movement, emotional resilience, and a supportive global sisterhood.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
