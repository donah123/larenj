import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-surface">

      <section className="relative h-[614px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover grayscale opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtAUExyFzxByh9kf4pYT3PEoBoc-Buq0OXXV3vsGIRHEjyL8Yok93Y78dJfu3ANdPkM5KlNS9LCbDUovxJE9NRXVE6agVVbJ_bvY8PWaUEc0XAq1d4oIiCciZ6mb3Wagx45Ce6NRh8qYzCFzgdWM9cBsbYF6IyYC3O1GAxtTcEIqCgWyBaXzT9NrYuXABPDT_aro3WBMnNDohngbnVlIkxO8Q_6cxx_KAvupoN3F7uhPJXpOQJsqKqS7UXKmPQUqz-8AYxNRGQTQ"
            alt="Dramatic skyscraper at dusk"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-8">
          <div className="text-center max-w-4xl">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Larenj <span className="text-primary">Consulting</span> Services
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Sovereign strategic advisory and heritage-grade professional development for the global elite. We don't just solve problems; we define legacies.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container-high p-10 rounded-3xl border border-outline-variant shadow-xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700" />
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary text-4xl">star</span>
              <h2 className="font-headline text-3xl font-bold">Leadership Development Programs</h2>
            </div>
            <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
              Redefine the hierarchy. We equip leaders at any level through our prestigious <span className="text-primary font-bold">'Flock Keepers'</span> training, ensuring a legacy of authority and wisdom.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 p-4 bg-surface-container border-l-2 border-primary rounded-xl">
                <span className="font-bold text-primary uppercase text-xs tracking-widest">Module I</span>
                <span className="text-on-surface font-semibold">Mentorship</span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-surface-container border-l-2 border-primary rounded-xl">
                <span className="font-bold text-primary uppercase text-xs tracking-widest">Module II</span>
                <span className="text-on-surface font-semibold">Visionary Leadership</span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-surface-container border-l-2 border-primary rounded-xl">
                <span className="font-bold text-primary uppercase text-xs tracking-widest">Module III</span>
                <span className="text-on-surface font-semibold">Leadership Competitiveness</span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-surface-container border-l-2 border-primary rounded-xl">
                <span className="font-bold text-primary uppercase text-xs tracking-widest">Module IV</span>
                <span className="text-on-surface font-semibold">Problem Solving in Leadership</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-low p-10 rounded-3xl border border-outline-variant shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">group_remove</span>
              <h3 className="font-headline text-2xl font-bold">Turnover Management</h3>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Protect your human capital through strategic interventions designed to minimize organizational fragility.
            </p>
            <ul className="space-y-4 text-on-surface-variant">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-sm">analytics</span>
                Quantifying voluntary turnover
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-sm">trending_down</span>
                Minimizing voluntary turnover
              </li>
            </ul>
          </div>

          <div className="md:col-span-6 bg-surface-container-low p-10 rounded-3xl border border-outline-variant shadow-xl">
            <h3 className="font-headline text-2xl font-bold mb-4">Business Analysis</h3>
            <p className="text-sm text-on-surface-variant italic mb-8 leading-relaxed">
              The discipline of identifying business needs and determining solutions to business problems. Our 'Flock Keepers' end-to-end IT training bridges the gap between vision and execution.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">book_2</span>
                <div>
                  <h4 className="font-bold text-sm">BABOK Guidelines</h4>
                  <p className="text-xs text-on-surface-variant">Industry-standard methodological rigor.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">assignment</span>
                <div>
                  <h4 className="font-bold text-sm">Project Documents &amp; Artefacts</h4>
                  <p className="text-xs text-on-surface-variant">Real-world BRD, FRD, and User Stories.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Domains:</span>
                <span className="text-xs px-2 py-1 bg-surface-container rounded">Retail</span>
                <span className="text-xs px-2 py-1 bg-surface-container rounded">Real Estate</span>
                <span className="text-xs px-2 py-1 bg-surface-container rounded">Finance</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-surface-container-high p-10 rounded-3xl border border-outline-variant shadow-xl">
            <h3 className="font-headline text-2xl font-bold mb-4">Project Management</h3>
            <p className="text-sm text-on-surface-variant italic mb-8 leading-relaxed">
              The application of processes, methods, skills, knowledge and experience to achieve specific project objectives according to the project acceptance criteria.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">verified</span>
                <div>
                  <h4 className="font-bold text-sm">PMP Guidelines</h4>
                  <p className="text-xs text-on-surface-variant">Excellence in execution and compliance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">developer_board</span>
                <div>
                  <h4 className="font-bold text-sm">IT Domain Training</h4>
                  <p className="text-xs text-on-surface-variant">Specialized technical management pathways.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Case Studies:</span>
                <span className="text-xs px-2 py-1 bg-surface-container rounded">Retail</span>
                <span className="text-xs px-2 py-1 bg-surface-container rounded">Real Estate</span>
                <span className="text-xs px-2 py-1 bg-surface-container rounded">Finance</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-low p-10 rounded-3xl border border-outline-variant shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">psychology</span>
              <h3 className="font-headline text-2xl font-bold">Tacit Knowledge</h3>
            </div>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Stop the silent drain. Preserve the unwritten expertise that defines your competitive advantage.
            </p>
            <ul className="space-y-4 text-on-surface-variant">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-sm">calculate</span>
                Quantifying tacit loss
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary text-sm">shield</span>
                Minimizing tacit loss
              </li>
            </ul>
          </div>

          <div className="md:col-span-8 bg-gradient-to-br from-primary-container/10 to-transparent p-10 rounded-3xl border border-primary/20 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="font-headline text-3xl font-bold mb-4">CV Design &amp; Career Guidance</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Struggling to secure interviews despite your expertise? Our masters rebrand your professional identity. We transform standard resumes into <span className="text-on-surface font-bold italic">Sovereign Portfolios</span> that demand attention from elite recruiters.
              </p>
              <button className="bg-primary text-on-primary px-8 py-3 font-bold uppercase text-xs tracking-tighter rounded-full">
                Rebrand Your Identity
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-3xl bg-surface-container border border-outline-variant flex items-center justify-center p-6 text-center">
              <div>
                <span className="material-symbols-outlined text-primary text-5xl mb-4">description</span>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">Expert Rebranding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-container-high p-10 rounded-3xl border border-outline-variant">
          <h3 className="font-headline text-2xl font-bold mb-8 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">terminal</span>
            Software Mastery &amp; Training
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['MS Word', 'MS Excel', 'MS PowerPoint', 'MS SharePoint', 'MS Visio', 'PostEdge', 'COINS', 'SPSS', 'TSYS (TS2)', 'And others'].map((label) => (
              <div key={label} className="p-3 bg-surface-container-lowest border border-outline-variant/30 text-center rounded">
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant relative">
          <h3 className="font-headline text-2xl font-bold mb-6">Accounting &amp; Taxation</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
            Sophisticated advice and enterprise-level solutions for business investments and complex tax filing requirements. We navigate the intricate financial landscape so you can focus on growth.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-outline-variant/20">
              <span className="text-xs font-bold uppercase text-primary">Service</span>
              <span className="text-xs">Status</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm">Tax Filing</span>
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm">Business Investments</span>
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="relative rounded-3xl overflow-hidden h-[400px] flex items-center p-12 bg-surface-container-highest">
          <img
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkuKfz-FnNi8MdUheTj5oqMvSB-s-WBT-RaTTEzl-NwEWYKsHez9AKiKbXoYkaFljrW-JNpukb-7QHBNoCAJVDG6hIkq9sPbexHwJXfclEetNmHazhhhU6rQNAtSlg-hGbNwVkDVfrs8NxBwIA-zXJcGLBSV10axoQtoolO4BJ7kmrd4gIugTUblk95ZGc1lK-dhAMmhbXG3K4MDNnhbtEqqLHXOG5tNlKUH9MsEVMcUIBa2QeD2BQhf_8wTkFkJFP0S7q7QQA"
            alt="Luxury leather accessories"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-lg">
            <h2 className="font-headline text-4xl font-bold mb-4 text-primary">Heritage Accessories</h2>
            <p className="text-on-surface leading-relaxed mb-8">
              Beyond consulting, we celebrate culture through the master-craft of Making African, Asian, and Caribbean Accessories. Arts, crafts, fashion, and accessories that bridge the gap between tradition and modern luxury.
            </p>
            <button className="border border-primary text-primary px-8 py-3 font-serif uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary transition-all">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8 pb-32">
        <div className="bg-surface-container-highest p-12 rounded-3xl shadow-2xl border border-primary/30 text-center relative overflow-hidden">
          <div className="flex justify-center gap-12 mb-12">
            <div>
              <span className="text-3xl font-headline font-bold text-primary">2</span>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Minutes to complete</p>
            </div>
            <div>
              <span className="text-3xl font-headline font-bold text-primary">20</span>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Minutes to respond</p>
            </div>
          </div>
          <h2 className="font-headline text-4xl font-bold mb-4">Order Now and Submit</h2>
          <p className="text-on-surface-variant mb-12 max-w-md mx-auto leading-relaxed">
            Initiate your consultation today. Our partners respond within 20 minutes via secure email.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Full Name</label>
              <input className="bg-surface-container border border-outline-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-md" placeholder="Enter your full name" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Professional Email</label>
              <input className="bg-surface-container border border-outline-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-md" placeholder="you@company.com" type="email" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Service Interest</label>
              <select className="bg-surface-container border border-outline-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-md">
                <option>Sovereign Citizenship</option>
                <option>Global Investment</option>
                <option>Regulatory Compliance</option>
                <option>Corporate Structuring</option>
                <option>Risk Management</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Inquiry Brief</label>
              <textarea className="bg-surface-container border border-outline-variant focus:border-primary focus:ring-0 text-sm py-3 px-4 rounded-md" placeholder="Briefly describe your requirements..." rows={4} />
            </div>
            <button className="md:col-span-2 bg-primary text-on-primary py-4 font-serif uppercase tracking-[0.2em] font-bold rounded-md shadow-lg hover:shadow-primary/20 transition-all" type="submit">
              Submit Request
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}