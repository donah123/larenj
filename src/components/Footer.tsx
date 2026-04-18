import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/15 bg-surface-container">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-12 py-20 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/logo1.png"
              alt="Larenj International Logo"
              width={70}
              height={70}
              className="rounded"
            />
            <div className="font-headline text-xl text-primary">Larenj International</div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Pioneers in global consulting and sovereign immigration facilitation.
          </p>
        </div>
        <div className="space-y-4">
          <div className="font-label text-sm uppercase tracking-widest text-primary font-bold">Solutions</div>
          <ul className="space-y-2">
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/consulting">Consulting</Link></li>
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/immigration">Immigration</Link></li>
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/employment">Employment</Link></li>
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/immigration">Global Citizenship</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-label text-sm uppercase tracking-widest text-primary font-bold">Resources</div>
          <ul className="space-y-2">
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/careers">Careers</Link></li>
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/about">About</Link></li>
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/contact">Contact</Link></li>
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/publications">Insights</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-label text-sm uppercase tracking-widest text-primary font-bold">Contact</div>
          <ul className="space-y-2">
            <li>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="mailto:admin@larenj.ca">
                admin@larenj.ca
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="tel:+16475551234">
                +1 (647) 555-1234
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="font-label text-sm uppercase tracking-widest text-primary font-bold">Legal</div>
          <ul className="space-y-2">
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/contact">Privacy Policy</Link></li>
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/contact">Terms of Service</Link></li>
            <li><Link className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="/contact">Compliance</Link></li>
            <li className="pt-4 text-on-surface text-xs opacity-60">© 2024 Larenj International Consulting. The Sovereign Archive.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}