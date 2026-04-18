
import Footer from '@/components/Footer';

export default function ImmigrationPage() {
  return (
    <div className="min-h-screen bg-surface font-body">
      {/* Hero Section */}
      <header className="relative py-24 md:py-32 px-6 border-b border-outline-variant/30" style={{ background: 'linear-gradient(to bottom, rgba(10, 14, 23, 0.8), rgba(15, 19, 28, 1)), url("https://images.unsplash.com/photo-1454165833767-027eeef1551b?auto=format&fit=crop&q=80&w=2070")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block border-l-4 border-primary px-4 py-1 bg-primary/5">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Decade of Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-on-surface leading-tight">
              Larenj Immigrant <span className="text-primary">Settlement Services</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              Larenjayo Inc has been providing high quality settlement services for numerous immigrants to Canada since the last ten years. Our settlement services are both generic and tailored to the needs of all categories of qualified immigrants.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-4 text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Get in touch
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Pre-arrival Services Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 sticky top-28">
              <h2 className="text-4xl font-headline font-bold text-primary mb-6">Pre-arrival services</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Pre-arrival services offer information to better understand life in Canada such as how to find a job, and how to access other free settlement services when you arrive in Canada. Some programs we offer will help you access specific information according to your profession or destination, such as language training and essential skills training in the workplace.
              </p>
              <div className="bg-surface-container-highest p-8 border-t-2 border-primary">
                <h3 className="font-headline text-xl mb-4 text-on-surface">Eligibility Criteria</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    <span className="text-on-surface-variant">You have received a Confirmation of Permanent Residence letter (COPR), or have been contacted by IRCC with a positive decision.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">public</span>
                    <span className="text-on-surface-variant">You live outside of Canada.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] group">
                <img
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnkABZilSPi4q7IMpLcwi2YkuL5u7Fa9C3BmbBped3p9jRgtSSMy4uiAlWDQdDogG2ActKF4ZyeBymjL1g1o9YZZCKNr82HIdlW_rYXeQH8XVAlwzGbRkF90r29Ez6Zso_0GCmyZIWWVfzBVo68B9MnxWfhXCMSf0MJjcJRkDQZxCVEFn3PJmcvnZhxoaXf5yO2DAUVV26gnKGzq3SaC2iTzR6fxi0Ns2R-Sfp6O5pV1FpqCMIYFJ88VSM-LjBGfEFhAonGsazrw"
                  alt="Settlement Consultation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Canada Settlement Services Section (Bento Style) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface mb-4">In-Canada Settlement Services</h2>
            <p className="text-on-surface-variant max-w-3xl mx-auto">These settlement services are for newcomers to Canada such as those with permanent residence visas, students and work permit holders who need expert guidance on getting settled.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Community Integration */}
            <div className="glass-card p-8 md:col-span-2 flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4">home_work</span>
                <h3 className="text-2xl font-headline font-bold mb-4">Community Integration</h3>
                <p className="text-on-surface-variant">Getting you settled in your community; Finding housing, a job or childcare. We ensure your first steps in Canada are firm and supported.</p>
              </div>
              <div className="mt-8 h-48 w-full rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&h=400"
                  alt="Community"
                />
              </div>
            </div>
            {/* Education & Schools */}
            <div className="bg-primary-container p-8 flex flex-col justify-center text-on-primary-container">
              <span className="material-symbols-outlined text-5xl mb-6">school</span>
              <h3 className="text-2xl font-headline font-bold mb-4">Education &amp; Schools</h3>
              <p className="font-medium">Helping you and your children to find the right school and get registered for a bright future in the Canadian education system.</p>
            </div>
            {/* Language & Training */}
            <div className="glass-card p-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">translate</span>
              <h3 className="text-xl font-headline font-bold mb-4">Language &amp; Training</h3>
              <p className="text-sm text-on-surface-variant">Access to programs such as English or French classes, employment services, skills training and foreign credential assessment.</p>
            </div>
            {/* Health & Social */}
            <div className="glass-card p-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">medical_services</span>
              <h3 className="text-xl font-headline font-bold mb-4">Health &amp; Social</h3>
              <p className="text-sm text-on-surface-variant">Helping you to get information about healthcare and social services to ensure your family's well-being.</p>
            </div>
            {/* Spiritual & Support */}
            <div className="glass-card p-8">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">church</span>
              <h3 className="text-xl font-headline font-bold mb-4">Spiritual &amp; Support</h3>
              <p className="text-sm text-on-surface-variant">Helping you to find churches to attend and providing expert interpreters or translators for your needs.</p>
            </div>
            {/* Special Assistance Banner */}
            <div className="md:col-span-3 mt-12 bg-surface-container p-12 border-l-8 border-primary relative overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined">sign_language</span>
                    Special Assistance
                  </h3>
                  <p className="text-on-surface-variant">We also help new immigrants request sign language interpreters from anywhere in Ontario by helping you to contact the Canadian Hearing Society.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-high p-4">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Mon - Thu</p>
                    <p className="text-on-surface text-lg font-bold">8am - 8pm</p>
                  </div>
                  <div className="bg-surface-container-high p-4">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Friday</p>
                    <p className="text-on-surface text-lg font-bold">8am - 5pm</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-[15rem]">interpreter_mode</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 px-6 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-headline font-black text-on-surface mb-8">Who is Eligible?</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
              Our services are available to Permanent Residents of Canada, landed immigrants, convention refugees, Minister’s Permit holders, or refugee claimants approved by Citizenship Immigration and Canada.
            </p>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            <p className="text-lg text-on-surface-variant font-medium leading-relaxed italic">
              "While these services are mainly for newcomers, other eligible immigrants who need help in adapting to Canadian society and integrating into the community may also qualify, regardless of how long they have been in Canada."
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h3 className="text-3xl font-headline font-bold">Ready to start your Canadian journey?</h3>
          <p className="text-on-surface-variant">Connect with our specialized consultants today and let us handle the complexities of your settlement.</p>
          <button className="bg-primary text-on-primary-container px-12 py-5 text-xl font-black uppercase tracking-widest hover:bg-primary-fixed transition-colors">
            Get in touch
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}