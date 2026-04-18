import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden hero-section">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent z-10"></div>
            <img className="w-full h-full object-cover opacity-30 hero-bg" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center" alt="Modern corporate skyscrapers" />
          </div>
          <div className="container mx-auto px-12 relative z-20">
            <div className="max-w-4xl">
              <span className="text-primary font-label uppercase tracking-[0.3em] text-sm mb-6 block hero-fade">Established Global Authority</span>
              <h1 className="text-7xl md:text-8xl font-headline font-bold text-on-background leading-[1.1] tracking-tight mb-8 hero-fade hero-fade-delay">
                The Architect of <br/><span className="italic text-primary">Sovereign Futures</span>
              </h1>
              <p className="text-xl text-on-surface-variant font-body max-w-2xl leading-relaxed mb-12 hero-fade hero-fade-delay-2">
                Navigating the complexities of global citizenship, executive mobility, and strategic enterprise consulting with unparalleled discretion and institutional precision.
              </p>
              <div className="flex gap-6 hero-fade hero-fade-delay-3">
                <Link href="/contact" className="bg-gradient-to-r from-primary to-primary-container px-10 py-4 rounded-md text-on-primary font-bold tracking-wider text-lg shadow-xl transition-transform duration-500 hover:-translate-y-1">
                  Request Consultation
                </Link>
                <button className="border border-outline-variant/30 px-10 py-4 rounded-md text-on-background font-bold tracking-wider text-lg hover:bg-surface-container-high transition-colors duration-300">
                  Our Methodology
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {/* Pillar 1: Consulting */}
              <div className="group bg-surface p-12 min-h-[500px] flex flex-col justify-between transition-all duration-500 hover:bg-surface-container-high border-r border-outline-variant/10">
                <div>
                  <span className="material-symbols-outlined text-primary text-5xl mb-8" style={{fontVariationSettings: "'FILL' 1"}}>account_balance</span>
                  <h3 className="text-3xl font-headline font-bold mb-6 group-hover:text-primary transition-colors">Larenj Consulting</h3>
                  <p className="text-on-surface-variant leading-relaxed">Strategic advisory for multinational corporations entering high-growth markets. We provide the institutional bridge between local insight and global ambition.</p>
                </div>
                <a className="flex items-center gap-4 text-primary font-bold tracking-widest text-xs uppercase mt-8 group-hover:gap-6 transition-all" href="/consulting">
                  Explore Strategy <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              {/* Pillar 2: Immigration */}
              <div className="group bg-surface p-12 min-h-[500px] flex flex-col justify-between transition-all duration-500 hover:bg-surface-container-high border-r border-outline-variant/10">
                <div>
                  <span className="material-symbols-outlined text-primary text-5xl mb-8" style={{fontVariationSettings: "'FILL' 1"}}>public</span>
                  <h3 className="text-3xl font-headline font-bold mb-6 group-hover:text-primary transition-colors">Larenj Immigration</h3>
                  <p className="text-on-surface-variant leading-relaxed">Curated residency and citizenship-by-investment solutions. We secure your family's legacy through world-class legal frameworks and diplomatic precision.</p>
                </div>
                <a className="flex items-center gap-4 text-primary font-bold tracking-widest text-xs uppercase mt-8 group-hover:gap-6 transition-all" href="#">
                  Residency Pathways <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              {/* Pillar 3: Employment */}
              <div className="group bg-surface p-12 min-h-[500px] flex flex-col justify-between transition-all duration-500 hover:bg-surface-container-high">
                <div>
                  <span className="material-symbols-outlined text-primary text-5xl mb-8" style={{fontVariationSettings: "'FILL' 1"}}>badge</span>
                  <h3 className="text-3xl font-headline font-bold mb-6 group-hover:text-primary transition-colors">Larenj Employment</h3>
                  <p className="text-on-surface-variant leading-relaxed">Facilitating the global movement of top-tier executive talent. Specialized workforce solutions for industries demanding the highest caliber of professional expertise.</p>
                </div>
                <a className="flex items-center gap-4 text-primary font-bold tracking-widest text-xs uppercase mt-8 group-hover:gap-6 transition-all" href="#">
                  Talent Mobility <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-32 relative overflow-hidden bg-surface">
          <div className="container mx-auto px-12">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] bg-surface-container-high relative z-10 overflow-hidden rounded-sm">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcMEeZ9EC6Xsl1W0Zrj3nCAnJk0xSGnAuzijxxP7pm4y4R8w0SifmU2EyNq9AYfimFRNeize_V3DqM626k8_SBiooG3wugyIosoh_5LJN40ApyKQz0u6oW7lP5hjEOyRxQBKkbFpYO325gSMyhbAQN_VNN1WdsmWVYEP5I2NwcJxI3N9d9jROZJjKrRvXUcw_vdX1zcrGyjn3ZA02L2fyE9Svu5meNaAAehWa_NHPhfsytKZQ-SJyMP639PeyIjRAl5KxHLttIAw" alt="Portrait of a confident senior executive in a dark tailored suit" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-full h-full border border-primary/20 -z-0"></div>
                <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 hidden lg:block">
                  <span className="text-[12rem] font-headline font-bold text-surface-container-high opacity-40 select-none">1992</span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-primary font-label uppercase tracking-[0.3em] text-sm mb-6 block">Our Heritage</span>
                <h2 className="text-5xl font-headline font-bold text-on-background mb-8">Architects of Opportunity Across Six Continents</h2>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                  <p>For over three decades, Larenj International has stood as the quiet force behind the global expansion of Fortune 500 enterprises and the sovereign mobility of high-net-worth individuals.</p>
                  <p>Our approach transcends standard consulting. We treat every client engagement as a sovereign archive—a dedicated repository of expertise, legal mastery, and strategic foresight tailored to the specific geopolitical landscape of their ambition.</p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/15 pt-12">
                  <div>
                    <div className="text-4xl font-headline font-bold text-primary mb-2">45+</div>
                    <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Global Jurisdictions</div>
                  </div>
                  <div>
                    <div className="text-4xl font-headline font-bold text-primary mb-2">12k+</div>
                    <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Successful Cases</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 bg-surface-container-low">
          <div className="container mx-auto px-12">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-headline font-bold text-on-background mb-4">The Sovereign Standard</h2>
              <p className="text-on-surface-variant font-body max-w-2xl mx-auto">Why the world's most discerning institutions trust Larenj International with their most critical global maneuvers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
              <div className="md:col-span-8 bg-surface-container-high p-12 rounded-sm relative overflow-hidden flex flex-col justify-end group">
                <img className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbRY6qPjpFZMNTokeuDPfnkDM5ES8g0vqbX60e0VaNrciJZ052umVdqsUtL0s08_sDpT_BH6kh9PwPWqwtVDQ6BcEIKhIzBBaaoqMiJWfJnsfzxsvHLEvs7UxBhyd8o5GrdcCEE50X6gpgWVnzLgcOVwHVUmQKQbjOzJmzeM8ReCsQ-VSzWVBPQqxlPiAY4BdEOcidglzbOE-f7CtSlu1TkGcWfLX1-cNXsGbgI6My0kW8wM_HtUYpStHULvjYW0z2j9LXN4EYZg" alt="Close up of high-end textured paper being embossed with a gold seal" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-headline font-bold text-primary mb-4">Diplomatic Precision</h3>
                  <p className="text-lg text-on-surface max-w-xl">Our legal team comprises former diplomats and leading international lawyers who understand the unspoken nuances of global policy.</p>
                </div>
              </div>
              <div className="md:col-span-4 bg-surface p-12 rounded-sm border border-outline-variant/10 flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-6">lock</span>
                <h3 className="text-2xl font-headline font-bold mb-4">Absolute Discretion</h3>
                <p className="text-on-surface-variant">Confidentiality is not a policy; it is our foundation. We employ bank-grade security protocols for all client data archives.</p>
              </div>
              <div className="md:col-span-4 bg-surface-container p-12 rounded-sm flex flex-col justify-center border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-5xl mb-6">hub</span>
                <h3 className="text-2xl font-headline font-bold mb-4">Unified Ecosystem</h3>
                <p className="text-on-surface-variant">Consulting, Immigration, and Employment are not siloed; they work in concert to provide a 360-degree global mobility strategy.</p>
              </div>
              <div className="md:col-span-8 bg-surface-container p-12 rounded-sm relative overflow-hidden flex flex-col justify-center group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-headline font-bold text-on-background mb-4">Institutional Resilience</h3>
                  <p className="text-lg text-on-surface-variant max-w-2xl">We don't just solve today's challenges; we build the frameworks that ensure your global presence is resilient against future geopolitical shifts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-12">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-primary font-label uppercase tracking-[0.3em] text-sm mb-4 block">The Sovereign Archive</span>
                <h2 className="text-5xl font-headline font-bold">Latest Insights</h2>
              </div>
              <a className="text-on-surface font-bold tracking-widest text-sm border-b border-primary pb-1 hover:text-primary transition-colors" href="#">VIEW FULL ARCHIVE</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <article className="group">
                <div className="aspect-video bg-surface-container-high mb-8 overflow-hidden rounded-sm">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Overhead shot of a premium dark wood desk with a fountain pen, leather notebook, and a pair of reading glasses" />
                </div>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-primary-container mb-3 block">Global Policy</span>
                <h4 className="text-2xl font-headline font-bold text-on-background group-hover:text-primary transition-colors leading-tight mb-4">Navigating the 2024 EU Residency Amendments</h4>
                <p className="text-on-surface-variant line-clamp-3">A deep dive into how the latest policy shifts in the Schengen zone impact high-net-worth residency applications...</p>
              </article>
              <article className="group">
                <div className="aspect-video bg-surface-container-high mb-8 overflow-hidden rounded-sm">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Two executives shaking hands in a high-rise office with large glass windows overlooking a modern city skyline" />
                </div>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-primary-container mb-3 block">Strategic Enterprise</span>
                <h4 className="text-2xl font-headline font-bold text-on-background group-hover:text-primary transition-colors leading-tight mb-4">Corporate Inversion in the Middle Eastern Markets</h4>
                <p className="text-on-surface-variant line-clamp-3">Analyzing the tax benefits and operational logistics of relocating corporate headquarters to the UAE and Qatar...</p>
              </article>
              <article className="group">
                <div className="aspect-video bg-surface-container-high mb-8 overflow-hidden rounded-sm">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1200&q=80" alt="A legal gavel resting on a stack of aged leather-bound books in a dim, prestigious law office" />
                </div>
                <span className="text-xs font-label uppercase tracking-[0.2em] text-primary-container mb-3 block">Talent Mobility</span>
                <h4 className="text-2xl font-headline font-bold text-on-background group-hover:text-primary transition-colors leading-tight mb-4">The Future of Executive Work Visas in the Tech Era</h4>
                <p className="text-on-surface-variant line-clamp-3">How specialized knowledge visas are evolving to meet the demands of AI-driven global enterprise sectors...</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-surface-container-low border-y border-outline-variant/10">
          <div className="container mx-auto px-12 text-center">
            <h2 className="text-6xl font-headline font-bold mb-12 italic">Begin Your Sovereign Journey</h2>
            <button className="bg-gradient-to-r from-primary to-primary-container px-16 py-6 rounded-md text-on-primary font-bold tracking-[0.2em] text-xl uppercase shadow-2xl hover:scale-105 transition-transform">
              Inquire Privately
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
