import Link from 'next/link';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <main className="bg-surface-container-lowest text-on-surface">

        {/* Hero Section */}
        <section className="relative h-[716px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern glass skyscrapers"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByfZEmy5i0nJGeh-lz6be_jEMwtMteuCYO5NtmoMqf4OvIsGF1J8gpcrRGTuTC0YupXUsVWgsWAPUkeiNzpPQl6HTlHaLa0QmEBbptQwHZjE9kmz9cMD5P90xlsF7iTr4WYUQj8nmJ0ItzkM-gL4lwoyLEWLE63xKUbOKZgO28Hhj_lnkbXrG1QI_ccXaQh5bE973z_xEHuue20BBrwaEs_OO9-_l0cdHnGEewlWK4R4tcCNvSVCLp9UppitZ-0o9i7MujlVy4qQ"
              className="w-full h-full object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
            <span className="text-primary tracking-[0.3em] font-semibold text-sm mb-4 block uppercase">
              Established Prestige
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface mb-6 leading-tight">
              About Larenj
            </h1>
            <p className="max-w-2xl text-xl text-on-surface-variant font-light leading-relaxed">
              A global leader in high-performance leadership and human capital development, dedicated to forging the next generation of transformational executives.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold text-primary">
                World-Class Transformational Leadership
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  Larenj International specializes in training the architects of tomorrow. Our approach focuses on world-class transformational leadership, designed to equip senior professionals with the psychological and strategic depth required in today&apos;s volatile markets.
                </p>
                <p>
                  From intensive Business Analysis (BA) frameworks to complex Project Management (PM) methodologies, our professional business training is curated for those who demand excellence in execution.
                </p>
                <div className="flex items-center gap-4 text-primary font-semibold py-4 border-y border-outline-variant/30">
                  <span className="material-symbols-outlined">public</span>
                  <span>Global Reach: Canada &bull; North America &bull; Africa &bull; Global Markets</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-2xl group-hover:bg-primary/20 transition duration-500" />
              <div className="relative bg-surface-container border border-outline-variant p-8 rounded-3xl overflow-hidden h-[500px]">
                <img
                  alt="Board room meeting with professionals"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQQGdjxCLknx_BQTwbeZ_jrnKwvFOkVB7vakHqajcEblkJGSk2RwAKtDcjInpoOp6PobZZffxO4v5Vro6nZwbSQtRrgwhVhXSGPHL5dAE5A-HLBc6x1ia7H1H97oUfVrGZV_F0cZaYu8PArW45q_57fuGy3RRxdHmdoGJd1NoMXWnDecvgM3E8zuPLSe2zeU15aBVE31w8cV22I0qzAm_2v_Sl19v0VTO-5OCLaxm-Yjmyg18ZeT4EDZRqvgAP2HRkR_iuJOop9g"
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Pillars */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
              <div className="bg-surface-container-lowest p-16 space-y-6">
                <span
                  className="material-symbols-outlined text-5xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                <h3 className="text-3xl font-headline font-bold">Company Mission</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg italic font-light">
                  &ldquo;To empower organizations through precision-based leadership training and human capital optimization, ensuring sustainable excellence in the global business ecosystem.&rdquo;
                </p>
              </div>
              <div className="bg-surface-container-lowest p-16 space-y-6">
                <span
                  className="material-symbols-outlined text-5xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  visibility
                </span>
                <h3 className="text-3xl font-headline font-bold">Company Vision</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg italic font-light">
                  &ldquo;To be the definitive standard of elite executive development, recognized globally for bridging the gap between potential and legacy through education.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Sector Impact */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-headline font-bold mb-6">Strategic Sector Impact</h2>
                <p className="text-on-surface-variant text-lg">
                  Our bespoke service offerings are engineered to solve high-stakes challenges across critical industries, delivering a relentless commitment to customer service and organizational health.
                </p>
              </div>
              <div className="text-primary font-bold text-6xl opacity-20 select-none">IMPACT</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'factory',
                  title: 'Manufacturing',
                  body: 'Optimizing supply chain leadership and operational efficiency through lean management and agile transformational practices.',
                },
                {
                  icon: 'payments',
                  title: 'Finance',
                  body: 'Navigating fiscal volatility with advanced decision-making frameworks and rigorous ethical leadership training.',
                },
                {
                  icon: 'support_agent',
                  title: 'Public Sector',
                  body: 'Enhancing public service delivery through human-centric design and scalable institutional management models.',
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="p-8 border border-outline-variant hover:bg-surface-variant transition-colors duration-300 rounded-3xl"
                >
                  <span className="material-symbols-outlined text-primary mb-4 block text-4xl">{icon}</span>
                  <h4 className="text-xl font-bold mb-3">{title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-headline font-bold mb-4 uppercase">Our Team</h2>
              <div className="h-1 w-24 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-8">
                <p className="text-2xl font-light text-on-surface leading-snug">
                  Larenj is powered by an elite cohort of senior-level management and finance professionals.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Our advisors bring decades of experience forged in the high-pressure environments of{' '}
                  <span className="text-primary font-semibold">Fortune 500 companies</span> across Europe, Canada, and the United States.
                </p>
                <div className="flex flex-wrap gap-8">
                  {[
                    { stat: '25+', label: 'Years Experience' },
                    { stat: '500', label: 'Enterprises' },
                    { stat: '3', label: 'Continents' },
                  ].map(({ stat, label }) => (
                    <div key={label} className="text-center">
                      <div className="text-4xl font-headline font-bold text-primary">{stat}</div>
                      <div className="text-xs tracking-widest text-on-surface-variant uppercase mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-surface-container relative overflow-hidden group rounded-3xl">
                  <img
                    alt="Executive Council"
                    src="img1.jpeg"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface-container-lowest to-transparent">
                    <div className="text-primary font-bold">Executive Council</div>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-surface-container relative overflow-hidden group translate-y-12 rounded-3xl">
                  <img
                    alt="Strategy Partners"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt0tAKMtZPp546gm_PAPKr1uycEiUR7xElMGmfonsc2cdendcANqFIUO9DnMMvpgKk2vJZn8po9YiRhdjHWDrDJjFloBx2avhKi8OcGB294IMoMD9tjVF6XiugWQ0PZ6aBDgTAp07Wm0BfpF3x43wknUj6rTa4627RlXS44vZHZ4Bcsv-8NJ6OwQrBRgHC2pICWrFUHYU-4Jn1cMF-Ra_iz2RDIrU0QB0-OCYrbDk5CcbOLCJv6o7De9Xev0I05-YnlLd80EdcBA"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface-container-lowest to-transparent">
                    <div className="text-primary font-bold">Strategy Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-surface-container-lowest border-t border-outline-variant/20 text-center px-8">
          <h2 className="font-headline text-4xl text-on-surface mb-8">Begin Your Sovereign Journey</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary-container text-on-primary-container font-bold rounded-full hover:brightness-110 transition-all uppercase tracking-widest text-sm"
            >
              Consult an Expert
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-primary/30 text-primary font-bold rounded-full hover:bg-primary/5 transition-colors uppercase tracking-widest text-sm"
            >
              Request Inquiry
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
