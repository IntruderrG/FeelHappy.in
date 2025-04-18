import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-white py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
                  alt="phone"
                />
                <span className="transition-all duration-300 hover:text-2xl">
                  +91-8882601925
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/whatsapp.png"
                  alt="whatsapp"
                />
                <span className="transition-all duration-300 hover:text-2xl">
                  +91-9958414665
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/mail.png"
                  alt="mail"
                />
                <span className="transition-all duration-300 hover:text-2xl">
                  support@fluentify.com
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <div className="space-y-2">
              <ul className="list-disc pl-5">
                <li>
                  <a
                    href="/"
                    className="transition-all duration-300 hover:text-2xl"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="transition-all duration-300 hover:text-2xl"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/videochat"
                    className="transition-all duration-300 hover:text-2xl"
                  >
                    Video Chat
                  </a>
                </li>
                <li>
                  <a
                    href="/audiochat"
                    className="transition-all duration-300 hover:text-2xl"
                  >
                    Audio Chat
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="transition-all duration-300 hover:text-2xl"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="transition-all duration-300 hover:text-2xl"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/report"
                    className="transition-all duration-300 hover:text-2xl"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About</h2>
            <p>
              Fluentify is an innovative language learning platform developed to
              help users achieve fluency in multiple languages. Using advanced
              Artificial Intelligence and Machine Learning, Fluentify offers
              personalized lessons, real-time pronunciation feedback, and
              interactive video and audio call features with native speakers.
              Our Python-based model, powered by libraries like scikit-learn and
              pandas, ensures a seamless and effective learning experience. By
              combining cutting-edge technology with a user-friendly design,
              Fluentify aims to make language learning accessible and enjoyable
              for everyone. Together, let’s break language barriers and connect
              the world!
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-8">
          <a href="https://instagram.com/">
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/fluency/96/instagram-new.png"
              alt="instagram-new"
              className="transition-all duration-300 hover:scale-120"
            />
          </a>
          <a href="https://x.com/">
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/fluency/96/twitter.png"
              alt="twitter"
              className="transition-all duration-300 hover:scale-120"
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/color/96/facebook-new.png"
              alt="facebook-new"
              className="transition-all duration-300 hover:scale-120"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/color/96/linkedin.png"
              alt="linkedin"
              className="transition-all duration-300 hover:scale-120"
            />
          </a>
          <a href="https://intruderrg.github.io/Portfolio/" target="_blank">
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/nolan/96/developer.png"
              alt="developer"
              className="transition-all duration-300 hover:scale-120"
            />
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          Created and Developed @ <strong> Fluentify Team</strong>
        </div>
      </div>
    </>
  );
}

export default Footer;
