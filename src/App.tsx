/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu as MenuIcon, 
  X,
  Star,
  Quote,
  ArrowRight,
  ShoppingBag,
  CalendarDays
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Constants & Types ---

const COLORS = {
  bg: 'bg-[#0B0D11]',
  surface: 'bg-[#1c1f26]',
  accent: 'text-amber-500',
  accentBg: 'bg-amber-600',
  ink: 'text-slate-100',
  muted: 'text-slate-400',
  border: 'border-white/10'
};

const MENU_CATEGORIES = [
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'mains', label: 'Main Course' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

const SIGNATURE_DISHES = [
  {
    name: "Lucknowi Dum Biryani",
    price: "₹645",
    description: "Long-grain basmati rice layered with tender lamb and aromatic spices, slow-cooked in a sealed clay pot.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    category: "mains"
  },
  {
    name: "Old Delhi Butter Chicken",
    price: "₹525",
    description: "Charcoal-grilled chicken morsels simmered in a velvety tomato and cashew gravy with a touch of fenugreek.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    category: "mains"
  },
  {
    name: "Tandoori Malai Broccoli",
    price: "₹395",
    description: "Fresh broccoli florets marinated in cardamom-scented cream cheese and grilled in a clay oven.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    category: "appetizers"
  },
  {
    name: "Saffron Pistachio Kulfi",
    price: "₹285",
    description: "Traditional frozen Indian dessert infused with pure Kashmiri saffron and roasted pistachios.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    category: "desserts"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0B0D11]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center text-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-serif font-bold text-2xl text-white">Z</div>
          <span className="text-2xl font-serif font-medium tracking-tight">Zaf<span className="text-amber-500">fran</span></span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center text-sm font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a>
          <a href="#experience" className="hover:text-amber-500 transition-colors">Experience</a>
          <a href="#reservation" className="hover:text-amber-500 transition-colors">Reservation</a>
          <button className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-500 transition-all shadow-lg shadow-amber-900/20">
            Order Online
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col p-6 gap-4 font-serif uppercase tracking-widest text-center"
        >
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#reservation" onClick={() => setIsOpen(false)}>Reservation</a>
          <button className="bg-[#E6B17E] text-black px-6 py-3 rounded-full font-bold">Order Online</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <motion.div style={{ y }} className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" 
                    className="w-full h-full object-cover"
                    alt="Restaurant Interior"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </motion.div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-amber-500 text-xs md:text-sm font-medium uppercase tracking-[0.3em] mb-4 block">Experience Authentic India</span>
                    <h1 className="text-5xl md:text-8xl font-serif text-slate-100 leading-tight mb-8">
                        The Art of <br />
                        <span className="italic text-slate-400">Modern Spice</span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="group bg-white text-black px-10 py-4 rounded-sm font-bold flex items-center gap-2 hover:bg-amber-50 transition-all transform hover:scale-105">
                            BOOK YOUR TABLE <CalendarDays className="w-4 h-4" />
                        </button>
                        <button className="group border border-white/20 text-white px-10 py-4 rounded-sm font-bold flex items-center gap-2 hover:border-white/40 transition-all">
                            VIEW FULL MENU <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-[#E6B17E] to-transparent" />
            </div>
        </div>
    );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('mains');

  return (
    <section id="menu" className="py-24 bg-[#0B0D11]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-amber-500 font-medium uppercase tracking-[0.3em] text-sm mb-4 block">Gastronomy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-100">Signature Flavors</h2>
          </div>
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-2">
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-widest font-bold pb-2 transition-all ${activeCategory === cat.id ? 'text-amber-500 border-b-2 border-amber-500' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SIGNATURE_DISHES.map((dish, i) => (
            <motion.div
              layout
              key={dish.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: dish.category === activeCategory || activeCategory === 'all' ? 1 : 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]">
                    <h4 className="text-amber-200 font-serif text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{dish.name}</h4>
                    <span className="text-amber-500 font-bold tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{dish.price}</span>
                </div>
                {/* Standard Price Tag (Hidden on hover) */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-amber-500 font-bold">{dish.price}</span>
                </div>
              </div>
              <h3 className="text-xl font-serif text-slate-100 mb-2 group-hover:text-amber-500 transition-colors">{dish.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{dish.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="text-amber-500 font-bold tracking-[0.2em] uppercase flex items-center gap-3 mx-auto group">
                VIEW FULL MENU <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
    return (
        <section id="experience" className="py-24 bg-[#0B0D11] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/5 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-amber-500/10" />
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <motion.img 
                                whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80" 
                                className="rounded-2xl w-full h-64 object-cover mt-12 border border-white/10"
                                referrerPolicy="no-referrer"
                            />
                            <motion.img 
                                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                                src="https://images.unsplash.com/photo-1544333346-64e4fe158818?auto=format&fit=crop&w=600&q=80" 
                                className="rounded-2xl w-full h-64 object-cover border border-white/10"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                    <div>
                        <span className="text-amber-500 font-medium uppercase tracking-[0.3em] text-sm mb-4 block">The Experience</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-slate-100 mb-8 leading-tight">Authenticity Meets <br /> Modern Luxury</h2>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                            At Zaffran, we believe that dining is not just about food; it's about the celebration of culture, heritage, and the finest ingredients that India has to offer.
                        </p>
                        <ul className="space-y-6 mb-12">
                            {[
                                { title: "Heirloom Recipes", desc: "Passed down through generations of Khansamas.", icon: "🍛" },
                                { title: "Artisanal Spices", desc: "Small-batch spices sourced directly from Kerala.", icon: "🌿" },
                                { title: "Modern Techniques", desc: "Traditional flavors prepared with precision.", icon: "✨" }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 p-4 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl w-fit">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-xl flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-100 font-bold mb-0.5">{item.title}</h4>
                                        <p className="text-slate-500 text-xs uppercase tracking-wider">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-bold rounded-sm transition-all uppercase tracking-widest text-xs">
                            LEARN OUR STORY
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <Quote className="w-16 h-16 text-[#E6B17E]/20 mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F0] italic leading-relaxed mb-12">
                        "The best North Indian food I've had in years. The Dal Makhani is legendary, and the service is truly world-class. A gem for any food lover."
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-px bg-[#E6B17E]/40" />
                        <span className="text-[#E6B17E] font-bold uppercase tracking-[0.3em] text-sm">Aditya Chopra, Food Critic</span>
                        <div className="w-12 h-px bg-[#E6B17E]/40" />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 p-10 opacity-5">
                <span className="text-[15rem] font-serif font-black leading-none italic uppercase">Zaffran</span>
            </div>
        </section>
    );
};

const ReservationSection = () => {
    return (
        <section id="reservation" className="py-24 bg-[#0B0D11]">
            <div className="container mx-auto px-6">
                <div className="bg-slate-900/40 p-8 md:p-16 rounded-[2rem] border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-amber-500 font-medium uppercase tracking-[0.3em] text-sm mb-4 block">Booking</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-slate-100 mb-8 leading-tight">Secure Your <br /> Table Today</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Join us for an unforgettable evening. Whether it's a romantic dinner, a corporate lunch, or a family celebration, we ensure every detail is perfect.
                        </p>
                        <div className="flex items-center gap-6 text-slate-400 mb-4">
                           <div className="flex items-center gap-2 font-mono"><Phone className="w-4 h-4 text-amber-500" /> +91 98765 43210</div>
                        </div>
                        <div className="flex items-center gap-6 text-slate-400">
                           <div className="flex items-center gap-2 font-mono"><MapPin className="w-4 h-4 text-amber-500" /> New Delhi, India</div>
                        </div>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Full Name" className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors" />
                            <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="date" className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors" />
                            <select className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-4 text-slate-400 focus:border-amber-500 outline-none transition-colors">
                                <option>Number of People</option>
                                <option>2 Persons</option>
                                <option>4 Persons</option>
                                <option>6+ Persons</option>
                            </select>
                        </div>
                        <textarea placeholder="Special Requests (Optional)" rows={3} className="w-full bg-black/40 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-amber-500 outline-none transition-colors"></textarea>
                        <button className="w-full bg-amber-600 text-white font-bold py-5 rounded-lg hover:bg-amber-500 transition-all uppercase tracking-widest text-sm shadow-lg shadow-amber-900/20">
                            Confirm Reservation
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-3xl font-serif tracking-widest text-[#E6B17E] mb-8 block">ZAFFRAN</span>
                        <p className="text-white/40 leading-relaxed text-sm">
                            Defining high-end Indian dining through generational wisdom and modern craftsmanship.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
                        <ul className="space-y-4 text-white/50 text-sm">
                            <li><a href="#" className="hover:text-[#E6B17E]">Home</a></li>
                            <li><a href="#menu" className="hover:text-[#E6B17E]">Menu</a></li>
                            <li><a href="#experience" className="hover:text-[#E6B17E]">Experience</a></li>
                            <li><a href="#reservation" className="hover:text-[#E6B17E]">Reservation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Opening Hours</h4>
                        <ul className="space-y-4 text-white/50 text-sm">
                            <li className="flex justify-between"><span>Mon - Thu:</span> <span>12PM - 11PM</span></li>
                            <li className="flex justify-between"><span>Fri - Sun:</span> <span>12PM - 12AM</span></li>
                            <li className="text-[#E6B17E] text-xs">Closed on National Holidays</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
                        <p className="text-white/40 text-xs mb-6 uppercase tracking-wider leading-relaxed">Join the club for exclusive offers and gourmet news.</p>
                        <div className="flex">
                            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 outline-none focus:border-[#E6B17E]" />
                            <button className="bg-[#E6B17E] text-black px-4 rounded-r-lg hover:bg-[#D4A06D] transition-colors"><ChevronRight /></button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 gap-6">
                    <p className="text-white/20 text-xs font-mono">© 2026 ZAFFRAN HOSPITALITY GROUP. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-6">
                        <Instagram className="w-5 h-5 text-white/40 hover:text-[#E6B17E] cursor-pointer transition-colors" />
                        <Facebook className="w-5 h-5 text-white/40 hover:text-[#E6B17E] cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 text-white/40 hover:text-[#E6B17E] cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={`min-h-screen ${COLORS.bg} selection:bg-[#E6B17E] selection:text-black font-sans`}>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#E6B17E] z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Hero />
      <MenuSection />
      <FeatureSection />
      <Testimonials />
      <ReservationSection />
      <Footer />

      {/* Quick Access Floating Action */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-10 right-10 z-40 hidden md:block"
      >
        <button className="bg-amber-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-amber-900/40 hover:scale-110 transition-transform group">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute right-full mr-4 bg-slate-900 text-slate-100 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Order Delivery</span>
        </button>
      </motion.div>
    </div>
  );
}
