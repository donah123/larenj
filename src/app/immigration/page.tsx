import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ImmigrationPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      {/* Hero Section */}
      <section className="px-4 md:px-12 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
        <div className="lg:col-span-7">
          <h4 className="text-primary font-label uppercase tracking-[0.3em] mb-6 text-sm font-semibold">
            The Sovereign Archive
          </h4>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-tight tracking-tight mb-8">
            Your Global Legacy, <br />
            <span className="italic text-primary-container">Architected.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl mb-12">
            Expertly navigating the complexities of Canadian settlement. We don't just process applications; we curate your transition into a new chapter of global citizenship.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="gold-gradient text-on-primary px-8 py-4 rounded-md font-bold tracking-wide">
              Begin Your Journey
            </button>
            <button className="border border-outline/20 px-8 py-4 rounded-md font-bold hover:bg-surface-container-high transition-colors">
              Our Approach
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
            <img
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=750&fit=crop&crop=center"
              alt="Modern minimalist architectural view"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </section>

      {/* Settlement Architecture Bento Grid */}
      <section className="bg-surface-container-low py-32 mt-20">
        <div className="px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-on-surface">Settlement Architecture</h2>
              <p className="text-on-surface-variant text-lg">
                Comprehensive integration services designed for the discerning global professional. From initial preparation to full citizenship.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">west</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">east</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Pre-arrival */}
            <div className="md:col-span-8 bg-surface-container-high p-12 rounded-xl group hover:bg-surface-container-highest transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center"
                  alt="Business district aerial view"
                />
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
                  flight_takeoff
                </span>
                <h3 className="text-3xl font-bold mb-4 text-on-surface">Pre-Arrival Strategy</h3>
                <p className="text-on-surface-variant mb-8 max-w-md">
                  Laying the foundation before you touch down. We provide cultural orientation, financial planning, and professional mapping to ensure zero friction upon arrival.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Life in Canada Orientation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Executive Employment Sourcing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Real Estate &amp; Luxury Housing Prep
                  </li>
                </ul>
                <a className="inline-flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform" href="#">
                  Explore Pre-Arrival <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Permanent Residency */}
            <div className="md:col-span-4 bg-surface-container-high p-12 rounded-xl border border-outline/5">
              <span className="material-symbols-outlined text-primary text-4xl mb-8">domain</span>
              <h3 className="text-3xl font-bold mb-4 text-on-surface">Permanent Residency</h3>
              <p className="text-on-surface-variant mb-8">
                Securing your status in the sovereign archive. Expert navigation through Express Entry and Provincial Nominee Programs.
              </p>
              <button className="w-full py-4 rounded border border-primary/30 text-primary font-bold hover:bg-primary/5 transition-colors">
                Eligibility Assessment
              </button>
            </div>

            {/* Scholars & Professionals */}
            <div className="md:col-span-4 bg-surface-container-high p-12 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-8">school</span>
              <h3 className="text-2xl font-bold mb-4 text-on-surface">Scholars &amp; Professionals</h3>
              <p className="text-on-surface-variant mb-4">
                Academic placement and elite work permit facilitation for those driving global innovation.
              </p>
            </div>

            {/* Linguistic Mastery */}
            <div className="md:col-span-8 bg-surface-container-high p-12 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-8">translate</span>
                <h3 className="text-3xl font-bold mb-4 text-on-surface">Linguistic Mastery</h3>
                <p className="text-on-surface-variant">
                  Command the language of your new home. Bespoke language training focused on professional integration and high-level negotiation.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold italic">
                    L
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Bespoke Training</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">Enrolling Now</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span>PROFICIENCY</span>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Connectivity / Map Section */}
      <section className="py-32 px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-surface-container-low rounded-full relative overflow-hidden border border-outline/10">
              <img
                className="w-full h-full object-cover opacity-60"
                src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=600&fit=crop&crop=center"
                alt="Global connectivity visualization"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <div className="text-5xl font-serif text-primary mb-2">140+</div>
                <div className="text-xs uppercase tracking-[0.4em] font-bold">Nations Served</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-bold mb-8 leading-tight text-on-surface">
              A Borderless <br />Philosophy.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Our network spans across continents, ensuring that your transition to Canada is supported by local expertise in your home region. We bridge the gap between where you are and where you are meant to be.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-primary-container/20 rounded flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-on-surface">Global Connectivity</h4>
                  <p className="text-on-surface-variant">
                    Real-time coordination with Canadian immigration authorities and international logistical partners.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-primary-container/20 rounded flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-on-surface">Regulatory Authority</h4>
                  <p className="text-on-surface-variant">
                    Fully licensed IRCC consultants providing authoritative legal guidance and settlement support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-12 py-32">
        <div className="max-w-7xl mx-auto bg-surface-container rounded-3xl p-16 md:p-24 text-center relative overflow-hidden border border-outline/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight text-on-surface">
            Ready to Archive Your New Beginning?
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
            Join the ranks of global leaders who have trusted Larenj International for their Canadian integration.
          </p>
          <button className="gold-gradient text-on-primary px-12 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            Schedule Private Consultation
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}