"use client";

import React from "react";
import {
  Home,
  GraduationCap,
  BookOpen,
  Clock,
  ShieldCheck,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  Laptop,
  Award,
} from "lucide-react";

export default function HomePage() {
  const benefits = [
    { icon: Clock, label: "Study anytime, anywhere" },
    { icon: Laptop, label: "100% online learning experience" },
    { icon: ShieldCheck, label: "Built with compliance in mind" },
    { icon: Award, label: "Career-focused agent training" },
  ];

  const courses = [
    {
      title: "Pre-Licensing Course",
      desc: "Complete required real estate education through a clean online platform.",
    },
    {
      title: "Exam Prep Program",
      desc: "Practice questions, review materials, and study support for exam readiness.",
    },
    {
      title: "New Agent Training",
      desc: "Learn contracts, client communication, marketing, and brokerage basics.",
    },
  ];

  const steps = [
    "Enroll online",
    "Complete course modules",
    "Track your progress",
    "Prepare for the exam",
    "Start your real estate career",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.9; }
        }
        .float-animation {
          animation: float 5s ease-in-out infinite;
        }
        .glow-animation {
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl">
            <div className="w-10 h-10 rounded-2xl bg-white text-slate-950 flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            Equity Real Estate School
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#courses" className="hover:text-white">Courses</a>
            <a href="#steps" className="hover:text-white">How It Works</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-white text-slate-950 px-5 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Enroll Now
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full glow-animation" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full glow-animation" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm mb-8">
              <GraduationCap className="w-4 h-4" />
              Online Real Estate Education Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-7">
              Build Your Real Estate Career Online
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-9">
              A modern online real estate school concept designed for future
              agents, course enrollment, exam preparation, and career-focused
              training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="bg-white text-slate-950 px-7 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                View Courses <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="border border-white/20 px-7 py-4 rounded-2xl font-bold inline-flex items-center justify-center hover:bg-white/10 transition"
              >
                Request Information
              </a>
            </div>
          </div>

          <div className="relative float-animation">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
              <div className="bg-white text-slate-950 rounded-[1.5rem] p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Why Students Choose Us
                </h2>

                <div className="space-y-5">
                  {benefits.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <p className="font-semibold">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white text-slate-950 rounded-3xl p-5 shadow-xl hidden md:block">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-slate-500">Online Concept</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-white text-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Course Programs
            </h2>
            <p className="text-slate-600 text-lg">
              A scalable structure for pre-licensing, exam prep, and agent
              development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="group border rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <BookOpen className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-slate-600 mb-7 leading-relaxed">
                  {course.desc}
                </p>

                <button className="w-full bg-slate-950 text-white rounded-2xl py-3 font-semibold hover:bg-slate-800 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="py-24 bg-slate-100 text-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple Student Journey
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              This section can later connect to the full LMS, enrollment system,
              payments, student dashboard, and certificate generation.
            </p>

            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:translate-x-2 transition"
                >
                  <div className="w-10 h-10 bg-slate-950 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 text-white rounded-[2rem] p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Future Platform Features
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Student Login",
                "Course Progress",
                "Online Payments",
                "Quiz Tracking",
                "Final Exam Rules",
                "Certificates",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Designed for Growth
            </h2>
            <p className="text-slate-600 text-lg">
              A professional concept page your team can expand into a complete
              education platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              "Modern branding for real estate education.",
              "Clear course positioning and enrollment CTA.",
              "Expandable structure for LMS and compliance.",
            ].map((quote, idx) => (
              <div key={idx} className="rounded-3xl border p-8 shadow-sm">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">“{quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-950 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {[
              [
                "Is this a full LMS already?",
                "Not yet. This is currently a front-end landing page prototype. The backend, student login, payments, database, and LMS functions can be added next.",
              ],
              [
                "Can this become a real online school platform?",
                "Yes. The design can be expanded into a complete LMS with enrollment, quizzes, progress tracking, and certificates.",
              ],
              [
                "Is the website live?",
                "Yes. The landing page can be deployed publicly through Vercel and shared by URL.",
              ],
            ].map(([question, answer], idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/10 rounded-3xl p-7"
              >
                <h3 className="text-xl font-bold mb-3">{question}</h3>
                <p className="text-slate-300 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white text-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-950 text-white rounded-[2rem] p-8 md:p-14 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build the Full Platform?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                This landing page can be the first step toward a full online
                real estate school with student accounts, LMS, payments, course
                tracking, and compliance workflows.
              </p>

              <div className="space-y-4 text-slate-300">
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5" /> (000) 000-0000
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5" /> info@yourrealestateschool.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-slate-950">
              <h3 className="text-2xl font-bold mb-6">Request Information</h3>

              <div className="space-y-4">
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Full Name" />
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Email Address" />
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Phone Number" />
                <textarea className="w-full rounded-2xl border px-4 py-3 min-h-[120px]" placeholder="Message" />
                <button className="w-full bg-slate-950 text-white py-3 rounded-2xl font-bold hover:bg-slate-800 transition">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-400">
          <p>© 2026 Equity Real Estate School. All rights reserved.</p>
          <p>This is a front-end landing page prototype.</p>
        </div>
      </footer>
    </main>
  );
}