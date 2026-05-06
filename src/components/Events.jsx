const events = [
  { date: "18 May 2026", title: "Sunrise Flow Session", location: "Bangalore Lakeside Studio" },
  { date: "27 May 2026", title: "Women Wellness Retreat", location: "Rishikesh Riverside Camp" },
  { date: "02 Jun 2026", title: "Breathwork & Meditation", location: "Online Live Class" }
];

function Events() {
  return (
    <section id="events" className="py-16 sm:py-20">
      <div className="section-container">
        <h2 className="text-center font-heading text-3xl font-extrabold sm:text-4xl">Upcoming Events</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <article key={event.title} className="glass-card p-6 shadow-soft">
              <p className="font-heading text-sm font-bold uppercase tracking-wider text-primaryBlue">{event.date}</p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-darkText">{event.title}</h3>
              <p className="mt-2 text-grayText">{event.location}</p>
              <button
                type="button"
                className="mt-5 rounded-full bg-primaryGreen px-5 py-2 font-heading font-semibold text-white transition hover:bg-primaryBlue"
              >
                Reserve Spot
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
