import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="footer" className="bg-darkText py-14 text-white">
      <div className="section-container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-heading text-xl font-bold">YogaWomans</h3>
          <p className="mt-3 text-white/80">
            Women-focused yoga and mindfulness for strength, balance, and peace.
          </p>
          <p className="mt-4 text-sm text-white/70">Contact: hello@yogawomans.com</p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="#home">Home</a></li>
            <li><a href="#discover">Discover Yoga</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#programs">Programs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Legal</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Newsletter</h4>
          <form className="mt-3 space-y-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primaryOrange"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primaryOrange px-4 py-2 font-heading font-semibold text-white"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex gap-3 text-lg">
            <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
