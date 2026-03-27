import { BookOpen, Calendar, DollarSign, Heart, Home, Menu, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from 'motion/react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Trang chủ', href: isHomePage ? '#home' : '/', icon: Home },
    { name: 'Văn hóa', href: '/culture', icon: BookOpen },
    { name: 'Sự kiện', href: '/event', icon: Calendar },
    { name: 'Tài trợ', href: '/sponsors', icon: Users },
    { name: 'Tài chính', href: '/finance', icon: DollarSign },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
             <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-orange-200"
            >
              <img 
                src="https://res.cloudinary.com/dhl2sbjo5/image/upload/v1774521134/logo-app_ielf9y.jpg" 
                alt="Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <span className="text-xl font-serif font-bold tracking-tight text-stone-900 hidden sm:block group-hover:text-orange-600 transition-colors">
              Tết Mông Xuống Phố
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <Button 
                key={idx} 
                variant="ghost" 
                className={`text-stone-600 hover:text-orange-600 hover:bg-orange-50 rounded-full px-4 ${location.pathname === item.href ? 'text-orange-600 bg-orange-50' : ''}`}
              >
                {item.href.startsWith('/') && !item.href.includes('#') ? (
                  <Link to={item.href}>{item.name}</Link>
                ) : (
                  <a href={item.href}>{item.name}</a>
                )}
              </Button>
            ))}
            <div className="w-px h-6 bg-stone-200 mx-4" />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 shadow-lg shadow-orange-200 transition-all hover:scale-105 active:scale-95">
              <a href="/#finance">
                <Heart className="mr-2 h-4 w-4 fill-current" /> Quyên góp
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className="text-stone-600">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-stone-100">
                <SheetHeader className="text-left border-b border-stone-100 pb-6 mb-6">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">M</div>
                    <span className="font-serif font-bold text-stone-900">Tết Mông Xuống Phố</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, idx) => (
                    <Button 
                      key={idx} 
                      variant="ghost" 
                      className={`justify-start h-14 text-lg font-medium rounded-xl ${location.pathname === item.href ? 'text-orange-600 bg-orange-50' : 'text-stone-600'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.href.startsWith('/') && !item.href.includes('#') ? (
                        <Link to={item.href} className="flex items-center gap-4">
                          <item.icon size={20} /> {item.name}
                        </Link>
                      ) : (
                        <a href={item.href} className="flex items-center gap-4">
                          <item.icon size={20} /> {item.name}
                        </a>
                      )}
                    </Button>
                  ))}
                  <div className="pt-6">
                    <Button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-lg font-bold shadow-lg shadow-orange-200">
                      <a href="/#finance" onClick={() => setIsOpen(false)}>
                        <Heart className="mr-2 h-5 w-5 fill-current" /> Quyên góp ngay
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;