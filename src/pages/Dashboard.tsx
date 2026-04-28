import { motion } from "motion/react";
import { ArrowRight, Clock, Users, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="px-8 py-8 max-w-screen-2xl mx-auto w-full space-y-12">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-surface-container-highest min-h-[480px] flex items-center shadow-xl group"
      >
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=1200" 
            alt="Lamb Tagine" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-12 md:px-20 max-w-2xl text-white">
          <span className="bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">Dish of the Day</span>
          <h2 className="text-5xl font-serif text-white mb-6 leading-tight">Saffron-Infused Lamb Tagine with Apricots</h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed font-sans">
            Experience the soul of Marrakech in your kitchen. A slow-cooked masterpiece balancing savory spices with sun-dried sweetness.
          </p>
          <Link to="/recipe/lamb-tagine">
            <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg active:scale-95">
              SEE RECIPE
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Weekly Highlights */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-serif text-on-surface">Your Weekly Highlights</h3>
            <p className="text-on-surface-variant italic">Handpicked recipes from your current meal plan</p>
          </div>
          <Link to="/planner" className="text-accent font-bold flex items-center gap-2 hover:underline">
            VIEW FULL PLAN
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HighlightCard 
            title="Hearty Spiced Harira Soup"
            category="Monday Dinner"
            time="45m"
            servings="4"
            image="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400"
          />
          <HighlightCard 
            title="Chicken & Almond Bastilla"
            category="Wednesday Lunch"
            time="1h 20m"
            servings="6"
            image="https://images.unsplash.com/photo-1589113103632-f9c644315243?auto=format&fit=crop&q=80&w=400"
          />
          <HighlightCard 
            title="Garden Vegetable Couscous"
            category="Friday Feast"
            time="35m"
            servings="4"
            image="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="bg-surface-container rounded-3xl p-10 relative overflow-hidden mb-12">
        <div className="zellige-pattern absolute inset-0 z-0 opacity-10 pointer-events-none"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-serif text-on-surface mb-8">Discover Heritage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <CategoryCard title="Quick Meals" desc="Under 20 minutes" image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" />
            <CategoryCard title="Traditional Tagines" desc="Slow-cooked classics" image="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=400" />
            <CategoryCard title="Vegetarian Delights" desc="Plant-based heritage" image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=400" />
          </div>
        </div>
      </section>
    </div>
  );
}

function HighlightCard({ title, category, time, servings, image }: any) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-container"
    >
      <div className="h-48 overflow-hidden relative">
        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={image} alt={title} />
        <div className="zellige-border absolute top-0 left-0 w-full h-1"></div>
      </div>
      <div className="p-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">{category}</span>
        <h4 className="text-xl font-serif text-on-surface mt-2 group-hover:text-primary transition-colors">{title}</h4>
        <div className="flex items-center gap-4 mt-4 text-on-surface-variant text-sm">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {time}</span>
          <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {servings} ppl</span>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryCard({ title, desc, image }: any) {
  return (
    <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} alt={title} />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 hover:bg-black/20 transition-all">
        <h5 className="text-white text-xl font-serif">{title}</h5>
        <p className="text-white/80 text-sm">{desc}</p>
      </div>
    </div>
  );
}
