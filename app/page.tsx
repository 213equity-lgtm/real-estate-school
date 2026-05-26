"use client";

import React from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Headphones,
  Home,
  Mail,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";

export default function HomePage() {
  const courses = [
    {
      title: "Pre-License Courses",
      desc: "Start your real estate career with flexible online pre-license education.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      icon: BookOpen,
    },
    {
      title: "Exam Preparation",
      desc: "Practice questions, study tools, and review support to help you prepare.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      icon: GraduationCap,
    },
    {
      title: "New Agent Training",
      desc: "Learn practical real estate skills, client communication, and career basics.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      icon: Home,
    },
  ];

  const benefits = [
    { title: "100% Online", text: "Study on your own schedule", icon: Clock },
    { title: "Course Support", text: "Guidance for future agents", icon: Headphones },
    { title: "Career Focused", text: "Built for real estate success", icon: Trophy },
    { title: "Compliance Minded", text: "Designed with school requirements in mind", icon: ShieldCheck },
  ];

  return (
    <main className="min-h-screen bg-[#061b34] text-white overflow-hidden">
      <style jsx global>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes glowMove {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        .float-up { animation: floatUp 5s ease-in-out infinite; }
        .glow-move { animation: glowMove 4s ease-in-out infinite; }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#061b34]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <nav className="hidden lg:flex gap-8 text-sm font-semibold text-white/80">
            <a href="#" className="text-[#d4a63d]">Home</a>
            <a href="#courses" className="hover:text-[#d4a63d]">Get License</a>
            <a href="#courses" className="hover:text-[#d4a63d]">Exam Prep</a>
            <a href="#about" className="hover:text-[#d4a63d]">About</a>
            <a href="#contact" className="hover:text-[#d4a63d]">Contact</a>
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <div className="w-11 h-11 rounded-xl bg-[#d4a63d] flex items-center justify-center">
              <Home className="w-6 h-6 text-[#061b34]" />
            </div>
            <div className="text-2xl font-black">
              Equity <span className="text-[#d4a63d]">Realty</span>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
  backgroundImage:
    "linear-gradient(90deg, rgba(6,27,52,.96), rgba(6,27,52,.82), rgba(6,27,52,.45)), url('/classroom.jpg')",
}}
        />

        <div className="absolute top-32 right-24 w-[420px] h-[420px] bg-[#d4a63d]/20 rounded-full blur-3xl glow-move" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#d4a63d]/40 bg-[#d4a63d]/10 px-5 py-2 rounded-full text-sm font-bold text-[#d4a63d] mb-8">
              <Star className="w-4 h-4 fill-current" />
              ONLINE REAL ESTATE SCHOOL
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-7">
              Your Future in <br />
              <span className="text-[#d4a63d]">Real Estate</span> <br />
              Starts Here
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-9">
              A premium online real estate education website concept for licensing,
              exam preparation, and new agent training under Equity Realty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="bg-[#d4a63d] text-[#061b34] px-8 py-4 rounded-2xl font-black inline-flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                View Courses <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="border border-white/25 px-8 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition"
              >
                <Phone className="w-5 h-5" />
                Speak With Advisor
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur">
                    <Icon className="w-8 h-8 text-[#d4a63d] mb-4" />
                    <h3 className="font-black">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block float-up">
            <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
                alt="Modern real estate home"
                className="rounded-3xl h-[390px] object-cover w-full"
              />

              <div className="mt-8 bg-[#061b34]/90 border border-[#d4a63d]/30 rounded-3xl p-7">
                <h2 className="text-3xl font-black mb-4">
                  Unlock Your <span className="text-[#d4a63d]">Potential</span>
                </h2>
                <div className="space-y-3 text-white/80">
                  {["Flexible Learning", "Expert Support", "Exam Preparation", "Career Training"].map((text) => (
                    <p key={text} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#d4a63d]" />
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-white text-[#061b34] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#d4a63d] font-black mb-3">ONLINE REAL ESTATE COURSES</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Choose Your Path to Success
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              Course sections designed for future real estate professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.title}
                  className="group rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300 bg-white border"
                >
                  <div className="relative">
                    <img src={course.image} alt={course.title} className="h-64 w-full object-cover" />
                    <div className="absolute -bottom-8 left-8 w-16 h-16 rounded-2xl bg-[#d4a63d] flex items-center justify-center shadow-xl">
                      <Icon className="w-8 h-8 text-[#061b34]" />
                    </div>
                  </div>

                  <div className="p-8 pt-12">
                    <h3 className="text-2xl font-black mb-4">{course.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{course.desc}</p>
                    <button className="text-[#0b4a86] font-black flex items-center gap-2">
                      Explore Courses <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#061b34] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Students learning online"
            className="rounded-[2rem] shadow-2xl h-[430px] w-full object-cover"
          />

          <div>
            <p className="text-[#d4a63d] font-black mb-3">WHY EQUITY REALTY</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Built for Future Real Estate Professionals
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              This website is designed as a professional front-end landing page for
              an online real estate school. It can later be expanded with student
              login, payment processing, course tracking, quizzes, and certificate generation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {["Student Dashboard", "Online Enrollment", "Course Modules", "Certificate Workflow"].map((item) => (
                <div key={item} className="bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4a63d]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#061b34] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            ["100%", "Online Concept"],
            ["24/7", "Flexible Access"],
            ["3+", "Course Categories"],
            ["Career", "Focused Design"],
          ].map(([number, label]) => (
            <div key={label} className="text-center rounded-3xl bg-[#f7f4ec] p-8 shadow-sm">
              <h3 className="text-4xl font-black text-[#d4a63d] mb-2">{number}</h3>
              <p className="font-bold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#061b34] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Users className="w-14 h-14 text-[#d4a63d] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start Your Real Estate School Website?
          </h2>
          <p className="text-white/75 text-lg mb-8">
            Contact Equity Realty to continue building the full online school platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:213equity@gmail.com"
              className="bg-[#d4a63d] text-[#061b34] px-8 py-4 rounded-2xl font-black inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>

            <a
              href="tel:3105285240"
              className="border border-white/25 px-8 py-4 rounded-2xl font-black inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#041326] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">
          <p>© 2026 Equity Realty. All rights reserved.</p>
          <p>Online real estate school landing page prototype.</p>
        </div>
      </footer>
    </main>
  );
}