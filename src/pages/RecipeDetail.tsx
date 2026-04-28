import { Clock, Users, Star, Heart, Share2, Timer } from "lucide-react";
import { motion } from "motion/react";

export function RecipeDetail() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=1400" 
          alt="Lamb Tagine" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-12 w-full flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-white max-w-2xl">
            <nav className="flex gap-2 text-xs uppercase tracking-widest mb-4 opacity-80 font-bold">
              <span>Main Course</span>
              <span>•</span>
              <span>Heritage</span>
            </nav>
            <h1 className="text-6xl font-serif text-white mb-6 leading-tight">Lamb Tagine with Apricots</h1>
            <div className="flex gap-6 items-center text-sm">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> 2h 30m</span>
              <span className="flex items-center gap-2"><Users className="w-5 h-5" /> 4 Servings</span>
              <span className="flex items-center gap-2"><Star className="w-5 h-5 fill-accent text-accent" /> Expert</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all font-bold">
              <Heart className="w-5 h-5 fill-white" />
              Save to Favorites
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <div className="px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        {/* Left Column: Content */}
        <div className="lg:col-span-8 space-y-16">
          <section className="prose prose-stone lg:prose-xl max-w-none">
            <h2 className="text-4xl font-serif text-primary mb-6">A Legacy in Clay</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed italic font-serif">
              "The tagine is not just a dish; it is a ritual of patience. In the Atlas Mountains, this recipe has been whispered between generations, balancing the gamey richness of grass-fed lamb with the honeyed sweetness of sun-dried apricots."
            </p>
            <div className="s-curve-divider my-8"></div>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-8 flex justify-between items-end">
              Ingredients
              <span className="text-secondary text-sm font-bold">12 items needed</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <IngredientItem label="2 lbs Lamb shoulder, cut into 2-inch chunks" />
              <IngredientItem label="1 cup Dried apricots, halved" />
              <IngredientItem label="2 large Red onions, finely diced" />
              <IngredientItem label="3 cloves Garlic, minced" />
              <IngredientItem label="1 tsp Ground Ginger & 1 tsp Cumin" />
              <IngredientItem label="1 Cinnamon stick" />
              <IngredientItem label="Pinch of Saffron threads" />
              <IngredientItem label="1/2 cup Toasted slivered almonds" />
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-serif">Method of Craft</h2>
            <div className="relative pl-12 border-l-2 border-accent/30 space-y-12">
              <MethodStep step={1} title="The Searing" desc="Heat olive oil in the base of the tagine. Brown the lamb chunks in batches until a deep crust forms. Remove and set aside." timer="8m" />
              <MethodStep step={2} title="Aromatic Base" desc="Add onions and cook until translucent. Stir in garlic, ginger, cumin, and saffron. Let the spices bloom in the heat for 2 minutes." />
              <MethodStep step={3} title="Slow Braise" desc="Return lamb to the pot. Add cinnamon and cover with water. Simmer covered for 90 minutes." timer="90m" />
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-[#F9F5F0] rounded-2xl overflow-hidden border border-outline-variant/30 shadow-lg">
            <div className="h-2 w-full bg-primary-container"></div>
            <div className="p-8">
              <h3 className="text-xl font-serif mb-6">Nutrition Profile</h3>
              <div className="space-y-4">
                <NutritionRow label="Calories" value="640 kcal" />
                <NutritionRow label="Protein" value="42g" />
                <NutritionRow label="Carbs" value="28g" />
                <NutritionRow label="Fat" value="38g" />
              </div>
              <p className="mt-6 text-[10px] text-on-surface-variant italic">*Values are per serving and approximate.</p>
            </div>
          </div>

          <div className="bg-surface-container rounded-2xl p-8 border border-accent/20 shadow-sm zellige-pattern opacity-90 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Star className="w-5 h-5 fill-current" />
              <h3 className="text-xl font-serif">Artisan Tip</h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed text-sm italic font-serif">
              "For the most authentic flavor, use a clay tagine on a diffuser. The conical lid allows steam to condense and drip back, creating an incredibly tender result."
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function IngredientItem({ label }: any) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group cursor-pointer border border-transparent hover:border-secondary/20">
      <div className="w-6 h-6 rounded border-2 border-secondary flex items-center justify-center group-hover:bg-secondary/10 transition-all">
        <div className="w-3 h-3 bg-secondary opacity-0 group-hover:opacity-20"></div>
      </div>
      <span className="text-sm font-sans">{label}</span>
    </div>
  );
}

function MethodStep({ step, title, desc, timer }: any) {
  return (
    <div className="relative">
      <span className="absolute -left-[61px] top-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
        {step}
      </span>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 hover:border-primary/20 transition-all">
        <h3 className="text-xl font-serif mb-4 text-primary">{title}</h3>
        <p className="text-on-surface-variant mb-6 leading-relaxed text-sm">{desc}</p>
        {timer && (
          <button className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-bold text-xs uppercase tracking-widest">
            <Timer className="w-4 h-4" />
            Start {timer} Timer
          </button>
        )}
      </div>
    </div>
  );
}

function NutritionRow({ label, value }: any) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-outline-variant/20 last:border-none">
      <span className="text-on-surface-variant text-sm">{label}</span>
      <span className="font-bold text-on-surface">{value}</span>
    </div>
  );
}
