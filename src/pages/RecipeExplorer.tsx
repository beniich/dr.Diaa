import { motion } from "motion/react";
import { Filter, Clock, Users, Heart } from "lucide-react";

const recipes = [
  { id: 1, title: "Lamb Couscous Royale", time: "120 min", servings: 6, tag: "Expert", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Kefta & Egg Tagine", time: "45 min", servings: 4, tag: "Classic", image: "https://images.unsplash.com/photo-1590577976322-3d2d6e213068?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "Smoked Zaalouk", time: "30 min", servings: 2, tag: "Vegan", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "Authentic Harira", time: "90 min", servings: 8, tag: "Soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
  { id: 5, title: "Chicken Bastilla", time: "150 min", servings: 6, tag: "Expert", image: "https://images.unsplash.com/photo-1589113103632-f9c644315243?auto=format&fit=crop&q=80&w=600" },
  { id: 6, title: "Maghrebi Mint Tea", time: "15 min", servings: 4, tag: "Drink", image: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&q=80&w=600" },
];

export function RecipeExplorer() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h1 className="text-5xl font-serif text-primary mb-4">Recipe Explorer</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl italic">
              Discover the soul of Morocco through artisan-curated flavors, from the aromatic souks of Marrakech to the coastal breeze of Essaouira.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <FilterButton icon={<Filter className="w-4 h-4"/>} label="Category" />
            <FilterButton icon={<Clock className="w-4 h-4"/>} label="Prep Time" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe, index) => (
            <motion.article 
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-surface-container-high transition-all hover:-translate-y-1 zellige-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={recipe.image} alt={recipe.title} />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all active:scale-90">
                  <Heart className="w-5 h-5" />
                </button>
                {recipe.tag && (
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-white text-[10px] font-bold rounded-full uppercase tracking-wider">{recipe.tag}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {recipe.time}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {recipe.servings}</span>
                </div>
                <h3 className="text-xl font-serif text-primary group-hover:text-tertiary transition-colors">{recipe.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-12 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary-container transition-all active:scale-95">
            Load More Treasures
          </button>
        </div>
      </section>
    </div>
  );
}

function FilterButton({ icon, label }: any) {
  return (
    <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high rounded-full font-bold text-sm hover:bg-surface-container-highest transition-colors">
      {icon}
      {label}
    </button>
  );
}
