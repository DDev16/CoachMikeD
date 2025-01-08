"use client"

import { useState, useCallback, useRef, useEffect } from 'react';
import Image from "next/image";
import { ArrowRight, Quote, Star } from 'lucide-react';

interface TransformationStats {
    weightLost: string;
    bodyFat: string;
    muscleGain: string;
}

interface Transformation {
    id: number;
    name: string;
    duration: string;
    testimonial: string;
    beforeImage: string;
    afterImage: string;
    stats: TransformationStats;
    location?: string;
}

interface TransformationCardProps {
    transformation: Transformation;
    isActive: boolean;
}

const transformationData: Transformation[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        duration: "12 Weeks",
        testimonial: "Coach MikeD's program completely changed my approach to fitness. I lost 30lbs and gained confidence I never knew I had.",
        beforeImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
        stats: {
            weightLost: "30 lbs",
            bodyFat: "-18%",
            muscleGain: "+5 lbs"
        },
        location: "New York, NY"
    },
    {
        id: 2,
        name: "John Cooper",
        duration: "16 Weeks",
        testimonial: "The customized nutrition plan and workout routine helped me achieve results I couldn't get in years of training alone.",
        beforeImage: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80",
        stats: {
            weightLost: "45 lbs",
            bodyFat: "-22%",
            muscleGain: "+8 lbs"
        },
        location: "Los Angeles, CA"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        duration: "24 Weeks",
        testimonial: "Not just a physical transformation, but a complete lifestyle change. Coach MikeD's holistic approach made all the difference.",
        beforeImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
        afterImage: "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?w=800&q=80",
        stats: {
            weightLost: "35 lbs",
            bodyFat: "-20%",
            muscleGain: "+6 lbs"
        },
        location: "Chicago, IL"
    }
];

const TransformationCard: React.FC<TransformationCardProps> = ({ transformation, isActive }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                className={`
                    relative bg-black border border-slate-300/10 transition-all duration-500
                    ${isActive ? 'scale-[1.02] border-slate-300/30' : 'scale-100 hover:scale-[1.01]'}
                    w-full // Ensure full width
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="relative h-[360px] xs:h-[400px] sm:h-[500px] overflow-hidden cursor-pointer"
                    onClick={handleImageClick}
                >
                    <Image
                        src={isHovered ? transformation.afterImage : transformation.beforeImage}
                        alt={`${transformation.name}'s Transformation`}
                        fill
                        className="object-cover transition-all duration-700"
                        unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className={`
                        absolute inset-0 flex items-center justify-center text-white
                        transition-opacity duration-300
                        ${isHovered ? 'opacity-0' : 'opacity-100'}
                    `}>
                        <span className="bg-black/70 px-3 py-1 rounded-sm text-xs">
                            Click or Hover to see after
                        </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-2">{transformation.name}</h3>
                        <p className="text-slate-300 text-sm mb-3">{transformation.duration} Transformation</p>

                        <div className="grid grid-cols-3 gap-2 mb-3">
                            {Object.entries(transformation.stats).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <p className="text-base font-bold text-white">{value}</p>
                                    <p className="text-xs text-slate-300">
                                        {key === 'weightLost' ? 'Weight Lost' :
                                            key === 'bodyFat' ? 'Body Fat' :
                                                'Muscle Gain'}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center">
                            <Quote className="w-4 h-4 mr-2 text-slate-400" />
                            <p className="text-xs italic text-slate-300 flex-grow line-clamp-2">
                                {transformation.testimonial}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-2 sm:p-4 overflow-y-auto"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl bg-black p-2 sm:p-6 rounded-lg mx-2 sm:mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 bg-white text-black p-1 sm:p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white z-10"
                            onClick={closeModal}
                        >
                            ✕
                        </button>

                        {/* Flexible grid layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                            {/* Before Image */}
                            <div className="relative h-[180px] xs:h-[250px] sm:h-[360px] md:h-[500px]">
                                <Image
                                    src={transformation.beforeImage}
                                    alt={`${transformation.name}'s Before Image`}
                                    fill
                                    className="object-cover rounded-md"
                                    unoptimized={true}
                                />
                                <div className="absolute top-2 left-2 bg-black/70 px-1 py-1 sm:px-2 sm:py-1 rounded-sm text-white text-xs">
                                    Before
                                </div>
                            </div>

                            {/* After Image */}
                            <div className="relative h-[180px] xs:h-[250px] sm:h-[360px] md:h-[500px]">
                                <Image
                                    src={transformation.afterImage}
                                    alt={`${transformation.name}'s After Image`}
                                    fill
                                    className="object-cover rounded-md"
                                    unoptimized={true}
                                />
                                <div className="absolute top-2 left-2 bg-black/70 px-1 py-1 sm:px-2 sm:py-1 rounded-sm text-white text-xs">
                                    After
                                </div>
                            </div>
                        </div>

                        {/* Transformation Details */}
                        <div className="text-white text-center mt-4 sm:mt-6 px-2">
                            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{transformation.name}</h3>
                            <p className="text-slate-300 text-xs sm:text-sm mb-2 sm:mb-4">{transformation.duration} Transformation</p>

                            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                                {Object.entries(transformation.stats).map(([key, value]) => (
                                    <div key={key} className="text-center">
                                        <p className="text-base sm:text-xl font-bold text-white">{value}</p>
                                        <p className="text-xs sm:text-sm text-slate-300">
                                            {key === 'weightLost' ? 'Weight Lost' :
                                                key === 'bodyFat' ? 'Body Fat' :
                                                    'Muscle Gain'}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center space-x-1 text-yellow-400 mb-2 sm:mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                ))}
                            </div>

                            <div className="flex flex-col items-center justify-center px-2 sm:px-4">
                                <Quote className="w-4 h-4 sm:w-6 sm:h-6 mb-1 sm:mb-2 text-slate-400" />
                                <p className="text-xs sm:text-sm italic text-slate-300 max-w-md text-center">
                                    &ldquo;{transformation.testimonial}&rdquo;
                                </p>
                            </div>

                            {transformation.location && (
                                <p className="text-slate-400 mt-2 sm:mt-4 text-xs sm:text-sm">
                                    Location: {transformation.location}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const ClientTransformations = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const numTransformations = transformationData.length;
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === numTransformations - 1 ? 0 : prevIndex + 1
        );
    }, [numTransformations]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? numTransformations - 1 : prevIndex - 1
        );
    }, [numTransformations]);

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        const autoAdvanceTimer = setInterval(handleNext, 5000);
        return () => clearInterval(autoAdvanceTimer);
    }, [handleNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev]);

    return (
        <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Real Results
                    </h2>
                    <p className="text-slate-300 text-base max-w-2xl mx-auto">
                        See how our clients transformed their bodies and lives through dedication and expert coaching
                    </p>
                </div>

                <div className="relative" ref={carouselRef}>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
                        {transformationData.map((item, index) => (
                            <TransformationCard
                                key={item.id}
                                transformation={item}
                                isActive={index === currentIndex}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="
                        bg-white text-black px-6 py-3 font-semibold 
                        hover:bg-slate-300 transition-colors duration-300
                        flex items-center justify-center mx-auto
                        group
                    ">
                        Start Your Transformation
                        <ArrowRight
                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClientTransformations;