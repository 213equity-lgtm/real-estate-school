export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#061b34] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black mb-6">Contact Equity Realty</h1>

        <p className="text-white/70 text-lg mb-10">
          Questions? Contact our friendly staff for more information about the
          online real estate school.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-black mb-4">Call Us</h2>
            <p className="text-3xl font-black text-[#d4a63d]">
              (213) 462-1983
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-black mb-4">Email Us</h2>
            <p className="text-xl text-[#d4a63d]">213equity@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}