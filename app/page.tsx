export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#041326] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-6">
          Equity <span className="text-[#d4a63d]">Realty</span>
        </h1>

        <p className="text-white/70 text-xl mb-10">
          Online Real Estate School
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/courses"
            className="bg-[#d4a63d] text-black px-6 py-4 rounded-xl font-bold"
          >
            View Courses
          </a>

          <a
            href="/contact"
            className="border border-white/20 px-6 py-4 rounded-xl"
          >
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}