"use client";

const courses = [
  {
    title: "Pre-License Courses",
    description:
      "Start your real estate career with online pre-license education.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    icon: "📚",
  },
  {
    title: "Exam Preparation",
    description:
      "Practice, review, and prepare for the real estate exam.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    icon: "🎓",
  },
  {
    title: "Post-License Training",
    description:
      "Advance your skills after becoming licensed.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    icon: "🏢",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <p className="text-[#d99400] font-bold uppercase tracking-[3px] mb-4">
              Online Real Estate Courses
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold text-[#061b38] leading-tight">
              Choose Your Path to{" "}
              <span className="text-[#d99400]">Success</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500"
              >
                
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061b38]/60 to-transparent"></div>
                </div>

                
                <div className="relative px-8 pb-10 pt-14">
                  
                  <div className="absolute -top-10 left-8 w-20 h-20 bg-[#f5b52e] rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                    {course.icon}
                  </div>

                  <h2 className="text-3xl font-extrabold text-[#061b38] mb-5">
                    {course.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {course.description}
                  </p>

                  <button className="text-[#004b8d] font-bold text-lg hover:text-[#d99400] transition flex items-center gap-2">
                    Explore Courses →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}