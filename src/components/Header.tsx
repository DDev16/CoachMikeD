"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Dumbbell } from 'lucide-react';
import Link from 'next/link';

interface MenuItem {
    label: string;
    submenu: string[];
}

interface NavMenuItemProps {
    item: MenuItem;
}

const menuItems: MenuItem[] = [
    { label: 'Programs', submenu: ['Personal Training', 'Group Training', 'Online Coaching'] },
    { label: 'About', submenu: ['Philosophy', 'Results', 'Testimonials'] },
    { label: 'Resources', submenu: ['Nutrition', 'Training Tips', 'Blog'] },
    { label: 'Contact', submenu: [] }
];

const NavMenuItem: React.FC<NavMenuItemProps> = ({ item }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                type="button"
                className="flex items-center px-4 py-2 text-slate-300 hover:text-white transition-colors duration-300"
            >
                {item.label}
                {item.submenu.length > 0 && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
                )}
            </button>

            {item.submenu.length > 0 && isHovered && (
                <div className="absolute left-0 mt-2 w-48 bg-black border border-slate-300/10 py-2 z-50 backdrop-blur-sm">
                    {item.submenu.map((subItem, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-300/10 hover:text-white transition-colors duration-300"
                        >
                            {subItem}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-slate-300/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Dumbbell className="w-8 h-8 text-slate-300" />
                        <span className="text-2xl font-bold text-white tracking-wider">
                            COACH MIKED<span className="text-slate-300">.SHREDS</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4">
                        {menuItems.map((item, index) => (
                            <NavMenuItem key={index} item={item} />
                        ))}
                        <button
                            type="button"
                            className="ml-4 px-6 py-2 bg-white text-black font-medium hover:bg-slate-300 transition-colors duration-300"
                        >
                            Start Now
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-300" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-300" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-slate-300/10">
                        {menuItems.map((item, index) => (
                            <div key={index} className="py-2">
                                <button
                                    type="button"
                                    className="flex items-center w-full px-4 py-2 text-slate-300"
                                >
                                    {item.label}
                                    {item.submenu.length > 0 && <ChevronDown className="ml-1 w-4 h-4" />}
                                </button>
                                {item.submenu.length > 0 && (
                                    <div className="pl-8 mt-2 space-y-2">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href="#"
                                                className="block py-1 text-sm text-slate-300 hover:text-white transition-colors duration-300"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            className="w-full mt-4 px-6 py-2 bg-white text-black font-medium hover:bg-slate-300 transition-colors duration-300"
                        >
                            Start Now
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;