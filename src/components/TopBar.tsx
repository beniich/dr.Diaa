import { Search, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <header className="bg-[#F9F5F0] sticky top-0 z-30 border-b border-primary/10 shadow-[0_4px_20px_rgba(165,42,42,0.08)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Menu className="md:hidden text-primary cursor-pointer" />
          <nav className="hidden md:flex items-center gap-8 font-serif text-base antialiased">
            <Link to="/recipes" className="text-stone-600 hover:text-primary transition-colors">Recipes</Link>
            <Link to="/planner" className="text-stone-600 hover:text-primary transition-colors">Meal Planning</Link>
            <Link to="/market" className="text-stone-600 hover:text-primary transition-colors">Market Staples</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden sm:block">
            <input 
              className="bg-surface-container pl-10 pr-4 py-2 rounded-full border-none focus:ring-2 focus:ring-secondary w-64 text-sm" 
              placeholder="Search heritage..." 
              type="text"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
          </div>
          <Link to="/profile" className="p-2 hover:bg-primary/5 rounded-lg transition-all active:scale-95 text-primary">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
