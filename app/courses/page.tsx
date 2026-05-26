export default function CoursesPage() {
  const courses = [
    {
      title: "California Real Estate Principles",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      description:
        "Learn the fundamentals of California real estate and licensing requirements.",
    },
    {
      title: "California Real Estate Practice",
      price: "$119",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      description:
        "Master contracts, negotiations, disclosures, and client representation.",
    },
    {
      title: "Exam Preparation Package",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
      description:
        "Practice exams, review videos, and study materials to help you pass.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#041326] text-white">
      <header className="border-b border-white/10 bg-[#061b34]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Equity <span className="text-[#d4a63d]">Realty</span>
          </h1>

          <a
            href="/"
            className="text-sm hover:text-[#d4a63d] transition"
          >
            ← Back Home
          </a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black mb-4">
          Real Estate Courses
        </h2>

        <p className="text-white/70 mb-14 text-lg">
          DRE-approved online courses for California real estate students.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {course.title}
                </h3>

                <p className="text-[#d4a63d] text-xl font-bold mb-4">
                  {course.price}
                </p>

                <p className="text-white/70 mb-6">
                  {course.description}
                </p>

                <button className="bg-[#d4a63d] text-black px-5 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}