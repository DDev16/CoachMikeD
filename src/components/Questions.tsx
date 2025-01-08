"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';

interface FormData {
    timezone: string;
    fullName: string;
    email: string;
    phone: string;
    country: string;
    instagramHandle: string;
    occupation: string;
    preferredContact: string;
    investmentWilling: boolean;
    whyChooseCoach: string;
    motivation: string;
    ageRange: string;
    gender: string;
    goal: string;
}

interface StepProps {
    onNext: () => void;
    onBack: () => void;
    updateFields: (fields: Partial<FormData>) => void;
    formData: FormData;
}

// Button component for reuse
const Button: React.FC<{
    onClick: () => void;
    isSelected?: boolean;
    className?: string;
    children: React.ReactNode;
}> = ({ onClick, isSelected, className = "", children }) => (
    <button
        onClick={onClick}
        className={`
      py-3 px-6 text-center transition-all duration-300
      ${isSelected
                ? 'bg-white text-black'
                : 'bg-transparent text-white border border-slate-300/30 hover:bg-white/10'
            }
      ${className}
    `}
    >
        {children}
    </button>
);

const NavButton: React.FC<{
    onClick: () => void;
    direction: 'back' | 'next';
    disabled?: boolean;
}> = ({ onClick, direction, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
      px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300
      ${direction === 'next'
                ? 'bg-white text-black hover:bg-slate-300'
                : 'border border-slate-300/30 hover:bg-white/10'
            }
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
    >
        {direction === 'back' && <ChevronLeft className="w-4 h-4" />}
        {direction === 'back' ? 'Back' : 'Next'}
        {direction === 'next' && <ChevronRight className="w-4 h-4" />}
    </button>
);

const TimezoneStep: React.FC<StepProps> = ({ onNext, updateFields, formData }) => (
    <div className="space-y-6">
        <h2 className="text-2xl text-center mb-8">Which timezone are you in?</h2>
        <div className="grid grid-cols-2 gap-4">
            {["Eastern", "Central", "Mountain", "Pacific"].map((zone) => (
                <Button
                    key={zone}
                    onClick={() => {
                        updateFields({ timezone: zone });
                        onNext();
                    }}
                    isSelected={formData.timezone === zone}
                >
                    {zone}
                </Button>
            ))}
        </div>
        <Button
            onClick={() => {
                updateFields({ timezone: "Other" });
                onNext();
            }}
            isSelected={formData.timezone === "Other"}
            className="w-full"
        >
            Other
        </Button>
    </div>
);

const ContactInfoStep: React.FC<StepProps> = ({ onNext, onBack, updateFields, formData }) => (
    <div className="space-y-6">
        <h2 className="text-2xl text-center mb-8">Contact Information</h2>
        <div className="space-y-4">
            {[
                { key: 'fullName', placeholder: 'Your full name', type: 'text' },
                { key: 'email', placeholder: 'Your email', type: 'email' },
                { key: 'phone', placeholder: 'Your phone number', type: 'tel' },
                { key: 'instagramHandle', placeholder: 'Your Instagram handle', type: 'text' },
                { key: 'occupation', placeholder: 'Occupation', type: 'text' },
            ].map(({ key, placeholder, type }) => (
                <input
                    key={key}
                    type={type}
                    placeholder={placeholder}
                    value={formData[key as keyof FormData] as string}
                    onChange={(e) => updateFields({ [key]: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-slate-300/30 text-white placeholder-slate-400 focus:outline-none focus:border-white transition-colors"
                />
            ))}
        </div>
        <div className="flex space-x-4 pt-4">
            <NavButton onClick={onBack} direction="back" />
            <NavButton onClick={onNext} direction="next" />
        </div>
    </div>
);

const InvestmentStep: React.FC<StepProps> = ({ onNext, onBack, updateFields, formData }) => (
    <div className="space-y-6">
        <h2 className="text-2xl text-center mb-8">
            Are you willing to invest $4-$6 dollars a day in online coaching with me which includes meal and workout plans, and 1:1 guidance and accountability to reach your goals?
        </h2>
        <div className="grid grid-cols-2 gap-4">
            {["YES", "NO"].map((choice) => (
                <Button
                    key={choice}
                    onClick={() => {
                        updateFields({ investmentWilling: choice === "YES" });
                        onNext();
                    }}
                    isSelected={(choice === "YES" && formData.investmentWilling) ||
                        (choice === "NO" && !formData.investmentWilling)}
                >
                    {choice}
                </Button>
            ))}
        </div>
        <div className="flex justify-center pt-4">
            <NavButton onClick={onBack} direction="back" />
        </div>
    </div>
);

const WhyCoachStep: React.FC<StepProps> = ({ onNext, onBack, updateFields, formData }) => (
    <div className="space-y-6">
        <h2 className="text-2xl text-center mb-8">Why me as your online coach?</h2>
        <textarea
            value={formData.whyChooseCoach}
            onChange={(e) => updateFields({ whyChooseCoach: e.target.value })}
            placeholder="Write here..."
            className="w-full h-40 px-4 py-3 bg-white/10 border border-slate-300/30 text-white placeholder-slate-400 focus:outline-none focus:border-white transition-colors resize-none"
        />
        <div className="flex space-x-4">
            <NavButton onClick={onBack} direction="back" />
            <NavButton onClick={onNext} direction="next" />
        </div>
    </div>
);

const MotivationStep: React.FC<StepProps> = ({ onNext, onBack, updateFields, formData }) => (
    <div className="space-y-6">
        <h2 className="text-2xl text-center mb-8">What is your motivation to start now?</h2>
        <textarea
            value={formData.motivation}
            onChange={(e) => updateFields({ motivation: e.target.value })}
            placeholder="e.g. recent event, upcoming vacation, ..."
            className="w-full h-40 px-4 py-3 bg-white/10 border border-slate-300/30 text-white placeholder-slate-400 focus:outline-none focus:border-white transition-colors resize-none"
        />
        <div className="flex space-x-4">
            <NavButton onClick={onBack} direction="back" />
            <NavButton onClick={onNext} direction="next" />
        </div>
    </div>
);

const AgeStep: React.FC<StepProps> = ({ onNext, onBack, updateFields, formData }) => (
    <div className="space-y-6">
        <h2 className="text-2xl text-center mb-8">I am</h2>
        <div className="grid grid-cols-2 gap-4">
            {["18-25", "26-35", "36-40", "40+"].map((range) => (
                <Button
                    key={range}
                    onClick={() => {
                        updateFields({ ageRange: range });
                        onNext();
                    }}
                    isSelected={formData.ageRange === range}
                >
                    {range}
                </Button>
            ))}
        </div>
        <div className="flex justify-center pt-4">
            <NavButton onClick={onBack} direction="back" />
        </div>
    </div>
);

const GenderStep: React.FC<StepProps> = ({ onNext, onBack, updateFields, formData }) => (
    <div className="space-y-6">
        <h2 className="text-2xl text-center mb-8">How do you identify?</h2>
        <div className="grid grid-cols-3 gap-4">
            {["Female", "Male", "Non-binary"].map((gender) => (
                <Button
                    key={gender}
                    onClick={() => {
                        updateFields({ gender });
                        onNext();
                    }}
                    isSelected={formData.gender === gender}
                >
                    {gender}
                </Button>
            ))}
        </div>
        <div className="flex justify-center pt-4">
            <NavButton onClick={onBack} direction="back" />
        </div>
    </div>
);

const GoalStep: React.FC<StepProps> = ({ onBack, updateFields, formData }) => {
    const handleSubmit = () => {
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl text-center mb-8">How can I help you?</h2>
            <div className="grid grid-cols-1 gap-4">
                {["Weight loss", "Build muscle", "Balanced lifestyle"].map((goal) => (
                    <Button
                        key={goal}
                        onClick={() => {
                            updateFields({ goal });
                            handleSubmit();
                        }}
                        isSelected={formData.goal === goal}
                    >
                        {goal}
                    </Button>
                ))}
            </div>
            <div className="flex justify-center pt-4">
                <NavButton onClick={onBack} direction="back" />
            </div>
        </div>
    );
};

const Questionnaire = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 8;

    const [formData, setFormData] = useState<FormData>({
        timezone: "",
        fullName: "",
        email: "",
        phone: "",
        country: "",
        instagramHandle: "",
        occupation: "",
        preferredContact: "",
        investmentWilling: false,
        whyChooseCoach: "",
        motivation: "",
        ageRange: "",
        gender: "",
        goal: ""
    });

    const updateFields = (fields: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...fields }));
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const progress = (currentStep / totalSteps) * 100;

    const renderStep = () => {
        const props = {
            onNext: nextStep,
            onBack: prevStep,
            updateFields,
            formData
        };

        switch (currentStep) {
            case 1:
                return <TimezoneStep {...props} />;
            case 2:
                return <ContactInfoStep {...props} />;
            case 3:
                return <InvestmentStep {...props} />;
            case 4:
                return <WhyCoachStep {...props} />;
            case 5:
                return <MotivationStep {...props} />;
            case 6:
                return <AgeStep {...props} />;
            case 7:
                return <GenderStep {...props} />;
            case 8:
                return <GoalStep {...props} />;
            default:
                return null;
        }
    };

    return (
        <AuroraBackground>




            <div className="absolute top-0 left-0 right-0">
                <div className="h-1 bg-slate-300/20">
                    <div
                        className="h-full bg-slate-300 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 pt-16 pb-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-2">ELITE FITNESS COACHING</h1>
                    <p className="text-slate-300">mindset • nutrition • fitness</p>
                </div>

                {renderStep()}
            </div>

        </AuroraBackground>
    );
};

export default Questionnaire;