import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-12 py-32 bg-gradient-to-br from-surface to-surface-container-low">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-on-surface">
            Sovereign <span className="text-primary italic">Consulting</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Strategic counsel for institutional entities and high-net-worth individuals navigating global markets, regulatory landscapes, and sovereign opportunities.
          </p>
        </div>
      </section>

      {/* Primary Services */}
      <section className="px-12 py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl font-bold mb-8 text-on-surface">
              Core <span className="text-primary italic">Consulting</span> Services
            </h2>
            <p className="text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive advisory solutions designed for institutions and individuals seeking strategic advantage in the global arena.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sovereign Citizenship */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 bg-surface-container-high flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">flag</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Sovereign Citizenship</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Strategic guidance through citizenship-by-investment programs, residency pathways, and sovereign wealth optimization for global mobility and asset protection.
              </p>
            </div>

            {/* Global Investment */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 bg-surface-container-high flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Global Investment</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Cross-border investment structuring, tax optimization strategies, and portfolio diversification across multiple jurisdictions for institutional and private clients.
              </p>
            </div>

            {/* Regulatory Compliance */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 bg-surface-container-high flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Regulatory Compliance</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Comprehensive compliance advisory for international operations, including AML, KYC, and regulatory reporting across multiple sovereign jurisdictions.
              </p>
            </div>

            {/* Estate Planning */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 bg-surface-container-high flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Estate Planning</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Sophisticated wealth transfer strategies, trust structures, and succession planning for multi-generational wealth preservation and tax efficiency.
              </p>
            </div>

            {/* Corporate Structuring */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 bg-surface-container-high flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">business</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Corporate Structuring</h3>
              <p className="text-on-surface-variant leading-relaxed">
                International business entity formation, holding company structures, and corporate governance advisory for global operations and tax optimization.
              </p>
            </div>

            {/* Risk Management */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 hover:border-primary/20 transition-colors">
              <div className="w-16 h-16 bg-surface-container-high flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">security</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Risk Management</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Comprehensive risk assessment and mitigation strategies for geopolitical, financial, and operational exposures in international business environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Services & Crafts */}
      <section className="px-12 py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline text-5xl font-bold mb-12 text-on-surface">
                Institutional Support &amp; <span className="text-primary italic">Artistry</span>
              </h2>

              {/* Accounting Card */}
              <div className="mb-12 flex gap-8 items-start">
                <div className="w-16 h-16 shrink-0 bg-surface-container-high flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">receipt_long</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-on-surface">Accounting &amp; Tax Filing</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Cross-border financial compliance and meticulous fiscal optimization for international entities and high-net-worth individuals.
                  </p>
                </div>
              </div>

              {/* Accessories Card */}
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 shrink-0 bg-surface-container-high flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-on-surface">Making Accessories</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    A specialized artisan division focused on bespoke corporate gifts and symbolic professional regalia that define brand identity.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Accounting"
                className="rounded-lg h-80 w-full object-cover shadow-xl"
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=320&fit=crop&crop=center"
              />
              <img
                alt="Craftsmanship"
                className="rounded-lg h-80 w-full object-cover shadow-xl mt-12"
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=320&fit=crop&crop=center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-low rounded-2xl p-16 text-center border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[120px] rounded-full"></div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 relative z-10 text-on-surface">
              Inaugurate Your Global Mandate
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Consult with our partners to tailor a service suite that aligns with your institutional objectives and sovereign requirements.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
              <Link href="/contact" className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold px-10 py-4 rounded-md hover:scale-105 transition-transform text-center">
                Request Consultation
              </Link>
              <button className="border border-outline/20 text-on-surface font-bold px-10 py-4 rounded-md hover:bg-surface-bright transition-colors">
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}