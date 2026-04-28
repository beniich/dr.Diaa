import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

const artisans = [
  { id: 1, name: "Abdeljalil Laroussi", role: "Master of Spices", desc: "A third-generation merchant from Marrakech specializing in Ras el Hanout.", recipes: 24, image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Fatima Zahra", role: "Tagine Specialist", desc: "Famous in Fez for her slow-cooked lamb and prune tagine.", recipes: 18, image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Idris Mansouri", role: "Patisserie Artisan", desc: "He blends rose water and almond paste to create intricate gazelle horns.", recipes: 32, image: "https://images.unsplash.com/photo-1463123081488-789f99829c48?auto=format&fit=crop&q=80&w=400" },
];

export function Artisans() {
  return (
    <div className="px-8 py-12 max-w-7xl mx-auto space-y-16">
      <header className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-xs">The Guardians of Heritage</span>
        <h1 className="text-5xl font-serif text-on-surface mb-6">Artisan Profiles</h1>
        <div className="h-px w-24 bg-accent mx-auto mb-6"></div>
        <p className="text-lg text-on-surface-variant italic">
          Meet the hands and hearts keeping the ancient culinary secrets of Morocco alive.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {artisans.map(artisan => (
          <motion.div 
            key={artisan.id}
            whileHover={{ y: -8 }}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col group transition-all duration-300"
          >
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={artisan.image} alt={artisan.name} />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {artisan.role}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-serif text-on-surface mb-2">{artisan.name}</h3>
              <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">{artisan.desc}</p>
              <div className="mt-auto pt-6 border-t border-outline-variant/20 flex justify-between items-center">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{artisan.recipes} Heritage Recipes</span>
                <button className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                  View <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-24 bg-primary text-white rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" alt="Chef Omar" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-accent font-bold tracking-widest uppercase mb-4 block text-xs">Artisan of the Month</span>
            <h2 className="text-4xl font-serif mb-6">Chef Omar Khattabi</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed font-sans">
              Bridging the gap between ancient Berber techniques and modern gastronomy, Omar spent the last decade documenting vanishing recipes from the High Atlas.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <Star className="w-4 h-4 text-accent fill-accent" /> Atlas Foraging
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <Star className="w-4 h-4 text-accent fill-accent" /> Clay Cooking
              </span>
            </div>
            <button className="bg-accent text-primary px-8 py-4 rounded-xl font-bold self-start hover:bg-accent/90 transition-all shadow-lg active:scale-95">
              Explore Masterclass
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
