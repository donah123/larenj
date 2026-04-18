import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative h-[921px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <img alt="Architectural detail" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM8ZVY9Lttw_PLAtCsC1YJf9rP0UNG5qXdMzIZP4mP-0xzcqpJN_OYE3yDwpi3fBJcwO66ZhG8CJj8phCrLTcEPHDTo0CNZIuri5nExZ23wYb3bNR3zup1iIam8S4it5k46w5s1_HckRQ1ms7SCd_FCnPO-JpcQnLWnW1EzMM2QQwzetnONSbUXIZDQWC3v9OR_Gi67ysyiVgppUZ43kVfGZqG33eMg3ChyICKcmZAs68jndU95uwr3H90iRmVPby7z8WysL4L8Q" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full">
            <div className="max-w-4xl">
              <span className="text-primary tracking-[0.3em] uppercase text-sm mb-6 block font-semibold">Established 1994</span>
              <h1 className="font-headline text-4xl md:text-7xl lg:text-9xl text-on-surface leading-[0.9] tracking-tighter mb-8">
                Our Heritage: Architects of <span className="italic text-primary">Global</span> Opportunity
              </h1>
              <div className="h-px w-32 bg-primary mb-8"></div>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
                Larenj International Consulting defines the intersection of traditional prestige and futuristic global mobility. We do not just consult; we curate your legacy across borders.
              </p>
            </div>
          </div>
        </section>

        {/* History/Mission Section */}
        <section className="py-32 bg-surface-container-low overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-lg">
                <img alt="Luxury consulting environment" className="w-full h-full object-cover grayscale brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSh0bgzi4NY1HnON1A3i1Ev_jeDUoXGR_-vJPAtDR-y3cWkZEUexksByPtWhRlm1Ybcs0YgfFBCGbJaiXK2UfwNVBfJsrLWcc9m3z0BBR6KmKGJqfg16DIx7wsas3bcchfc72_cSwjzGLgU4YrzLgbw8NBT5C9dxZi1kK33sbbATK-fuWHuQNJekvViv8Ml-DCrszRm7vEMisv_itMEVSNo2H7oM8a0_asCCVifO88vAOkfjPVY_i7Rz-lPGkVWp5Mw7V0DOj2tg" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-12 hidden lg:block">
                <span className="font-headline text-on-primary text-6xl font-bold">30</span>
                <p className="text-on-primary font-bold tracking-widest uppercase text-xs mt-2">Years of Legacy</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-headline text-5xl text-on-surface mb-12">Commitment to <span className="italic">Excellence</span></h2>
              <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Founded in 1994, Larenj International emerged from a singular vision: to bridge the gap between institutional authority and individual ambition. For three decades, we have served as the silent architects behind some of the world's most significant international transitions.
                </p>
                <p>
                  Our mission is rooted in the "Sovereign Archive"—a philosophy that views every client's case not as a transaction, but as a historical record to be meticulously preserved and expanded. We provide the structural integrity required for complex global maneuvers.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="border-l border-outline-variant/30 pl-6">
                    <span className="block text-primary font-headline text-2xl mb-2 italic">Integrity</span>
                    <p className="text-sm">Upholding the highest standards of international law and ethical governance.</p>
                  </div>
                  <div className="border-l border-outline-variant/30 pl-6">
                    <span className="block text-primary font-headline text-2xl mb-2 italic">Precision</span>
                    <p className="text-sm">Meticulous attention to the nuances of multi-jurisdictional compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <h2 className="font-headline text-5xl text-on-surface mb-4">A Presence Without <span className="italic">Borders</span></h2>
                <p className="text-on-surface-variant max-w-md">Our intelligence network spans the globe, ensuring localized expertise in every major financial and legal hub.</p>
              </div>
              <div className="flex gap-16">
                <div className="text-center">
                  <span className="block font-headline text-6xl text-primary font-bold">45+</span>
                  <span className="uppercase tracking-widest text-xs font-semibold">Jurisdictions</span>
                </div>
                <div className="text-center">
                  <span className="block font-headline text-6xl text-primary font-bold">12k+</span>
                  <span className="uppercase tracking-widest text-xs font-semibold">Successful Cases</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-surface-container-high h-[600px]">
              <div className="absolute inset-0 opacity-40">
                <img className="w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLHURPW4hQM6zP25EwJ92eAwjmscc4xyg9bVJbMXXCzWxSflHgvfMPoYElsixI8pBBpRr7lV2pzVmjUahJcd3got48_N4GX2FMTaiefOgZtdQjOJnXHxevwb1rhLBPxAJZeLKtY6aoPAp8dDijg4Qza5eg5mIGZG7HrPLrDgTioJlEZRl2_qIGXrQiZMURJ324I3R7mMK_sT7XVTluNHL6dklbC5nmzI_k3a7oa5QNsK7oYkwVP6bMg_D1U0GZX5ETGYngk6N22A" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="p-8 bg-surface/90 backdrop-blur-md border border-outline-variant/20 max-w-sm pointer-events-auto">
                  <span className="material-symbols-outlined text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>public</span>
                  <h4 className="font-headline text-xl mb-2">Institutional Network</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Our connectivity allows for seamless navigation through London, Dubai, Singapore, and beyond, providing our clients with a sovereign advantage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="text-center mb-24">
              <h2 className="font-headline text-5xl text-on-surface mb-4">The <span className="italic">Architects</span> of Strategy</h2>
              <p className="text-on-surface-variant tracking-widest uppercase text-sm">Guided by decades of unparalleled expertise</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Leader 1 */}
              <div className="group bg-surface-container-high p-8 hover:bg-surface-bright transition-all duration-500">
                <div className="aspect-[3/4] mb-8 overflow-hidden">
                  <img alt="Marcus Sterling" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3IAg9UYMgqqgcUAbilAY8fOtstlL9EoFTbktBasJ549LrlCit09afQkRLCAGN2bkULMDw_j0HGQFLGMae1NlVsriFsHwzincCeusmxmYGDoXFsSH93Ri3GpoXgU9sIesFIvn5JISDbk4eaygyg3vzEEx8eTWy7shvsAjx4tXDk3SP4JdFhnaqq73o-TbzFLN382oNeuY64Rbq28mTu-G6hHUDdVGop-2MNPeJY4qBYNqNgond0vux02ciD9uZFyJqb_S_zXgvzw" />
                </div>
                <h3 className="font-headline text-2xl mb-1">Marcus Sterling</h3>
                <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Managing Director</p>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  A former advisor to sovereign wealth funds, Marcus oversees the strategic direction of Larenj International.
                </p>
              </div>
              {/* Leader 2 */}
              <div className="group bg-surface-container-high p-8 hover:bg-surface-bright transition-all duration-500 mt-0 md:mt-12">
                <div className="aspect-[3/4] mb-8 overflow-hidden">
                  <img alt="Elena Voshkod" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" />
                </div>
                <h3 className="font-headline text-2xl mb-1">Elena Voshkod</h3>
                <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">VP Talent Acquisition</p>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Elena directs our global network of experts, ensuring every jurisdiction is manned by the world's sharpest legal minds.
                </p>
              </div>
              {/* Leader 3 */}
              <div className="group bg-surface-container-high p-8 hover:bg-surface-bright transition-all duration-500 mt-0 md:mt-24">
                <div className="aspect-[3/4] mb-8 overflow-hidden">
                  <img alt="David Chen" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHaC5tV5x-InZhY99-eXxy16ccfkK1xUygqgQR8zEyt3kQfZ86jbgaj0WRatBAjSjXlF0kqF_JPO69VBKKqRpgS9KgstO-XD_raBnRydCMTpDmR9jN1O-gNHdYBLusLkwStX0UADURZgZVZ9NH-9trm-j1ws104-G3aPHmuOS4E0gegWW4bqKpfaRQMGwmhHF1sDCT0A9GJ5ioOuKCuBGI7kAGAKyVjhC7hStANaAqZT673lQZnQUK2R7L5JmkUCKz5EAaNR0piw" />
                </div>
                <h3 className="font-headline text-2xl mb-1">David Chen</h3>
                <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Head of Strategic Partnerships</p>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  David manages institutional alliances across four continents, fostering the ecosystems that empower our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-surface text-center px-8 border-y border-outline-variant/10">
          <h2 className="font-headline text-4xl text-on-surface mb-8">Begin Your Sovereign Journey</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-md hover:scale-105 transition-transform active:scale-95">Consult an Expert</button>
            <button className="px-10 py-4 border border-primary/30 text-primary font-bold rounded-md hover:bg-primary/5 transition-colors active:scale-95">Request Inquiry Portfolio</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}