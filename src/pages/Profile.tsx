import { User, Mail, Phone, Globe, Bell, Trash2, Camera } from "lucide-react";

export function Profile() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12 space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-serif text-primary mb-2">Mon Profil</h1>
        <p className="text-lg text-on-surface-variant font-sans">Manage your culinary journey and preferences.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Profile Info Card */}
        <section className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container rounded-xl p-8 shadow-sm border border-outline-variant/30 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div className="relative inline-block mb-6 pt-4">
              <div className="w-32 h-32 rounded-full ring-4 ring-primary/20 p-1 mx-auto overflow-hidden shadow-xl">
                <img 
                  className="w-full h-full object-cover rounded-full" 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200" 
                  alt="Avatar" 
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-2xl font-serif text-on-surface mb-1">Ahmed Al-Bakri</h2>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 mb-6 text-xs font-bold">
              Chef de Cuisine
            </div>
            <p className="text-on-surface-variant text-sm italic mb-6">
              "Preserving Moroccan heritage through modern gastronomy since 2012."
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-6">
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Recipes</p>
                <p className="text-xl font-serif text-primary">124</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Artisans</p>
                <p className="text-xl font-serif text-primary">18</p>
              </div>
            </div>
          </div>
        </section>

        {/* Settings Section */}
        <section className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
            <div className="px-8 py-6 border-b border-outline-variant/30 flex items-center justify-between">
              <h3 className="text-xl font-serif text-on-surface">Account Settings</h3>
              <span className="text-[10px] font-bold text-on-surface-variant">LAST UPDATED: 2 DAYS AGO</span>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" value="Ahmed Al-Bakri" />
                <InputField label="Email Address" value="ahmed@modernriad.ma" type="email" />
                <InputField label="Phone Number" value="+212 661-123456" />
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase">Language</label>
                  <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary text-sm outline-none transition-all">
                    <option>English (US)</option>
                    <option>Français (MA)</option>
                    <option>العربية (MA)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
            <div className="px-8 py-6 border-b border-outline-variant/30">
              <h3 className="text-xl font-serif text-on-surface">Notification Preferences</h3>
            </div>
            <div className="p-8 space-y-6">
              <ToggleItem 
                icon={<Mail className="w-5 h-5" />} 
                title="Weekly Meal Plans" 
                desc="Receive curated recipes every Sunday morning." 
                active={true}
              />
              <ToggleItem 
                icon={<Bell className="w-5 h-5" />} 
                title="Market Stock Alerts" 
                desc="Get notified when rare spices are in stock." 
                active={false}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button className="px-8 py-3 rounded-lg font-bold border border-outline text-on-surface-variant hover:bg-surface-variant transition-all">
              Discard
            </button>
            <button className="px-8 py-3 rounded-lg font-bold bg-primary text-white shadow-lg active:scale-95 transition-all">
              Save Profile
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function InputField({ label, value, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-on-surface-variant uppercase">{label}</label>
      <input 
        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary text-sm outline-none transition-all" 
        type={type} 
        defaultValue={value} 
      />
    </div>
  );
}

function ToggleItem({ icon, title, desc, active }: any) {
  return (
    <div className="flex items-center justify-between border-b last:border-none border-outline-variant/30 pb-6 last:pb-0">
      <div className="flex gap-4">
        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <p className="font-bold text-on-surface">{title}</p>
          <p className="text-sm text-on-surface-variant">{desc}</p>
        </div>
      </div>
      <button className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${active ? 'bg-secondary' : 'bg-stone-300'}`}>
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${active ? 'left-7' : 'left-1'}`}></div>
      </button>
    </div>
  );
}
