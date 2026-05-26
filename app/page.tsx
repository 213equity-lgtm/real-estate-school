"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Home,
  Mail,
  Phone,
  Star,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#061b34] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#061b34]/95 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <nav className="hidden md:flex gap-8 text-sm font-bold text-white/80">
            <a className="text-[#d4a63d]" href="#">Home</a>
            <a href="#courses">Get License</a>
            <a href="#courses">Exam Prep</a>
            <a href="#contact">Contact</a>
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
            <div className="inline-flex items-center gap-2 bg-[#d4a63d]/15 border border-[#d4a63d]/40 text-[#d4a63d] px-5 py-2 rounded-full font-bold mb-8">
              <Star className="w-4 h-4 fill-current" />
              ONLINE REAL ESTATE SCHOOL
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-7">
              Your Future in <br />
              <span className="text-[#d4a63d]">Real Estate</span> <br />
              Starts Here
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-9">
              Flexible online real estate education designed for future agents
              who want practical training, licensing preparation, and career support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="bg-[#d4a63d] text-[#061b34] px-8 py-4 rounded-2xl font-black inline-flex items-center justify-center gap-2"
              >
                View Courses <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="border border-white/30 px-8 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Speak With Advisor
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
            <h2 className="text-3xl font-black mb-6">
              Why Students Choose Us
            </h2>

            <div className="space-y-5">
              {[
                "Study online or in class",
                "Easy-to-follow course materials",
                "Support for future real estate agents",
                "Career-focused learning path",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#d4a63d]" />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-white text-[#061b34] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#d4a63d] font-black mb-3">
            ONLINE REAL ESTATE COURSES
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Choose Your Path to Success
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Pre-License Courses",
              "Exam Preparation",
              "New Agent Training",
            ].map((course) => (
              <div key={course} className="rounded-3xl p-8 border shadow-lg">
                <BookOpen className="w-12 h-12 text-[#d4a63d] mx-auto mb-5" />
                <h3 className="text-2xl font-black mb-4">{course}</h3>
                <p className="text-slate-600 mb-6">
                  Online learning designed to help students start and grow their real estate career.
                </p>
                <button className="bg-[#061b34] text-white px-6 py-3 rounded-xl font-bold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#061b34] py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Ready to Start?
        </h2>
        <p className="text-white/70 mb-8">
          Contact Equity Realty to continue building the full online school platform.
        </p>

        <a
          href="mailto:213equity@gmail.com"
          className="bg-[#d4a63d] text-[#061b34] px-8 py-4 rounded-2xl font-black inline-flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Email Us
        </a>
      </section>

      <footer className="bg-[#041326] border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © 2026 Equity Realty. Online real estate school landing page prototype.
      </footer>
    </main>
  );
}