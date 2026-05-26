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
  Video,
} from "lucide-react";

export default function HomePage() {
  const highlights = [
    "Get Your Real Estate License Fast & Easy",
    "Video-Enhanced Online Courses",
    "Easy-To-Understand Real Estate Lessons",
    "California Real Estate Education",
    "Open-Book Online Final Exams",
  ];

  const packages = [
    "Real Estate Principles",
    "Real Estate Practice",
    "Real Estate Finance",
  ];

  return (
    <main className="min-h-screen bg-white text-[#061b34]">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 font-black text-2xl">
            <div className="w-11 h-11 rounded-xl bg-[#d4a63d] flex items-center justify-center">
              <Home className="w-6 h-6 text-[#061b34]" />
            </div>
            Equity <span className="text-[#d4a63d]">Realty</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-bold text-[#0b3a67]">
            <a href="#">HOME</a>
            <a href="#packages">VIEW PACKAGES</a>
            <a href="#about">ABOUT</a>
            <a href="#broker">UPGRADE TO BROKER</a>
            <a href="/contact">CONTACT</a>
            <a href="#login">LOGIN</a>
          </nav>

          <a
            href="tel:2134621983"
            className="hidden lg:flex items-center gap-2 font-black text-[#061b34]"
          >
            <Phone className="w-5 h-5" />
            (213) 462-1983
          </a>
        </div>
      </header>

      <section
        className="relative min-h-[720px] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,27,52,.72), rgba(6,27,52,.72)), url('/classroom.jpg')",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
            California Real Estate License School
          </h1>

          <div className="space-y-3 text-2xl md:text-3xl font-bold mb-6">
            {highlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="flex justify-center gap-1 text-[#ffd447] mb-10">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-7 h-7 fill-current" />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="#packages"
              className="bg-[#d4a63d] text-[#061b34] px-8 py-4 rounded-xl font-black inline-flex items-center justify-center gap-2"
            >
              View Course Packages <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#steps"
              className="bg-[#d4a63d] text-[#061b34] px-8 py-4 rounded-xl font-black inline-flex items-center justify-center gap-2"
            >
              How Do I Get My License?
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#d4a63d]" />
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Get Your California Real Estate License Online
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Get your California real estate license with high-quality online
            education designed to help students study at their own pace from
            anywhere in California.
          </p>
        </div>
      </section>

      <section id="packages" className="bg-[#eef3fb] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#d4a63d] font-black mb-3">BIG SAVINGS!</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Save On Real Estate Course Packages Today
            </h2>
            <p className="text-slate-600">
              Prices reflect today’s discount. No code is necessary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((course) => (
              <div
                key={course}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
              >
                <BookOpen className="w-12 h-12 text-[#d4a63d] mb-5" />
                <h3 className="text-2xl font-black mb-4">{course}</h3>
                <p className="text-slate-600 mb-6">
                  Online course access with flexible learning materials and
                  student-friendly lessons.
                </p>
                <button className="bg-[#061b34] text-white px-6 py-3 rounded-xl font-black">
                  View Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="bg-[#061b34] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Step 1: Complete Your Courses",
              text: "Study online and complete your required real estate education.",
            },
            {
              icon: Video,
              title: "Step 2: Prepare for the Exam",
              text: "Use course materials, review tools, and exam preparation resources.",
            },
            {
              icon: CheckCircle,
              title: "Step 3: Start Your Career",
              text: "After passing the state exam, begin your real estate career.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/10 border border-white/10 rounded-3xl p-8"
              >
                <Icon className="w-12 h-12 text-[#d4a63d] mb-5" />
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-white/70">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="bg-white py-20 text-center">
        <h2 className="text-4xl font-black mb-6">
          Questions? Call Our Friendly Staff
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

      <footer className="bg-[#041326] text-white/60 py-8 text-center text-sm">
        © 2026 Equity Realty. Online real estate school landing page prototype.
      </footer>
    </main>
  );
}