import Link from 'next/link';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      <main className="pt-24">
        <HeroSlider />

        {/* The Pillars of Prosperity */}
        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold text-primary mb-4">The Pillars of Prosperity</h2>
              <div className="mx-auto h-1 w-24 bg-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-surface p-10 rounded-3xl border border-outline-variant/20 shadow-xl hover:border-primary transition-all">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">account_balance</span>
                <h3 className="text-2xl font-headline font-bold mb-4">Larenj Consulting Services</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed text-sm">
                  Pioneering Leadership Development and strategic Business Analysis. We train the Flock Keepers of the modern industry through rigorous BABOK and PMP guidelines.
                </p>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Leadership Strategy</li>
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Business Analysis (BABOK)</li>
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Project Management (PMP)</li>
                </ul>
              </article>

              <article className="bg-surface p-10 rounded-3xl border border-outline-variant/20 shadow-xl hover:border-primary transition-all">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">group_add</span>
                <h3 className="text-2xl font-headline font-bold mb-4">Larenj Employment Services</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed text-sm">
                  A premier Canadian-owned staffing firm specializing in talent acquisition for Fortune 500 companies. From general labour to specialized executive roles.
                </p>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Fortune 500 Placement</li>
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Industrial Staffing</li>
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Workforce Solutions</li>
                </ul>
              </article>

              <article className="bg-surface p-10 rounded-3xl border border-outline-variant/20 shadow-xl hover:border-primary transition-all">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">potted_plant</span>
                <h3 className="text-2xl font-headline font-bold mb-4">Larenj Immigration Services</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed text-sm">
                  High-quality settlement pathways for new immigrants to Canada. We provide comprehensive Pre-arrival and In-Canada support systems for seamless transition.
                </p>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Pre-arrival Orientation</li>
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Settlement Assistance</li>
                  <li className="flex items-center gap-3"><span className="text-primary">•</span> Canadian Integration</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Established Authority */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-8">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Established Authority</span>
                <h2 className="text-5xl font-headline font-bold text-on-background">World-Class Reach. Ethical Innovation.</h2>
                <p className="text-on-surface-variant max-w-3xl leading-relaxed text-lg">
                  Larenj Global has cultivated an impeccable reputation for delivering innovative training and human capital solutions across continents. Our commitment to ethical leadership and global excellence ensures that we don't just fill roles—we build legacies.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/10">
                  <div>
                    <p className="text-4xl font-headline font-bold text-primary">15+</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">Years of Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-headline font-bold text-primary">400+</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">Global Partners</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-container-high p-10 rounded-3xl border border-outline-variant/20 shadow-xl">
                <div className="flex flex-col items-start gap-6">
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">From the Archive</span>
                  <img className="w-full rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" alt="Book cover" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">The Hunters and the Flock Keepers</p>
                    <p className="text-on-surface font-bold text-xl">By David Ayo Akerele</p>
                  </div>
                  <Link href="/publications" className="inline-flex items-center gap-2 border border-primary px-6 py-3 rounded-full text-primary font-bold uppercase tracking-[0.2em] hover:bg-primary/10 transition-colors">
                    Explore Publication
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Footprint */}
        <section className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold text-on-background mb-4">Global Footprint</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { title: 'Canada', subtitle: 'Headquarters' },
                { title: 'North America', subtitle: 'Operations' },
                { title: 'Africa', subtitle: 'Growth Center' },
                { title: 'Rest of World', subtitle: 'Strategic Alliances' },
              ].map((item) => (
                <div key={item.title} className="aspect-square rounded-3xl bg-surface border border-outline-variant flex flex-col items-center justify-center text-center p-6 transition-all hover:border-primary">
                  <p className="text-primary font-bold text-xl mb-2">{item.title}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">{item.subtitle}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-container text-on-primary-container">
          <div className="container mx-auto px-12 text-center">
            <h2 className="text-5xl font-headline font-bold mb-6">Ready to Lead the Future?</h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-10">
              Join the thousands of professionals and organizations that have elevated their potential through Larenj’s world-class training.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-surface text-primary px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-surface/90 transition-colors">
                Get Started Today
              </Link>
              <Link href="/contact" className="border border-on-primary-container px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-on-primary-container/10 transition-colors">
                Contact Our Advisors
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
