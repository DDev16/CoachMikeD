"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, Instagram, Facebook, Linkedin } from 'lucide-react';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Social media links
    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' }
    ];

    return (
        <section className="relative h-screen bg-black overflow-hidden">
            {/* Background gradient overlay with enhanced complexity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 z-10" />

            {/* Animated pattern overlay */}
            <div className="absolute inset-0 opacity-30 z-5">
                <div className="absolute inset-0 bg-[url('/assets/pattern.png')] bg-repeat opacity-10" />
            </div>

            {/* Main image with parallax effect */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute right-0 h-screen w-2/3 top-0"
            >
                <Image
                    src="/assets/coach-mike.jpg"
                    alt="Coach MikeD Shreds"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                    quality={90}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 pt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    className="flex flex-col justify-center h-full w-full md:w-1/2 space-y-8"
                >
                    {/* Coach label */}
                    <motion.span
                        variants={itemVariants}
                        className="text-slate-300 tracking-widest text-sm font-medium"
                    >
                        PROFESSIONAL FITNESS COACH
                    </motion.span>

                    {/* Main heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        Transform Your Life
                        <span className="block text-slate-300">Inside Out</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-300 max-w-md"
                    >
                        Dedicated to helping you achieve your peak physical and mental potential through personalized coaching and proven strategies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Link
                            href="/programs"
                            className="group relative bg-white text-black px-8 py-4 rounded-none font-semibold overflow-hidden transition-all duration-300"
                        >
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-slate-900 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                            <span className="absolute inset-0 z-20 text-white flex items-center justify-center opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                Get Started
                            </span>
                        </Link>
                        <Link
                            href="/contact"
                            className="group border border-slate-300 text-white px-8 py-4 rounded-none font-semibold hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden"
                        >
                            Contact Me
                            <div className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 -z-10" />
                        </Link>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-6 pt-8"
                    >
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                className="text-slate-300 hover:text-white transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Enhanced scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-slate-300 text-sm tracking-wider">SCROLL</span>
                    <div className="animate-bounce">
                        <ChevronDown className="text-slate-300 w-6 h-6" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;