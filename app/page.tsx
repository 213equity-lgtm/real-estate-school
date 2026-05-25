"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Home, Clock, CheckCircle, Users, Phone, Mail, BookOpen, Star } from "lucide-react";

export default function HomePage() {
  const courses = [
    {
      title: "Pre-Licensing Course",
      desc: "Complete the required real estate education online at your own pace.",
    },
    {
      title: "Exam Prep Program",
      desc: "Practice questions, review materials, and guided study support.",
    },
    {
      title: "New Agent Training",
      desc: "Learn practical real estate skills beyond the textbook.",
    },
  ];

  const steps = [
    "Enroll online",
    "Complete your required courses",
    "Prepare for the state exam",
    "Pass the licensing exam",
    "Start your real estate career",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Home className="w-6 h-6" />
            Equity Real Estate School
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#courses">Courses</a>
            <a href="#steps">How It Works</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="bg-black text-white px-5 py-2 rounded-2xl">
            Enroll Now
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              Online Real Estate Education
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Start Your Real Estate Career Online
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Flexible online real estate courses designed for future agents
              who want clear instruction, practical guidance, and career-ready
              training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold">
                View Courses
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold">
                Speak With an Advisor
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white text-black rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                Why Students Choose Us
              </h2>

              <div className="space-y-5">
                {[
  { icon: Clock, label: "Study anytime, anywhere" },
  { icon: BookOpen, label: "Easy-to-follow course materials" },
  { icon: Users, label: "Support for new real estate agents" },
  { icon: CheckCircle, label: "Career-focused learning path" },
].map((item, idx) => {
  const Icon = item.icon;

  return (
    <div key={idx} className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>

      <p className="font-medium">{item.label}</p>
    </div>
  );
})}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">Online Courses</h2>

          <p className="text-slate-600 text-lg">
            Choose the program that matches your real estate career stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="border rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3">{course.title}</h3>

              <p className="text-slate-600 mb-6">{course.desc}</p>

              <button className="border px-5 py-2 rounded-2xl w-full">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="steps" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>

              <p className="text-slate-600 text-lg mb-8">
                A simple path from enrollment to your real estate career.
              </p>

              <div className="space-y-4">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>

                    <p className="font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Built for Busy Future Agents
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Our online learning format is designed for students balancing
                work, family, and career goals.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-slate-500">Online</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm text-slate-500">Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Student Feedback</h2>

          <p className="text-slate-600 text-lg">
            What students appreciate about online learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Clear lessons and easy access.",
            "Helpful for understanding the licensing process.",
            "Great starting point for a real estate career.",
          ].map((quote, idx) => (
            <div
              key={idx}
              className="border rounded-3xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-slate-700 mb-4">“{quote}”</p>

              <p className="font-semibold">Real Estate Student</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              [
                "Is the course fully online?",
                "Yes. The course is designed for online learning.",
              ],
              [
                "Who is this for?",
                "Future real estate agents and new agents.",
              ],
              [
                "Do you help after licensing?",
                "Yes. We offer new agent training and guidance.",
              ],
              [
                "How do I enroll?",
                "Use the contact form and our team will follow up.",
              ],
            ].map(([q, a], idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold mb-2">{q}</h3>

                <p className="text-slate-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start?
            </h2>

            <p className="text-slate-300 text-lg mb-8">
              Contact us today to learn more about online enrollment and
              course options.
            </p>

            <div className="space-y-3 text-slate-300">
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                (000) 000-0000
              </p>

              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                info@yourrealestateschool.com
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-6">
              Request Information
            </h3>

            <div className="space-y-4">
              <input
                className="w-full rounded-2xl border px-4 py-3"
                placeholder="Full Name"
              />

              <input
                className="w-full rounded-2xl border px-4 py-3"
                placeholder="Email Address"
              />

              <input
                className="w-full rounded-2xl border px-4 py-3"
                placeholder="Phone Number"
              />

              <textarea
                className="w-full rounded-2xl border px-4 py-3 min-h-[110px]"
                placeholder="Tell us what course you are interested in"
              />

              <button className="bg-black text-white px-5 py-3 rounded-2xl w-full">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Equity Real Estate School. All rights reserved.</p>

          <p>
            Licensing requirements vary by state. Verify your state
            requirements.
          </p>
        </div>
      </footer>
    </div>
  );
}