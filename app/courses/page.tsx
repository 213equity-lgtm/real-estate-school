export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#061b34] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black mb-6">Real Estate Courses</h1>

        <p className="text-white/70 text-lg mb-10">
          Choose the course package that fits your real estate career goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {["Real Estate Principles", "Real Estate Practice", "Real Estate Finance"].map(
            (course) => (
              <div key={course} className="bg-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-black mb-4">{course}</h2>
                <p className="text-white/70 mb-6">
                  Online course materials designed for future California real estate agents.
                </p>
                <button className="bg-[#d4a63d] text-[#061b34] px-6 py-3 rounded-xl font-black">
                  Enroll Now
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}