import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full py-12 border-t-8 border-double border-accent bg-[#F9F5F0] border-t border-primary/10">
      <div className="flex flex-col items-center gap-6 w-full text-center max-w-screen-xl mx-auto px-8">
        <div className="text-xl font-bold text-primary font-serif tracking-tight">The Modern Riad</div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <Link to="#" className="text-stone-500 hover:text-secondary transition-colors font-serif text-sm italic">About Our Heritage</Link>
          <Link to="#" className="text-stone-500 hover:text-secondary transition-colors font-serif text-sm italic">Artisan Partners</Link>
          <Link to="#" className="text-stone-500 hover:text-secondary transition-colors font-serif text-sm italic">Privacy Policy</Link>
          <Link to="#" className="text-stone-500 hover:text-secondary transition-colors font-serif text-sm italic">Contact Us</Link>
        </nav>
        <div className="text-primary font-serif text-sm italic">© 2024 The Modern Riad. Crafted with heritage.</div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="md:ml-64 flex flex-col min-h-screen">
        <TopBar />
        <div className="flex-1 zellige-pattern">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
