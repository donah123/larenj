import Image from 'next/image';
import Footer from '@/components/Footer';

export default function EmploymentPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <section className="relative h-[819px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Modern industrial workspace with warm ambient lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPGKjajLhQ9DOe4B888T5Hbcd-bHxBu_0RpNCHeUE3Wez1L4Cj71sBjrbcplRtREnzafSNCvcQzi8FtRoT8hyLkqW8ASdpX5B4rU6Alv0QLXTbJD_VW2yw2yl1pLPaNalHkE7SbZYMxDH5o7mrU4DaOwV5l0QtplLWGprvGlMZ8SqF19kN5xQJ4A-DKn4f8E8gUAwEnrIvu-I8BtROJsV-YkxCpwptn6EF3-uqX9EO5zSf-4igUf_KGcEq8ReEwQ5YcctEr-tNpQ"
            className="w-full h-full object-cover object-center grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center">
          <div className="max-w-3xl">
            <span className="text-primary tracking-[0.3em] uppercase text-sm font-bold mb-6 inline-block">
              Precision in Placement
            </span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Larenj Employment Service
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Leading Canadian-owned and operated staffing firm specializing in general labour, factory work, cleaning, and low-skilled employment in Ontario.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-primary px-8 py-4 text-on-primary font-bold hover:brightness-105 transition-all">
                Find Your Next Hire
              </button>
              <button className="rounded-full border border-outline px-8 py-4 font-bold text-on-surface hover:bg-surface-container transition-colors">
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-8 text-primary">Decades of Operational Excellence</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                <p>
                  Since 2016, Larenj has been a cornerstone of the Ontario workforce, bridging critical gaps in general laborer supply across Toronto, Mississauga, Brampton, and the Greater Toronto Area.
                </p>
                <p>
                  Our history is rooted in a deep understanding of the local industrial landscape. We recognized early that the engine of the Canadian economy relies on the reliable supply of dedicated personnel who keep factories running and logistics moving.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-8">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="text-3xl font-headline font-bold text-primary">2016</div>
                    <div className="text-sm uppercase tracking-widest text-on-surface-variant">Active Operations</div>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <div className="text-3xl font-headline font-bold text-primary">GTA</div>
                    <div className="text-sm uppercase tracking-widest text-on-surface-variant">Core Focus Area</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container-highest border border-outline-variant p-4 overflow-hidden rounded-3xl">
                <img
                  alt="Professional handshake representing partnership"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtXCGDmlTM5Sd85JH5qk7HXsCzTj0G3ymGa10ccfM8y87oaMWmadx9Y7QOHU1bfhRHGaMsjULDyAMKBHbXdia5GmJUToK5eU8DfWGQpxurk6NMsdiLupawkU4s4urjPgoGIbDxVAwfI88Ax5_5zlxlO2E7LNHEPDORGNOtuT9-HUnPuBpNIUFMSbcPl44q2cXVbmYjh2xwmDgMCNVCjzrjyqsoWJ0LX4OznFbjZIz50xZImQwh2SKwQjQwD50Dm-wzWiociIougg"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="hidden lg:block absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4">
              <div className="relative rounded-3xl border border-outline-variant bg-surface-container-high p-12 overflow-hidden">
                <div className="absolute top-8 right-8 text-primary opacity-15 pointer-events-none">
                  <span className="material-symbols-outlined text-[5rem]">visibility</span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-6 text-primary">Our Vision</h3>
                <p className="text-on-surface-variant text-2xl font-light leading-relaxed max-w-xl">
                  To become the highest supplier of low skilled resources to Fortune 500 companies within Canada in the next five years.
                </p>
              </div>
              <div className="rounded-3xl bg-primary p-12 text-on-primary border border-on-primary/10">
                <h3 className="font-headline text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-on-primary/90 text-lg leading-relaxed">
                  To match, prepare and assign employees to clients’ needs across Ontario with adequate and accurate skills requirements in a manner that maximizes value for clients and minimizes risks to employees
                </p>
                <div className="mt-8 italic text-on-primary/80 border-l-4 border-on-primary/30 pl-6">
                  “We don't just fill positions; we fortify operations through meticulous candidate preparation and alignment with legislative standards.”
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-surface-container-high border border-outline-variant p-12">
              <h3 className="font-headline text-3xl font-bold mb-8 text-primary">Offerings</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <span className="font-bold text-lg uppercase tracking-tight">Temporary staffing</span>
                </li>
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">sync_alt</span>
                  <span className="font-bold text-lg uppercase tracking-tight">Temp-to-hire</span>
                </li>
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">person_add</span>
                  <span className="font-bold text-lg uppercase tracking-tight">Direct hire</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline text-5xl font-bold mb-4">Core Service Excellence</h2>
            <div className="mx-auto h-1 w-24 bg-primary rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-surface-container border border-outline-variant p-8 rounded-3xl hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">precision_manufacturing</span>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">General Labour</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Unmatched expertise in sourcing and managing high-performance industrial crews.
              </p>
            </div>
            <div className="bg-surface-container border border-outline-variant p-8 rounded-3xl hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">person_search</span>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Custom Recruitment</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Bespoke search strategies tailored to your specific facility's operational tempo.
              </p>
            </div>
            <div className="bg-surface-container border border-outline-variant p-8 rounded-3xl hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">visibility</span>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">On-Site Visits</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Continuous quality assurance through regular site inspections and manager check-ins.
              </p>
            </div>
            <div className="bg-surface-container border border-outline-variant p-8 rounded-3xl hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">health_and_safety</span>
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Safety Training</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Comprehensive health and safety orientations ensuring compliance with Ontario regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-headline text-4xl font-bold mb-6">Expert Leadership</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Our team comprises industry-relevant personnel who possess an intimate understanding of both legislative mandates and nuanced business requirements. We are practitioners, not just recruiters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface-container-high rounded-3xl">
                <img
                  alt="Strategic operations leader"
                  src="img1.jpeg"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h5 className="text-primary font-headline text-xl font-bold">Strategic Operations</h5>
              <p className="text-sm uppercase tracking-widest text-on-surface-variant mt-2">Executive Leadership</p>
            </div>
            {/* <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface-container-high rounded-3xl">
                <img
                  alt="Legal and compliance leader"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA1GYSkzsK82cCgH4dx-Hn5fdYKcvVz6g7b6cHNFbjE5K8HzsfkAfrXFollJhEhI1i3AtaWcTpZpU8sfK5ogWrHj52TszB-GqUlrUJVWQ9idAlKyIaoKgZcv5829ddo_ti0ohgEt8p09g8HAUwEzJ3IkONhRi0Luba_zYbzHPioE7sUz_rebjqZdx4CPYO4LOJH03viswjV8e4DTOL5dFtT_2GgUF1GJi3toBKiNT2QuPeQUj2YeoIQAtMFy502OiPeL32nkKkRw"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h5 className="text-primary font-headline text-xl font-bold">Legal & Compliance</h5>
              <p className="text-sm uppercase tracking-widest text-on-surface-variant mt-2">Legislative Standards</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface-container-high rounded-3xl">
                <img
                  alt="Client relations leader"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhC50bO1fV2kOLUGUJFaxHrlSeAHGSCIzvY2qi7EzO_fvK4J7zBBxVwJ4D58NPzj7VGhTVCf7UBqh5vJSlJ6hHGDc6SbAyhxljuD0W42FyPK2_sEJRRvD2Dr4d3cT4d81y8c9EKLvQBvAkGovmO6_M-1NkJDeUZpFcHArm7ktyr1li6ZlZzLQG10r8KYfsocm3gVIVgt6kqRl408-YAc9dGMgPNE6fw8VPWS9yfeaa36KeZNYGPb9p1XTtTqCduNaq3fXPZMqjVA"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h5 className="text-primary font-headline text-xl font-bold">Client Relations</h5>
              <p className="text-sm uppercase tracking-widest text-on-surface-variant mt-2">Partnership Management</p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-surface-container-high">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-4">Latest Opportunities</h2>
              <p className="text-on-surface-variant">Immediate openings across Ontario's industrial sectors.</p>
            </div>
            <a className="text-primary font-bold hover:underline flex items-center gap-2" href="#listings">
              Complete Job Listings
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-container-high p-8 flex flex-col md:flex-row justify-between items-center hover:bg-surface-container-highest transition-colors border-l-2 border-transparent hover:border-primary rounded-3xl">
              <div>
                <h6 className="text-xl font-bold text-on-surface mb-2">Production Line Associate</h6>
                <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant uppercase tracking-widest font-semibold">
                  <span>Mississauga</span>
                  <span>Full-Time</span>
                  <span>$18.50/hr</span>
                </div>
              </div>
              <button className="mt-8 md:mt-0 px-8 py-3 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 transition-all">
                Apply Now
              </button>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col md:flex-row justify-between items-center hover:bg-surface-container-highest transition-colors border-l-2 border-transparent hover:border-primary rounded-3xl">
              <div>
                <h6 className="text-xl font-bold text-on-surface mb-2">Warehouse Packer</h6>
                <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant uppercase tracking-widest font-semibold">
                  <span>Brampton</span>
                  <span>Temporary</span>
                  <span>$17.00/hr</span>
                </div>
              </div>
              <button className="mt-8 md:mt-0 px-8 py-3 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 transition-all">
                Apply Now
              </button>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col md:flex-row justify-between items-center hover:bg-surface-container-highest transition-colors border-l-2 border-transparent hover:border-primary rounded-3xl">
              <div>
                <h6 className="text-xl font-bold text-on-surface mb-2">Industrial Cleaner (Lead)</h6>
                <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant uppercase tracking-widest font-semibold">
                  <span>Toronto</span>
                  <span>Direct Hire</span>
                  <span>Competitive</span>
                </div>
              </div>
              <button className="mt-8 md:mt-0 px-8 py-3 bg-primary text-on-primary font-bold rounded-full hover:brightness-110 transition-all">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center rounded-full border border-primary-container/30 bg-surface-container-high px-4 py-2 text-primary text-xs uppercase tracking-[0.35em] mb-4">
              Trusted Partners
            </span>
            <h2 className="font-headline text-3xl font-bold">Our Clients</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {[
              { src: '/client/ABCTechnologies_Primary_RGB-1536x806.png', alt: 'ABC Technologies' },
              { src: '/client/ace-1536x576.jpg', alt: 'ACE' },
              { src: '/client/logo1.png', alt: 'Client' },
              { src: '/client/logoRound.png', alt: 'Client' },
              { src: '/client/nafa.png', alt: 'NAFA' },
              { src: '/client/petvalue.jpg', alt: 'Pet Value' },
              { src: '/client/pizapiza.png', alt: 'Piza Piza' },
            ].map(({ src, alt }) => (
              <div
                key={src}
                className="flex items-center justify-center p-6 bg-surface-container rounded-2xl border border-outline-variant/20 h-28"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={160}
                  height={80}
                  className="object-contain max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
