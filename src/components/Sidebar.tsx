import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  CalendarDays, 
  ShoppingBasket, 
  Sparkles, 
  Heart,
  PlusCircle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BookOpen, label: "Recipes", path: "/recipes" },
  { icon: CalendarDays, label: "Meal Planner", path: "/planner" },
  { icon: ShoppingBasket, label: "Market", path: "/market" },
  { icon: Sparkles, label: "Artisans", path: "/artisans" },
  { icon: Heart, label: "Favorites", path: "/favorites" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-40 bg-[#006400] border-r border-accent/20 shadow-2xl py-8">
      <div className="px-6 mb-12">
        <h1 className="text-white font-bold text-2xl font-serif tracking-tight">The Modern Riad</h1>
        <p className="text-accent text-[10px] uppercase tracking-widest mt-1">Marhaba, Chef de Cuisine</p>
      </div>

      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/40 overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200" 
            alt="Chef" 
          />
        </div>
        <div>
          <p className="text-white text-sm font-bold">Marhaba</p>
          <p className="text-white/60 text-xs italic">Chef de Cuisine</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "py-3 px-6 flex items-center gap-4 transition-all duration-200 border-r-4",
                isActive 
                  ? "bg-accent/10 text-accent border-accent" 
                  : "text-white/80 hover:text-white hover:bg-white/5 border-transparent"
              )}
            >
              <item.icon className="w-5 h-5 text-accent" />
              <span className="font-serif text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 mt-auto">
        <button className="w-full bg-accent text-[#006400] font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
          <PlusCircle className="w-5 h-5" />
          <span>New Recipe</span>
        </button>
      </div>
    </aside>
  );
}
