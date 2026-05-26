"use client";

import React from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle,
  GraduationCap,
  Headphones,
  Home,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";

export default function HomePage() {
  const benefits = [
    { icon: GraduationCap, title: "100% Online", text: "Learn on your schedule" },
    { icon: ShieldCheck, title: "Compliance Ready", text: "Built with DRE needs in mind" },
    { icon: Headphones, title: "Expert Support", text: "Help from real estate professionals" },
    { icon: Trophy, title: "Exam Prep", text: "Prepare with confidence" },
  ];

  const courses = [
    {
      title: "Pre-License Courses",
      text: "Start your real estate career with online pre-license education.",
      icon: BookOpen,
    },
    {
      title: "Exam Preparation",
      text: "Practice, review, and prepare for the real estate exam.",
      icon: GraduationCap,
    },
    {
      title: "Post-License Training",
      text: "Advance your skills after becoming licensed.",
      icon: Building2,
    },
  ];

  return (
    <main className="min-h-screen bg-[#061b34] text-white overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes sweep {
          0% { transform: translateX(-20%) rotate(-10deg); opacity: 0.2; }
          50% { opacity: 0.9; }
          100% { transform: translateX(120%) rotate(-10deg); opacity: 0.2; }
        }
        .float { animation: float 5s ease-in-out infinite; }
        .glow { animation: glow 4s ease-in-out infinite; }
        .gold-sweep { animation: sweep 8s ease-in-out infinite; }
      `}</style>

      <header className="sticky top-0 z-50 bg-[#061b34]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <nav className="hidden lg:flex gap-8 text-sm font-medium text-white/80">
            <a className="text-[#f7b733] border-b-2 border-[#f7b733] pb-2" href="#">Home</a>
            <a href="#courses" className="hover:text-[#f7b733]">Get License</a>
            <a href="#courses" className="hover:text-[#f7b733]">Exam Prep</a>
            <a href="#courses" className="hover:text-[#f7b733]">Post-License</a>
            <a href="#contact" className="hover:text-[#f7b733]">Contact</a>
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f7b733] to-[#d99212] flex items-center justify-center shadow-lg">
              <Home className="w-6 h-6 text-[#061b34]" />
            </div>
            <div className="text-2xl font-black tracking-tight">
              Equity <span className="text-[#f7b733]">Realty</span>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-[760px] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(247,183,51,0.22),transparent_28%),linear-gradient(120deg,rgba(3,18,36,.95),rgba(6,42,82,.88)),url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061b34] via-[#061b34]/80 to-transparent" />
        <div className="absolute top-24 right-24 w-72 h-72 bg-[#f7b733]/20 rounded-full blur-3xl glow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl glow" />

        <div className="absolute bottom-16 left-[-10%] w-[120%] h-20 bg-gradient-to-r from-transparent via-[#f7b733] to-transparent rounded-full blur-sm gold-sweep" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#f7b733]/40 bg-[#f7b733]/10 text-[#f7b733] px-5 py-2 rounded-full text-sm font-bold mb-8">
              <Star className="w-4 h-4 fill-current" />
              ONLINE REAL ESTATE SCHOOL
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-7">
              Your Future in <br />
              <span className="text-[#f7b733]">Real Estate</span> <br />
              Starts Here
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-9">
              A premium online real estate education platform concept by Equity Realty,
              designed for licensing, exam preparation, and career growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="bg-gradient-to-r from-[#f7b733] to-[#d99212] text-[#061b34] px-8 py-4 rounded-2xl font-black inline-flex items-center justify-center gap-2 hover:scale-105 transition shadow-xl"
              >
                View Courses <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="border border-[#f7b733]/60 px-8 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-2 hover:bg-[#f7b733]/10 transition"
              >
                <Phone className="w-5 h-5" /> Speak With an Advisor
              </a>
            </div>

            <div className="grid sm:grid-cols-4 gap-4 mt-12">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                    <div className="w-12 h-12 rounded-full border border-[#f7b733] text-[#f7b733] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block float">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <div className="bg-[#071f3d]/90 border border-[#f7b733]/30 rounded-[1.5rem] p-8">
                <h2 className="text-3xl font-black mb-6">
                  Unlock Your <span className="text-[#f7b733]">Potential</span>
                </h2>
                <p className="text-white/75 mb-7">
                  Build a professional pathway for future real estate agents with online courses,
                  exam prep, and student support.
                </p>
                <div className="space-y-4">
                  {["Flexible Learning", "Expert Instructors", "Student Dashboard Ready", "Certificate Workflow"].map((x) => (
                    <p key={x} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#f7b733]" /> {x}
                    </p>
                  ))}
                </div>
                <button className="mt-8 w-full bg-[#f7b733] text-[#061b34] py-4 rounded-2xl font-black">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="relative bg-white text-[#061b34] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#d99212] font-bold mb-3">ONLINE REAL ESTATE COURSES</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Choose Your Path to <span className="text-[#d99212]">Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300 bg-white"
                >
                  <div className="h-52 bg-[linear-gradient(rgba(6,27,52,.35),rgba(6,27,52,.35)),url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center relative">
                    <div className="absolute -bottom-8 left-8 w-16 h-16 rounded-2xl bg-[#f7b733] text-[#061b34] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="p-8 pt-12">
                    <h3 className="text-2xl font-black mb-4">{course.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{course.text}</p>
                    <a className="font-black text-[#0b4a86] inline-flex items-center gap-2" href="#">
                      Explore Courses <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#061b34] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            ["25,000+", "Students Trained"],
            ["98%", "Exam Prep Focus"],
            ["100%", "Online Learning"],
            ["10+", "Years Experience"],
          ].map(([num, label]) => (
            <div key={label} className="text-center bg-white/10 border border-white/10 rounded-3xl p-8">
              <p className="text-4xl font-black text-[#f7b733]">{num}</p>
              <p className="text-white/75 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white text-[#061b34] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Build the Full Platform?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            This is a polished front-end concept. The next phase can include student login,
            payment processing, course tracking, quizzes, and certificate generation.
          </p>
          <a
            href="mailto:213equity@gmail.com"
            className="inline-flex items-center gap-2 bg-[#061b34] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#0b4a86] transition"
          >
            Contact Equity Realty <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="bg-[#061b34] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">
          <p>© 2026 Equity Realty. All rights reserved.</p>
          <p>Online real estate school landing page prototype.</p>
        </div>
      </footer>
    </main>
  );
}