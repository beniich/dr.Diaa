import { ChevronLeft, ChevronRight, Plus, ReceiptText } from "lucide-react";
import { motion } from "motion/react";

export function MealPlanner() {
  const days = [
    { name: "Mon", date: 12, meals: ["Zaatar Eggs", "Chickpea Stew"] },
    { name: "Tue", date: 13, meals: [null, "Leftover Stew", "Fish Chermoula"] },
    { name: "Wed", date: 14, meals: ["Shakshuka", null, null] },
    { name: "Thu", date: 15, meals: [] },
    { name: "Fri", date: 16, meals: [null, null, "Couscous Friday"] },
    { name: "Sat", date: 17, meals: [] },
    { name: "Sun", date: 18, meals: [null, "Roast Chicken"] },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-8 w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Planner Grid */}
        <section className="flex-grow">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-serif text-on-surface">Weekly Meal Plan</h1>
              <p className="text-on-surface-variant">Planning for June 12th — June 18th</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {days.map((day) => (
              <div key={day.date} className="bg-white rounded-xl border border-primary/5 overflow-hidden flex flex-col h-full shadow-sm">
                <div className="bg-surface-container-low p-3 text-center border-b border-primary/10">
                  <span className="text-primary block text-xs uppercase font-bold tracking-widest">{day.name}</span>
                  <span className="text-xl font-serif">{day.date}</span>
                </div>
                <div className="p-2 space-y-3 flex-grow zellige-pattern-mini min-h-[400px]">
                  {["Breakfast", "Lunch", "Dinner"].map((type, idx) => (
                    <div key={type} className="space-y-1">
                      <span className="text-[10px] font-bold text-stone-400 uppercase ml-1">{type}</span>
                      {day.meals[idx] ? (
                        <div className="bg-surface-container-lowest rounded-lg p-2 border border-outline-variant text-[11px] font-medium cursor-pointer hover:border-primary transition-colors">
                          {day.meals[idx]}
                        </div>
                      ) : (
                        <div className="h-12 border-2 border-dashed border-stone-100 rounded-lg flex items-center justify-center text-stone-200 hover:border-primary/20 transition-all cursor-pointer">
                          <Plus className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar Controls */}
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-8">
          <div className="bg-primary text-white rounded-xl p-8 shadow-xl relative overflow-hidden">
            <h3 className="text-2xl font-serif mb-2">Ready to cook?</h3>
            <p className="text-sm mb-6 opacity-90">Generate your shopping list based on your weekly selection.</p>
            <button className="w-full bg-white text-primary font-bold py-4 rounded-lg shadow-md active:scale-95 transition-all flex items-center justify-center gap-2">
              <ReceiptText className="w-5 h-5" />
              Generate List
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-primary/10">
            <h2 className="text-xl font-serif text-primary mb-6">Suggested Favorites</h2>
            <div className="space-y-4">
              <SuggestedItem title="Honey Baghrir" time="30 mins" image="https://images.unsplash.com/photo-1599021419847-d8a7a6ad599f?auto=format&fit=crop&q=80&w=200" />
              <SuggestedItem title="Zaalouk Salad" time="20 mins" image="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=200" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SuggestedItem({ title, time, image }: any) {
  return (
    <div className="group cursor-grab bg-surface-bright rounded-lg p-3 border border-outline-variant flex gap-3 hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <div>
        <h3 className="text-sm font-bold text-on-surface">{title}</h3>
        <p className="text-[10px] text-on-surface-variant italic">{time}</p>
      </div>
    </div>
  );
}
