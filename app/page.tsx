"use client";

import { ArrowRight, Home, Mail, Phone, Star } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#061b34] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#061b34]/95 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <nav className="hidden md:flex gap-8 text-sm font-bold text-white/80">
            <a className="text-[#d4a63d]" href="#">Home</a>
            <a href="#packages">View Packages</a>
            <a href="#about">About</a>
            <a href="#broker">Upgrade to Broker</a>
            <a href="#contact">Contact</a>
            <a href="#login">Login</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#d4a63d] flex items-center justify-center">
              <Home className="w-6 h-6 text-[#061b34]" />
            </div>
            <div className="text-2xl font-black">
              Equity <span className="text-[#d4a63d]">Realty</span>
            </div>
          </div>
        </div>
      </header>

      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(6,27,52,.96), rgba(6,27,52,.82), rgba(6,27,52,.55)), url('/classroom.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm mb-8 text-white/80">
              Home » California Real Estate License
            </div>

            <div className="inline-flex items-center gap-2 bg-[#d4a63d]/15 border border-[#d4a63d]/40 text-[#d4a63d] px-5 py-2 rounded-full font-bold mb-8">
              <Star className="w-4 h-4 fill-current" />
              CALIFORNIA REAL ESTATE LICENSE SCHOOL
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-7">
              California Real Estate <br />
              <span className="text-[#d4a63d]">License School</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-6">
              Get your California real estate license with high quality, online
              education at the best price. Our DRE-approved real estate courses
              make it easy to study at your own pace—whether you are in Los
              Angeles, San Francisco, San Diego, or anywhere in California.
            </p>

            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Online Real Estate Courses — Fast, Easy & Flexible
            </h2>

            <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-6">
              Get licensed on your own terms. Our California real estate courses
              are 100% online, easy to complete and designed for maximum
              flexibility. Start today and study when it works best for your
              schedule.
            </p>

            <p className="text-lg text-[#d4a63d] font-bold mb-9">
              DRE-Approved Education Provider (Sponsor ID: S0572)
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#packages"
                className="bg-[#d4a63d] text-[#061b34] px-8 py-4 rounded-2xl font-black inline-flex items-center justify-center gap-2"
              >
                View Packages <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:2134621983"
                className="border border-white/30 px-8 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (213) 462-1983
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
            <img
              src="/classroom.jpg"
              alt="Real estate class"
              className="rounded-3xl h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="packages" className="bg-[#5a82bd] py-10 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-[#ffd05a] text-black px-8 py-4 text-3xl font-black">
            SAVE 50%
          </div>

          <div>
            <h2 className="text-3xl font-black">BIG SAVINGS!</h2>
            <p className="text-xl">
              Save On All Real Estate Course Packages Today!
            </p>
            <p className="text-sm text-white/80">
              Prices reflect today’s discount. For your convenience, no code is
              necessary.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white text-[#061b34] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Questions? Call Our Friendly Staff —
        </h2>

        <a
          href="tel:2134621983"
          className="text-4xl font-black text-[#d4a63d]"
        >
          (213) 462-1983
        </a>

        <div className="mt-10">
          <a
            href="mailto:213equity@gmail.com"
            className="bg-[#061b34] text-white px-8 py-4 rounded-2xl font-black inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </div>
      </section>

      <footer className="bg-[#041326] border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © 2026 Equity Realty. Online real estate school landing page prototype.
      </footer>
    </main>
  );
}