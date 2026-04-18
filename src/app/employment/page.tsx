import Footer from '@/components/Footer';

export default function EmploymentPage() {
  return (
    <div className="min-h-screen bg-surface">

      {/* Hero Section */}
      <section className="px-4 md:px-12 py-32 bg-gradient-to-br from-surface to-surface-container-low">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-on-surface">
            Powering <span className="text-primary italic">Global Talent</span> <br className="hidden md:block" />Across Ontario
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            We bridge the gap between world-class professionals and the industry titans of Canada. Precision matching for a high-growth economy.
          </p>
        </div>
      </section>

      {/* Mission & Vision: Bento Grid */}
      <section className="py-32 px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Mission */}
            <div className="md:col-span-7 bg-surface-container-high p-12 rounded-xl flex flex-col justify-between border border-outline-variant/10">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6" data-weight="fill">
                  verified_user
                </span>
                <h2 className="font-headline text-4xl font-bold mb-6 text-on-surface">Our Mission</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  We are dedicated to matching and preparing employees across Ontario's diverse industrial landscape. By aligning cultural synergy with technical expertise, we ensure every placement is a catalyst for sustainable growth.
                </p>
              </div>
              <div className="flex items-center gap-4 py-6 border-t border-outline-variant/10">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-secondary-container flex items-center justify-center text-xs">
                    ON
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary-container flex items-center justify-center text-xs">
                    MT
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-tertiary-container flex items-center justify-center text-xs">
                    TR
                  </div>
                </div>
                <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">
                  Matching Across 20+ Hubs
                </span>
              </div>
            </div>

            {/* Vision */}
            <div className="md:col-span-5 bg-primary p-12 rounded-xl flex flex-col justify-between text-on-primary">
              <div>
                <span className="material-symbols-outlined text-on-primary text-4xl mb-6">rocket_launch</span>
                <h2 className="font-headline text-4xl font-bold mb-6">The 2029 Vision</h2>
                <p className="text-on-primary/90 text-lg leading-relaxed">
                  To become the highest supplier of professional resources to Fortune 500 companies within the next five years, redefining the standard for international recruitment in Canada.
                </p>
              </div>
              <div className="mt-8">
                <div className="h-1 w-full bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-on-primary w-[65%]"></div>
                </div>
                <span className="text-xs font-bold uppercase mt-2 block opacity-70">
                  Progress Toward 2029 Benchmark
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-32 px-12 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="font-label text-primary uppercase tracking-[0.3em] text-sm mb-4 block">
            Institutional Authority
          </span>
          <h2 className="font-headline text-5xl font-bold text-on-surface">The Management Collective</h2>
          <p className="text-on-surface-variant mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Led by experienced managers with decades of collective expertise in global mobility and human resource logistics.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Manager 1 */}
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 relative">
              <img
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary">Marcus Sterling</h3>
            <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant mt-1">
              Managing Director, Operations
            </p>
          </div>

          {/* Manager 2 */}
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 relative">
              <img
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary">Elena Voshkod</h3>
            <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant mt-1">
              VP of Talent Acquisition
            </p>
          </div>

          {/* Manager 3 */}
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 relative">
              <img
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary">David Chen</h3>
            <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant mt-1">
              Head of Strategic Partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-32 px-12 bg-surface-container-low border-t border-outline-variant/10" id="listings">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="font-headline text-5xl font-bold mb-6 text-on-surface">Current Openings</h2>
            <p className="text-on-surface-variant text-lg">
              Explore exclusive opportunities with our partner network. High-growth roles for ambitious professionals.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-outline-variant/20">
              All Sectors
            </span>
            <span className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-outline-variant/20">
              Remote/Hybrid
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Listing 1 */}
          <div className="group bg-surface-container-high p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:bg-surface-bright border-l-4 border-transparent hover:border-primary">
            <div className="flex gap-8 items-center w-full md:w-auto">
              <div className="w-16 h-16 bg-surface-container-lowest rounded flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface">Logistics Operations Manager</h4>
                <p className="text-on-surface-variant text-sm">Mississauga, ON • Full-time • Fortune 500 Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-6 md:mt-0 w-full md:w-auto justify-between">
              <span className="text-primary font-bold">$95k — $120k</span>
              <a className="border border-outline/40 px-6 py-2 rounded hover:bg-primary hover:text-on-primary transition-all uppercase text-xs font-bold tracking-widest" href="#">
                Apply Now
              </a>
            </div>
          </div>

          {/* Listing 2 */}
          <div className="group bg-surface-container-high p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:bg-surface-bright border-l-4 border-transparent hover:border-primary">
            <div className="flex gap-8 items-center w-full md:w-auto">
              <div className="w-16 h-16 bg-surface-container-lowest rounded flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">account_balance</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface">Senior Financial Analyst</h4>
                <p className="text-on-surface-variant text-sm">Toronto, ON • Hybrid • Institutional Consulting</p>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-6 md:mt-0 w-full md:w-auto justify-between">
              <span className="text-primary font-bold">$110k — $145k</span>
              <a className="border border-outline/40 px-6 py-2 rounded hover:bg-primary hover:text-on-primary transition-all uppercase text-xs font-bold tracking-widest" href="#">
                Apply Now
              </a>
            </div>
          </div>

          {/* Listing 3 */}
          <div className="group bg-surface-container-high p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:bg-surface-bright border-l-4 border-transparent hover:border-primary">
            <div className="flex gap-8 items-center w-full md:w-auto">
              <div className="w-16 h-16 bg-surface-container-lowest rounded flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">developer_mode_tv</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface">DevOps Infrastructure Architect</h4>
                <p className="text-on-surface-variant text-sm">Kitchener-Waterloo, ON • Remote • Tech Expansion</p>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-6 md:mt-0 w-full md:w-auto justify-between">
              <span className="text-primary font-bold">$130k — $180k</span>
              <a className="border border-outline/40 px-6 py-2 rounded hover:bg-primary hover:text-on-primary transition-all uppercase text-xs font-bold tracking-widest" href="#">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}