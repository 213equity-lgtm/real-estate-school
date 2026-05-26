const courses = [
  {
    title: "Pre-License Courses",
    description: "Start your real estate career with online pre-license education.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    icon: "📖",
  },
  {
    title: "Exam Preparation",
    description: "Practice, review, and prepare for the real estate exam.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    icon: "🎓",
  },
  {
    title: "Post-License Training",
    description: "Advance your skills after becoming licensed.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    icon: "🏢",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#d99400] font-bold uppercase tracking-wide">
            Online Real Estate Courses
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-[#061b38] mt-4">
            Choose Your Path to{" "}
            <span className="text-[#d99400]">Success</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-3 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#061b38]/35"></div>
              </div>

              <div className="relative p-8 pt-14">
                <div className="absolute -top-10 left-8 w-20 h-20 bg-[#f5b52e] rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                  {course.icon}
                </div>

                <h3 className="text-3xl font-extrabold text-[#061b38] mb-5">
                  {course.title}
                </h3>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {course.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#004b8d] font-extrabold text-lg hover:text-[#d99400] transition"
                >
                  Explore Courses <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}