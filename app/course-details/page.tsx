export default function CourseDetailsPage() {
  return (
    <main className="min-h-screen bg-[#041326] text-white">
      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#061b34]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Equity <span className="text-[#d4a63d]">Realty</span>
          </h1>

          <a
            href="/courses"
            className="text-sm hover:text-[#d4a63d]"
          >
            Back to Courses
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[#d4a63d] font-bold mb-4">
            California DRE Approved
          </p>

          <h2 className="text-5xl font-black leading-tight mb-6">
            California Real Estate Principles
          </h2>

          <p className="text-white/70 text-lg mb-8">
            Start your real estate career with our flexible online
            California Real Estate Principles course designed for future
            agents and brokers.
          </p>

          <div className="space-y-4 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              ✔ 100% Online & Self-Paced
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              ✔ Video-Based Learning
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              ✔ Practice Exams Included
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              ✔ DRE Approved Course
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-5xl font-black text-[#d4a63d]">
              $99
            </span>

            <button className="bg-[#d4a63d] text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="/classroom.jpg"
            alt="Course"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>
    </main>
  );
}