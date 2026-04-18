import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Careers() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 md:px-12 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-on-surface tracking-tight leading-[1.1]">
              Architect the <span className="text-primary italic">Global</span> Legacy.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl">
              Join a multidisciplinary collective of consultants, legal experts, and strategists redefining global citizenship and international enterprise.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-bold transition-all hover:brightness-110" href="#openings">
                View Openings
              </a>
              <a className="text-primary font-bold flex items-center gap-2 group" href="#">
                Culture Report <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high">
              <img className="w-full h-full object-cover grayscale contrast-125 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEP6Pq0UWy0V36q-HAk9roWpjMEOEUpM6A0trRqFuaXqlXU0XIqT9wZGyZstaLlT-vlQ-fVBRay3kKBnug3BcN41AmryxWYNJX5e-2wbyKTkee07TvFVXoiJpXEAg3QnB41FXI4BmWqDbGXOhQim46M_NqWlGndTC8pkyXZhI3q5AL32ZS-cY_y1zcOyNKbgOvbNG6kxlzA-8WnpRAT20Y9cAWA2gO496Xq4cPa2kvwjO2KhPHGj8ASznsEIWCFJSAsVNvE0KoQw" alt="Interior of a high-end modern corporate library" />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-panel p-8 rounded-xl border border-outline-variant/15 max-w-xs">
              <p className="font-headline text-primary text-2xl mb-2 italic">"A Sovereign Pursuit"</p>
              <p className="text-on-surface-variant text-sm">We don't just fill roles; we curate intellectual partnerships for the long term.</p>
            </div>
          </div>
        </section>

        {/* Why Work Here */}
        <section className="bg-surface-container-low py-32 mb-24">
          <div className="px-12 max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="font-headline text-4xl text-on-surface mb-4">The Sovereign Standard</h2>
              <div className="w-24 h-1 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>public</span>
                <h3 className="text-xl font-bold text-on-surface">Global Mobility</h3>
                <p className="text-on-surface-variant leading-relaxed">Operate from any of our global hubs in London, Dubai, or Singapore with full relocation support.</p>
              </div>
              <div className="space-y-6 pt-12 md:pt-0">
                <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>balance</span>
                <h3 className="text-xl font-bold text-on-surface">Institutional Autonomy</h3>
                <p className="text-on-surface-variant leading-relaxed">We empower our consultants to lead their own practice areas with zero bureaucratic friction.</p>
              </div>
              <div className="space-y-6 pt-12 md:pt-24">
                <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>military_tech</span>
                <h3 className="text-xl font-bold text-on-surface">Equity Partners</h3>
                <p className="text-on-surface-variant leading-relaxed">Long-term tenures are rewarded with profit-sharing and global equity across the Larenj portfolio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-12 max-w-7xl mx-auto mb-24" id="openings">
          <div className="bg-surface-container-high p-8 rounded-xl space-y-8 shadow-[0px_24px_48px_rgba(0,0,0,0.4)]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                <input className="w-full bg-surface-container-low border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface pl-12 py-4 transition-all outline-none" placeholder="Search by role or keyword..." type="text"/>
              </div>
              <div className="relative">
                <select className="w-full bg-surface-container-low border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface py-4 px-4 transition-all outline-none appearance-none">
                  <option>All Departments</option>
                  <option>Consulting</option>
                  <option>Legal & Immigration</option>
                  <option>Operations</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
              <div className="relative">
                <select className="w-full bg-surface-container-low border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface py-4 px-4 transition-all outline-none appearance-none">
                  <option>Global Locations</option>
                  <option>London, UK</option>
                  <option>Dubai, UAE</option>
                  <option>Remote</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>
        </section>

        {/* Openings List */}
        <section className="px-12 max-w-7xl mx-auto space-y-4">
          {/* Job Card 1 */}
          <div className="group bg-surface-container-low p-8 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all hover:bg-surface-container-high border border-transparent hover:border-outline-variant/20">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">Consulting</span>
                <span className="text-xs px-2 py-1 bg-secondary-container text-on-secondary-container rounded">Full-time</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface">Senior Investment Migration Lead</h3>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> London / Hybrid</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Posted 2 days ago</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-on-surface-variant font-medium text-sm hidden lg:block">$140k – $180k + Performance</span>
              <button className="border border-primary text-primary px-8 py-3 rounded-md font-bold group-hover:bg-primary group-hover:text-on-primary transition-all">
                Apply Now
              </button>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="group bg-surface-container-low p-8 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all hover:bg-surface-container-high border border-transparent hover:border-outline-variant/20">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">Operations</span>
                <span className="text-xs px-2 py-1 bg-secondary-container text-on-secondary-container rounded">Contract</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface">Director of Global Logistics</h3>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Dubai, UAE</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Posted 5 days ago</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-on-surface-variant font-medium text-sm hidden lg:block">$200k+ Tax Free</span>
              <button className="border border-primary text-primary px-8 py-3 rounded-md font-bold group-hover:bg-primary group-hover:text-on-primary transition-all">
                Apply Now
              </button>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="group bg-surface-container-low p-8 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all hover:bg-surface-container-high border border-transparent hover:border-outline-variant/20">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">Legal</span>
                <span className="text-xs px-2 py-1 bg-secondary-container text-on-secondary-container rounded">Full-time</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface">Compliance & Sovereignty Specialist</h3>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Remote / Europe</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Posted 1 week ago</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-on-surface-variant font-medium text-sm hidden lg:block">$110k – $150k</span>
              <button className="border border-primary text-primary px-8 py-3 rounded-md font-bold group-hover:bg-primary group-hover:text-on-primary transition-all">
                Apply Now
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter / Talent Pool */}
        <section className="mt-32 px-12 max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container p-12 md:p-20 border border-outline-variant/10">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="w-full h-full bg-primary blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Can't find your fit?</h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Our talent archive is constantly being reviewed for bespoke leadership roles. Join our network to be considered for unlisted opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input className="flex-grow bg-surface-container-high border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface px-6 py-4 outline-none" placeholder="Your professional email" type="email"/>
                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold">Join the Archive</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}