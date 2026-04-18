import Image from 'next/image';
import Footer from '@/components/Footer';

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <section className="relative overflow-hidden px-6 md:px-12 pt-28 pb-24">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB74yx8UzH7wbfzxhi29dkeG9wRUsFJk-IwvjSFJnU9Ulwz_Cd1CqEKnOaze3Y8FAMs_DAaMpkCFUdQ3QSa26IT5sZifBW7zoM-yDbcXoj4E7GtnwSVczAlnDIYOcrRwXfaFOe9GknjJ1YFmkNLVqbPCokiG4kE3qkzXKQSEmD71YHWKbPy7sfz1gvTtMuOYS_r8Z_ourCxGMTR3IgPj4TosQQ"
            alt="Library shelves with ambient lighting"
            className="w-full h-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-surface/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-primary-container/30 bg-surface-container-high px-4 py-2 text-primary text-xs uppercase tracking-[0.35em] mb-6">
            Institutional Knowledge
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight leading-tight mb-6">
            Our <span className="text-primary-container">Publications</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-on-surface-variant leading-relaxed">
            Larenj trains individuals and organizations around the world using varieties of in-house materials, some of which include books written and published by our Director. Watch this space for the release of different books.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-container/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[3/4] rounded-3xl bg-surface-container-high border border-outline-variant/30 p-3 shadow-2xl overflow-hidden">
                <Image
                  src="/hunter.jpg"
                  alt="The Hunters and the Flock Keepers book cover"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-outline-variant/20 pt-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-outline block mb-1">Author</span>
                  <span className="text-on-surface font-semibold tracking-wide">David Ayo Akerele</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-outline block mb-1">Format</span>
                  <span className="text-on-surface font-semibold tracking-wide">Hardcover / Digital</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-3 text-primary-container font-medium text-sm uppercase tracking-widest">
                <span className="block h-[1px] w-12 bg-primary-container" />
                Featured Publication
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">The Hunters and the Flock Keepers</h2>
              <div className="bg-surface-container border-l-4 border-primary-container p-8 rounded-3xl">
                <p className="text-xl italic leading-relaxed text-on-surface font-headline">
                  “This book starts out with the story of the struggles, choices, decisions, tensions, successes and failures that confronted a Middle Eastern family of four people. It leverages on the gaps in their leadership practices to carve out fifteen novel and profound leadership principles for individuals, businesses and nations.”
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-high p-8 border border-outline-variant/20 rounded-3xl">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                  explore
                </span>
                <h3 className="text-xl font-bold mb-4">Leadership Categories</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  Through carefully studied and researched endemic styles of leadership, this book uncovers two new categories of leaders across the globe; “The Hunters” and the “Flock Keepers”.
                </p>
              </div>
              <div className="bg-surface-container-high p-8 border border-outline-variant/20 rounded-3xl">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                  history_edu
                </span>
                <h3 className="text-xl font-bold mb-4">Transformational Remedy</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                  It critically discusses the successes and failures of forty one African leaders in nations like Nigeria, Rwanda &amp; South Africa to offer the “flock keepers” model as the only remedy for transformational leaders.
                </p>
              </div>
              <div className="md:col-span-2 bg-surface-container-low p-8 border border-outline-variant/10 rounded-3xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">auto_stories</span>
                  Strategic Resource
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  “This book is a library of history. It is a compendium of knowledge. Ultimately, it’s a lifelong strategic resource in the hands of students, academics, professionals, politicians and all stakeholders involved in leadership development and nation building at any level.”
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <a
                href="https://www.amazon.ca/dp/1721506357/ref=cm_sw_r_cp_ep_dp_PHa.Bb8EC5XZQ"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-primary-container text-on-primary-container font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:brightness-110 transition-all"
              >
                Buy it now at Amazon
                <span className="material-symbols-outlined">shopping_bag</span>
              </a>
              <button className="w-full sm:w-auto px-10 py-5 border border-outline-variant text-on-surface font-bold text-sm uppercase tracking-[0.2em] hover:bg-surface-container transition-all rounded-3xl">
                View Book Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="bg-surface-container relative overflow-hidden border border-outline-variant/30 rounded-[28px]">
          <div className="absolute right-0 top-1/2 h-full w-1/3 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px] text-primary">import_contacts</span>
          </div>
          <div className="relative z-10 p-12 lg:p-20 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Upcoming Releases</h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed">
              Larenj International is constantly developing new curriculum and thought leadership materials. Subscribe to our institutional updates to be the first to know when new publications become available.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Institutional Email Address"
                className="flex-1 rounded-3xl bg-surface-container-lowest border border-outline-variant px-6 py-4 text-on-surface focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none placeholder:text-outline/50"
              />
              <button className="rounded-3xl bg-primary text-on-primary px-8 py-4 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all">
                Join Registry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
