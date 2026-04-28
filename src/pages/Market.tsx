import { ShoppingCart, Search, Plus, Truck, Printer } from "lucide-react";

export function Market() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-4xl font-serif text-primary mb-2">Market Souk</h3>
            <p className="text-on-surface-variant italic text-lg">Hand-selected ingredients from the heart of the Medina</p>
          </div>
        </div>

        <div className="asymmetric-grid grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-7 group relative overflow-hidden rounded-xl aspect-[16/9] shadow-lg border border-outline-variant bg-surface-container-low transition-all hover:shadow-xl">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=800" alt="Spice Bazaar" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-4 inline-block tracking-widest">Featured Merchant</span>
              <h4 className="text-white text-3xl font-serif mb-2">Abdeljalil's Spice Bazaar</h4>
              <p className="text-white/80 max-w-md text-sm italic font-serif">Authentic Ras el Hanout, Saffron filaments, and hand-ground cumin from the High Atlas.</p>
              <button className="mt-4 flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-full font-bold text-xs hover:bg-accent hover:text-white transition-colors">
                <ShoppingCart className="w-4 h-4" />
                Explore Bazaar
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-6">
            <div className="bg-surface-container-highest rounded-xl p-6 relative overflow-hidden border border-outline-variant group">
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h4 className="text-xl font-serif text-primary">Fresh Garden</h4>
                  <p className="text-sm text-on-surface-variant">Organic mint, citrus, and herbs</p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg">
                  <Plus className="text-secondary w-6 h-6" />
                </div>
              </div>
              <div className="mt-6 flex gap-2 relative z-10">
                <span className="px-3 py-1 bg-white/50 rounded-lg text-[10px] font-bold">Spearmint</span>
                <span className="px-3 py-1 bg-white/50 rounded-lg text-[10px] font-bold">Meyer Lemons</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full zellige-border h-1 opacity-50"></div>
            </div>
            <div className="bg-primary text-white rounded-xl p-6 relative overflow-hidden border border-primary-container group">
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h4 className="text-xl font-serif">Butcher's Choice</h4>
                  <p className="text-sm text-primary-fixed">Premium Halal lamb & slow-aged beef</p>
                </div>
              </div>
              <div className="mt-6 flex gap-2 relative z-10">
                <button className="px-4 py-2 bg-accent text-primary rounded-lg text-xs font-bold transition-all hover:scale-105">View Cuts</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 space-y-12">
            <div className="asymmetric-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <MarketItem title="Fine Couscous" price="$4.50" weight="500g" image="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=400" />
              <MarketItem title="Argan Oil" price="$22.00" weight="250ml" image="https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&q=80&w=400" />
              <MarketItem title="Preserved Lemons" price="$8.25" weight="Jar" image="https://images.unsplash.com/photo-1590577976322-3d2d6e213068?auto=format&fit=crop&q=80&w=400" />
              <MarketItem title="Kalamata Mix" price="$6.90" weight="300g" image="https://images.unsplash.com/photo-1522060290453-3974fb60f8ea?auto=format&fit=crop&q=80&w=400" />
            </div>
          </div>

          {/* Shopping Cart Sidebar */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="bg-[#F9F5F0] rounded-2xl p-8 shadow-xl border-t-8 border-double border-accent sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif text-primary">Grocery List</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-bold">4 Items</span>
              </div>

              <ul className="space-y-4 mb-8">
                <CartItem label="Lamb Shank (2.5kg)" price="$34.00" checked />
                <CartItem label="Saffron Filaments" price="$18.50" />
                <CartItem label="Fresh Cilantro" price="$2.00" />
                <CartItem label="Harissa Paste" price="$5.75" />
              </ul>

              <div className="border-t border-primary/10 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold">Estimated Total</span>
                  <span className="font-bold text-primary text-xl">$60.25</span>
                </div>
                <p className="text-[10px] text-on-surface-variant italic">Plus applicable taxes at checkout</p>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:bg-primary/90 transition-all active:scale-95">
                  <Truck className="w-5 h-5" />
                  Order Delivery
                </button>
                <button className="w-full border border-primary text-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
                  <Printer className="w-5 h-5" />
                  Print List
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function MarketItem({ title, price, weight, image }: any) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-outline-variant flex gap-4 hover:shadow-md transition-all group">
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h5 className="text-lg font-serif text-on-surface">{title}</h5>
            <span className="text-secondary font-bold">{price}</span>
          </div>
          <p className="text-xs text-on-surface-variant">{weight}</p>
        </div>
        <button className="self-end bg-surface-container hover:bg-secondary hover:text-white p-2 rounded-full transition-all active:scale-90">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function CartItem({ label, price, checked = false }: any) {
  return (
    <li className="flex items-center justify-between group">
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center cursor-pointer ${checked ? 'border-secondary' : 'border-outline'}`}>
          {checked && <div className="w-2.5 h-2.5 bg-secondary"></div>}
        </div>
        <span className={`text-sm ${checked ? 'text-on-surface' : 'text-on-surface/60'}`}>{label}</span>
      </div>
      <span className="text-xs text-on-surface-variant">{price}</span>
    </li>
  );
}
