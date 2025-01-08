"use client";

import React from 'react';
import {
    Dumbbell,
    ClipboardCheck,
    MessageSquare,
    Activity
} from 'lucide-react';

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    benefits: string[];
}

const services: Service[] = [
    {
        title: "Custom Workout Plans",
        description: "Personalized training programs designed specifically for your goals and lifestyle",
        icon: <Dumbbell className="w-8 h-8" />,
        benefits: [
            "Progressive overload strategy",
            "Form technique guides",
            "Video demonstrations",
            "Weekly adjustments"
        ]
    },
    {
        title: "Nutrition Guidance",
        description: "Sustainable meal plans that fit your preferences and support your fitness journey",
        icon: <ClipboardCheck className="w-8 h-8" />,
        benefits: [
            "Macro calculations",
            "Meal timing strategies",
            "Supplement recommendations",
            "Restaurant guidelines"
        ]
    },
    {
        title: "1:1 Coaching Support",
        description: "Direct access to your coach for guidance, motivation, and accountability",
        icon: <MessageSquare className="w-8 h-8" />,
        benefits: [
            "Weekly check-ins",
            "24/7 chat support",
            "Progress tracking",
            "Goal adjustments"
        ]
    },
    {
        title: "Progress Tracking",
        description: "Comprehensive monitoring of your transformation journey",
        icon: <Activity className="w-8 h-8" />,
        benefits: [
            "Body measurements",
            "Progress photos",
            "Performance metrics",
            "Achievement tracking"
        ]
    }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    return (
        <div
            className="relative bg-black/40 backdrop-blur-sm border border-slate-300/10 p-8 
        transition-all duration-500 group hover:transform hover:-translate-y-1
        hover:border-slate-300/30 rounded-sm overflow-hidden"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300/5 via-transparent to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Service Header */}
            <div className="flex items-start gap-6 mb-8 relative">
                <div className="p-3 bg-slate-300/5 rounded-sm transform rotate-3 group-hover:rotate-0 
          transition-all duration-300">
                    <div className="text-slate-300 group-hover:text-white transform -rotate-3 group-hover:rotate-0 
            transition-all duration-300">
                        {service.icon}
                    </div>
                </div>
                <div className="flex-1 relative">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </div>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4 relative">
                {service.benefits.map((benefit, idx) => (
                    <li
                        key={idx}
                        className="flex items-center text-slate-300 group-hover:text-white 
              transition-all duration-300 transform hover:translate-x-2"
                    >
                        <span className="h-[2px] w-4 bg-slate-300/50 mr-4 group-hover:w-6 
              transition-all duration-300" />
                        {benefit}
                    </li>
                ))}
            </ul>

            {/* Background Number */}
            <div className="absolute -top-8 right-4 text-[120px] font-bold text-white/[0.02] 
        transition-all duration-500 group-hover:text-white/[0.03] select-none">
                {(index + 1).toString().padStart(2, '0')}
            </div>

            {/* Hover border effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-slate-300/10 
        transition-all duration-500 pointer-events-none" />
        </div>
    );
};

const Services = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-300/[0.07] to-black" />
                <div className="absolute top-36 inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(255,255,255,0.1),transparent)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <h2 className="inline-block text-4xl md:text-6xl font-bold text-white mb-6 
            relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 
            after:-translate-x-1/2 after:w-12 after:h-1 after:bg-slate-300/30">
                        What You Get
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
                        Transform your physique with a comprehensive coaching experience
                        tailored to your unique goals
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-24">
                    <button className="group relative px-8 py-4 font-semibold text-black 
            hover:text-white transition-colors duration-300 overflow-hidden">
                        <span className="absolute inset-0 bg-white transition-transform duration-300 
              group-hover:translate-y-full" />
                        <span className="absolute inset-0 bg-slate-300 transition-transform duration-300 
              translate-y-full group-hover:translate-y-0" />
                        <span className="relative">
                            Start Your Transformation
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;