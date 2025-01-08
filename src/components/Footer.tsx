import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-slate-300">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center space-y-6">
                    {/* Brand */}
                    <div className="text-white text-xl font-bold tracking-wider">
                        COACH MIKED.SHREDS
                    </div>

                    {/* Essential Links */}
                    <div className="flex space-x-8">
                        <Link
                            href="/programs"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                        >
                            Programs
                        </Link>
                        <Link
                            href="/about"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-6">
                        <Link
                            href="https://instagram.com"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://youtube.com"
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Youtube className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-slate-300 text-sm">
                        © {currentYear} Coach MikeD.Shreds
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;