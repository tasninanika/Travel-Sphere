import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("✅ Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Get in <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We'd love to hear from you. Whether you have a question about
            destinations, pricing, or anything else — our team is ready to
            answer all your questions.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl shadow-lg p-8 lg:p-10">
            <h2 className="text-2xl font-bold mb-6">Our Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-white/90">
                    123 Beach Road, Cox's Bazar <br /> Chittagong Division,
                    Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-white/90">
                    info@coxsbazartravel.com <br /> support@coxsbazartravel.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-white/90">
                    +880 123 456 7890 <br /> +880 987 654 3210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Working Hours</h3>
                  <p className="text-white/90">
                    Mon - Fri: 9:00 AM - 6:00 PM <br /> Sat: 10:00 AM - 4:00 PM
                    <br /> Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-5">
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-sky-400 transition-colors duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-pink-500 transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Cox's Bazar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.33899250238!2d91.9739224!3d21.4272404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
