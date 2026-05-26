"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071b3a] text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#071b3a]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#d4af37]">Equity Realty</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#courses" className="hover:text-[#d4af37]">Courses</a>
            <a href="#requirements" className="hover:text-[#d4af37]">Requirements</a>
            <a href="#packages" className="hover:text-[#d4af37]">Packages</a>
            <a href="#contact" className="hover:text-[#d4af37]">Contact</a>
          </div>
          <button className="bg-[#d4af37] text-[#071b3a] px-5 py-2 rounded-full font-semibold">
            Enroll Now
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b3a] via-[#071b3a]/90 to-[#071b3a]/60" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#d4af37] font-semibold mb-4 animate-pulse">
              California Real Estate License Online
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Start Your Real Estate Career with Confidence
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Online real estate courses designed to help future agents complete their education, prepare for the exam, and begin their career path.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#d4af37] text-[#071b3a] px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition">
                View Course Packages
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
                Learn Requirements
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 shadow-2xl animate-float">
            <h2 className="text-3xl font-bold mb-6 text-[#d4af37]">Fast & Easy Online Learning</h2>
            <div className="space-y-4">
              {[
                "DRE-style course structure",
                "Self-paced online lessons",
                "Exam preparation support",
                "Beginner-friendly content",
                "Real estate career guidance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#d4af37] rounded-full" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="courses" className="py-20 px-6 bg-white text-[#071b3a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#d4af37] font-bold mb-3">COURSE FEATURES</p>
          <h2 className="text-4xl font-bold mb-12">
            Everything You Need to Begin
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Estate Principles",
                text: "Learn agency, contracts, finance, appraisal, fair housing, and key real estate fundamentals.",
              },
              {
                title: "Real Estate Practice",
                text: "Understand transactions, marketing, escrow, disclosures, property management, and client service.",
              },
              {
                title: "Exam Preparation",
                text: "Prepare with practice questions, review materials, and guided study support.",
              },
            ].map((card) => (
              <div key={card.title} className="p-8 rounded-3xl shadow-xl border hover:-translate-y-2 transition bg-white">
                <div className="h-40 rounded-2xl mb-6 bg-gradient-to-br from-[#071b3a] to-[#d4af37]" />
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="py-20 px-6 bg-[#f7f4ec] text-[#071b3a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#d4af37] font-bold mb-3">LICENSE REQUIREMENTS</p>
            <h2 className="text-4xl font-bold mb-6">
              How to Get Your California Real Estate License
            </h2>
            <p className="text-gray-700 mb-6">
              Students generally need to complete required real estate courses, apply for the state exam, pass the exam, and work with a broker after licensing.
            </p>

            <div className="space-y-4">
              {[
                "Be 18 years of age or older",
                "Complete required real estate education",
                "Apply for the California state exam",
                "Pass the state exam",
                "Begin your career with brokerage support",
              ].map((step, index) => (
                <div key={step} className="flex gap-4 items-start">
                  <div className="bg-[#071b3a] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200"
              alt="Real estate education"
              className="w-full h-[430px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-20 px-6 bg-[#071b3a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#d4af37] font-bold mb-3">COURSE PACKAGES</p>
          <h2 className="text-4xl font-bold mb-12">
            Choose the Right Package
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Basic", "$99", "Online course access"],
              ["Gold", "$149", "Courses + exam prep"],
              ["Platinum", "$199", "Full support + career tools"],
            ].map(([name, price, desc]) => (
              <div key={name} className="bg-white text-[#071b3a] rounded-3xl p-8 shadow-xl border-4 border-transparent hover:border-[#d4af37] transition">
                <h3 className="text-2xl font-bold mb-3">{name}</h3>
                <p className="text-5xl font-bold text-[#d4af37] mb-4">{price}</p>
                <p className="text-gray-600 mb-8">{desc}</p>
                <button className="w-full bg-[#071b3a] text-white py-4 rounded-full font-bold hover:bg-[#d4af37] hover:text-[#071b3a] transition">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white text-[#071b3a]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#d4af37] font-bold mb-3">STUDENT REVIEWS</p>
          <h2 className="text-4xl font-bold mb-12">
            What Students Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "The courses were easy to follow and helped me feel prepared.",
              "Great online program for anyone starting a real estate career.",
              "Simple, organized, and very helpful for exam preparation.",
            ].map((quote, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#f7f4ec] shadow">
                <p className="text-[#d4af37] text-2xl mb-4">★★★★★</p>
                <p className="text-gray-700 italic">“{quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-[#071b3a] to-[#0d2f63] text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Real Estate Career?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Join Equity Realty’s online real estate education platform and take the first step toward becoming a licensed real estate professional.
        </p>
        <button className="bg-[#d4af37] text-[#071b3a] px-10 py-4 rounded-full font-bold hover:scale-105 transition">
          Get Started Today
        </button>
      </section>

      <footer className="py-8 text-center bg-[#041126] text-white/60">
        © 2026 Equity Realty. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}