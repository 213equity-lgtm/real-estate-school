"use client";

import Image from "next/image";

const courses = [
  {
    title: "California Real Estate Principles",
    price: "$99",
    image: "/classroom.jpg",
    description:
      "DRE-approved course covering the fundamentals of California real estate.",
  },
  {
    title: "California Real Estate Practice",
    price: "$119",
    image: "/classroom.jpg",
    description:
      "Learn contracts, disclosures, negotiations, and real-world applications.",
  },
  {
    title: "Exam Preparation Package",
    price: "$149",
    image: "/classroom.jpg",
    description:
      "Practice exams, review videos, and study materials to help you pass.",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#041326] text-white">
      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#061b34]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Equity <span className="text-[#d4a63d]">Realty</span>
          </h1>

          <a
  href="/"
  className="text-sm hover:text-[#d4a63d] transition"
>
  Back home
</a>

<a
  href="/"
  className="text-sm hover:text-[#d4a63d] transition"
>
  Back Home
</a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-5xl font-black mb-6">
          Real Estate Courses
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          California DRE-approved online real estate courses designed
          for future agents and brokers.
        </p>
      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <div className="relative h-64">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                {course.title}
              </h3>

              <p className="text-white/70 mb-5">
                {course.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#d4a63d]">
                  {course.price}
                </span>

                <button className="bg-[#d4a63d] text-black px-5 py-3 rounded-xl font-bold hover:scale-105 transition">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}