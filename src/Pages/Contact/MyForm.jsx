import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const MyForm = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white">
                <FaPaperPlane />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Send Us a Message</h2>
                <p className="text-sm text-gray-500">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                />

                {/* CALENDAR FIX */}
                <input
                  type="date"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                />
              </div>

              {/* SERVICE DROPDOWN FIX */}
              <select className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm">
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Pre Wedding</option>
                <option>Engagement</option>
                <option>Birthday</option>
              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your event and requirements..."
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
              ></textarea>

              <button className="w-full py-3 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <InfoCard
              icon={<FaPhoneAlt />}
              title="Phone"
              text={["+91 98765 43210", "+91 91234 56789"]}
              color="bg-green-500"
            />

            <InfoCard
              icon={<FaEnvelope />}
              title="Email"
              text={["hello@yourbrand.com", "booking@yourbrand.com"]}
              color="bg-blue-500"
            />

            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Studio Address"
              text={["123 Wedding Lane", "Photography City, India"]}
              color="bg-pink-500"
            />

            <InfoCard
              icon={<FaClock />}
              title="Working Hours"
              text={["Mon - Sat: 10AM - 7PM", "Sunday: By Appointment"]}
              color="bg-orange-500"
            />

            {/* FOLLOW */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-semibold mb-2">✨ Follow Us</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Stay updated with our latest work and behind-the-scenes content.
                </p>

                <div className="flex gap-4">
                  <SocialIcon icon={<FaFacebookF />} href="https://facebook.com" />
                  <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
                  <SocialIcon icon={<FaYoutube />} href="https://youtube.com" />
                </div>
              </div>

              <div className="text-center">
                <img
                  src="/chetan.png"
                  alt="Co Founder"
                  className="w-20 h-20 rounded-full border-2 border-pink-400 object-cover mx-auto"
                />
                <h4 className="mt-3 font-semibold text-gray-800">
                  Co-Founder &
                </h4>
                <p className="text-sm text-gray-900">
                  Cinematographer
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="bg-pink-50 rounded-2xl overflow-hidden shadow-md">
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps?q=26.9060079,75.7486966&z=18&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                ></iframe>
              </div>

              <div className="p-6 text-center">
                <h4 className="font-semibold text-lg">Visit Our Studio</h4>
                <p className="text-sm text-gray-600 mt-1">
                  123 Wedding Lane, Photography City
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, text, color }) => (
  <div className="group bg-white rounded-2xl shadow-md p-6 flex gap-4 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl">
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white`}>
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      {text.map((t, i) => (
        <p key={i} className="text-sm text-gray-600">{t}</p>
      ))}
    </div>
  </div>
);

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center transition-all hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:text-white"
  >
    {icon}
  </a>
);

export default MyForm;
