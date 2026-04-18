import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg transition-all shadow-[0px_24px_48px_rgba(0,0,0,0.4)]">
      <nav className="flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-4">
          <img alt="Larenj International Logo" className="h-10 w-auto" src="/logo.jpeg" />
          <span className="text-2xl font-serif text-primary tracking-tighter font-bold">Larenj International</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link href="/consulting" className="text-primary border-b-2 border-tertiary pb-1 font-bold tracking-tight">Consulting</Link>
          <Link href="/immigration" className="text-on-surface font-medium tracking-tight hover:text-primary transition-all duration-300">Immigration</Link>
          <Link href="/employment" className="text-on-surface font-medium tracking-tight hover:text-primary transition-all duration-300">Employment</Link>
          <Link href="/insights" className="text-on-surface font-medium tracking-tight hover:text-primary transition-all duration-300">Insights</Link>
          <Link href="/about" className="text-on-surface font-medium tracking-tight hover:text-primary transition-all duration-300">About</Link>
        </div>
        <button className="bg-gradient-to-r from-primary to-primary-container px-8 py-2.5 rounded-md text-on-primary font-bold tracking-wide scale-95 active:scale-100 transition-transform">
          Client Portal
        </button>
      </nav>
    </header>
  );
}