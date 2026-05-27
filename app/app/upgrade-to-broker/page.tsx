export default function UpgradeToBrokerPage() {
  return (
    <main className="min-h-screen bg-white text-[#061b34]">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-black">
            Equity <span className="text-[#d4a63d]">Realty</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-bold">
            <a href="/">HOME</a>
            <a href="/courses">VIEW PACKAGES</a>
            <a href="/upgrade-to-broker">UPGRADE TO BROKER</a>
            <a href="/contact">CONTACT</a>
            <a href="tel:2134621983">(213) 462-1983</a>
          </nav>
        </div>
      </header>

      <section className="bg-[#f4f4f4] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#25639a] mb-4">
              Real Estate Broker <br /> License
            </h2>

            <p className="font-bold text-sm mb-8">BECOME YOUR OWN BOSS</p>

            <div className="w-48 h-3 bg-[#d4a63d] rounded-full mx-auto" />
          </div>

          <div className="border-4 border-dotted border-[#d4a63d] rounded-xl p-6 bg-white">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop"
              alt="Broker License"
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Have you been an active real estate agent for two years?
          </h2>

          <p className="text-sm">
            If so, you are eligible to upgrade to a California real estate broker license.
          </p>

          <div className="w-48 h-3 bg-[#d4a63d] rounded-full mx-auto mt-8" />
        </div>

        <div className="text-sm leading-relaxed space-y-5 mb-14">
          <p>
            All Broker courses are California Department of Real Estate (DRE) Approved.
          </p>

          <p>
            You may also qualify with two years full-time experience, in any of the following areas:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>
              As an escrow or title officer or as a loan officer in a capacity directly related
              to the financing or conveying of real property.
            </li>
            <li>
              As a subdivider, contractor, or speculative builder, during which time the applicant
              performed comprehensive duties relating to the purchase, finance, development, and
              sale or lease of real property.
            </li>
            <li>
              As a real property appraiser.
            </li>
          </ul>

          <p>
            These are the general types of equivalent experience which can be used to qualify for
            the broker examination. Other types of real estate-related experience will be considered,
            provided that it satisfies the intent of the law.
          </p>

          <p className="font-bold">
            Determine the appropriate set of California Department of Real Estate (DRE) approved
            online real estate broker courses and choose the button below that best describes you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-[#d4a63d] rounded-lg p-8">
            <div className="text-center mb-8">
              <button className="bg-[#d4a63d] px-8 py-3 rounded-lg font-black">
                I Am Currently An Agent
              </button>
            </div>

            <h3 className="font-black mb-4">
              Real Estate Agents With Two Years Licensed Sales Experience Can Take Their Career To The Next Level!
            </h3>

            <p className="text-sm leading-relaxed">
              If you have been licensed and actively selling real estate for two years,
              you qualify to take the California real estate brokers license exam.
              Along with your completed coursework, you’ll need to document that you
              have been a licensed real estate salesperson on a full-time basis.
            </p>
          </div>

          <div className="border-2 border-[#d4a63d] rounded-lg p-8">
            <div className="text-center mb-8">
              <button className="bg-[#d4a63d] px-8 py-3 rounded-lg font-black">
                I Am NOT An Agent
              </button>
            </div>

            <h3 className="font-black mb-4">
              If you do NOT yet have a Real Estate License or do NOT have the appropriate experience — No Worries!
            </h3>

            <p className="text-sm leading-relaxed">
              Click the link above to begin your new career as a real estate salesperson.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}