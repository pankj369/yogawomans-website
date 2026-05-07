function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
          alt="Women practicing yoga together"
          loading="lazy"
          className="h-full min-h-[320px] w-full rounded-3xl object-cover shadow-glow"
        />

        <article className="glass-card p-7 sm:p-9">
          <h2 className="font-heading text-3xl font-extrabold text-darkText sm:text-4xl">About YogaWomans</h2>
          <p className="mt-4 font-body text-lg leading-8 text-grayText">
            YogaWomans is a mindful wellness space created for women to reconnect with their
            strength, softness, and self-belief through authentic yoga practices.
          </p>

          <h3 className="mt-7 font-heading text-2xl font-bold text-primaryBlue">Our Story</h3>
          <p className="mt-3 font-body text-base leading-8 text-grayText sm:text-lg">
            We began as a small studio with a simple intention: to offer a safe, supportive
            environment where women could breathe deeply, heal gently, and grow confidently at
            every life stage.
          </p>

          <h3 className="mt-7 font-heading text-2xl font-bold text-primaryOrange">Philosophy</h3>
          <p className="mt-3 font-body text-base leading-8 text-grayText sm:text-lg">
            We believe wellness is not about perfection, it is about consistent progress. Every
            class blends mindful movement, breath awareness, and inner calm so your body and
            mind evolve together.
          </p>

          <h3 className="mt-7 font-heading text-2xl font-bold text-primaryGreen">Mission</h3>
          <p className="mt-3 font-body text-base leading-8 text-grayText sm:text-lg">
            Our mission is to empower women with holistic yoga, emotional resilience, and a
            warm community that inspires a healthier, happier, and more balanced life.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primaryBlue/20 bg-primaryBlue/5 p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-primaryBlue">
                Sessions
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-darkText">5000+</p>
              <p className="mt-1 font-body text-sm leading-6 text-grayText">Guided classes delivered with care.</p>
            </div>
            <div className="rounded-2xl border border-primaryGreen/20 bg-primaryGreen/5 p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-primaryGreen">
                Community
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-darkText">1200+</p>
              <p className="mt-1 font-body text-sm leading-6 text-grayText">Women growing together every month.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
