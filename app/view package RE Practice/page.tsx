export default function RealEstatePracticePage() {
  return (
    <main className="min-h-screen bg-[#041326] text-white">
      <header className="bg-[#061b34] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
          <h1 className="text-2xl font-black">
            Equity <span className="text-[#d4a63d]">Realty</span>
          </h1>

          <a href="/courses" className="hover:text-[#d4a63d]">
            Back to Packages
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#d4a63d] font-bold mb-4">
            REAL ESTATE PRACTICE PACKAGE
          </p>

          <h2 className="text-5xl font-black mb-6">
            Real Estate Practice
          </h2>

          <p className="text-white/70 text-lg mb-8">
            Online course access with flexible learning materials and
            student-friendly lessons designed for California real estate
            students.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "100% online course access",
              "Easy-to-follow course materials",
              "Flexible self-paced learning",
              "Designed for future California real estate agents",
              "Student-friendly lessons and review support",
            ].map((item) => (
              <div key={item} className="bg-white/10 rounded-2xl p-4">
                ✔ {item}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-5xl font-black text-[#d4a63d]">
              $119
            </span>

            <button className="bg-[#d4a63d] text-black px-8 py-4 rounded-2xl font-black">
              Enroll Now
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
          alt="Real Estate Practice"
          className="rounded-3xl shadow-2xl w-full h-[430px] object-cover"
        />
      </section>
    </main>
  );
}