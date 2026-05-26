export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#041326] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/classroom.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#041326]/80" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <div className="inline-block bg-[#d4a63d]/20 border border-[#d4a63d]/30 text-[#d4a63d] px-5 py-2 rounded-full mb-8 font-semibold">
              ONLINE REAL ESTATE SCHOOL
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">
              Your Future in{" "}
              <span className="text-[#d4a63d]">
                Real Estate
              </span>{" "}
              Starts Here
            </h1>

            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-2xl">
              California Real Estate License School designed for future agents,
              brokers, and investors. Learn online anytime, anywhere.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <a
                href="/courses"
                className="bg-[#d4a63d] text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition"
              >
                View Courses
              </a>

              <a
                href="/contact"
                className="border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[40px] p-6 shadow-2xl">
              
              <img
                src="/classroom.jpg"
                alt="Classroom"
                className="rounded-3xl w-full h-[500px] object-cover"
              />

              <div className="mt-6 bg-[#041326] rounded-3xl p-6">
                <h3 className="text-3xl font-black mb-3">
                  Start Your Career Today
                </h3>

                <p className="text-white/70 mb-5">
                  Flexible online learning for California real estate students.
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[#d4a63d] font-bold text-2xl">
                    DRE Approved
                  </span>

                  <button className="bg-[#d4a63d] text-black px-5 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-5">
              Why Students Choose Equity Realty
            </h2>

            <p className="text-white/60 text-xl">
              Professional education with modern online learning tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">
              <div className="text-[#d4a63d] text-5xl mb-6">📘</div>

              <h3 className="text-2xl font-bold mb-4">
                DRE Approved Courses
              </h3>

              <p className="text-white/70 leading-relaxed">
                California real estate courses designed to help students pass
                licensing requirements with confidence.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">
              <div className="text-[#d4a63d] text-5xl mb-6">💻</div>

              <h3 className="text-2xl font-bold mb-4">
                Learn Anywhere
              </h3>

              <p className="text-white/70 leading-relaxed">
                Study online at your own pace using mobile-friendly course
                materials and video training.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:scale-105 transition">
              <div className="text-[#d4a63d] text-5xl mb-6">🏡</div>

              <h3 className="text-2xl font-bold mb-4">
                Career Focused
              </h3>

              <p className="text-white/70 leading-relaxed">
                Prepare for real-world real estate careers with practical
                knowledge and professional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-white/50">
            © 2026 Equity Realty Real Estate School
          </p>

          <p className="text-white/50">
            (213) 462-1983
          </p>
        </div>
      </footer>
    </main>
  );
}