// app/components/ContactForm.tsx
'use client';

import React, { useState, FormEvent } from 'react';

interface ContactFormState {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormState>({
        name: '',
        email: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState<{
        sending: boolean;
        success: boolean;
        error: string | null;
    }>({
        sending: false,
        success: false,
        error: null
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset previous submission status
        setSubmitStatus({ sending: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.errors?.[0] || result.message || 'Submission failed');
            }

            // Success handling
            setSubmitStatus({
                sending: false,
                success: true,
                error: null
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            // Error handling
            setSubmitStatus({
                sending: false,
                success: false,
                error: error instanceof Error ? error.message : 'An unexpected error occurred'
            });
        }
    };

    return (
        <section className="py-16 bg-black text-white relative overflow-hidden" id="contact">
            <div className="container mx-auto text-center relative z-10 px-4">
                <h2 className="text-4xl font-extrabold mb-12 text-white relative inline-block 
            before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 
            before:bg-gradient-to-r before:from-white/50 before:via-white before:to-white/50">
                    Get in Touch
                </h2>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-black p-8 rounded-xl border border-white/10">
                    {/* Name Input */}
                    <div className="mb-6 group">
                        <label
                            htmlFor="name"
                            className="block text-left mb-2 text-white/70 group-focus-within:text-white transition-colors duration-300"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-black text-white border border-white/20 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent 
              transition-all duration-300 placeholder-white/50"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6 group">
                        <label
                            htmlFor="email"
                            className="block text-left mb-2 text-white/70 group-focus-within:text-white transition-colors duration-300"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-black text-white border border-white/20 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent 
              transition-all duration-300 placeholder-white/50"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="mb-6 group">
                        <label
                            htmlFor="message"
                            className="block text-left mb-2 text-white/70 group-focus-within:text-white transition-colors duration-300"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-black text-white border border-white/20 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent 
              transition-all duration-300 placeholder-white/50 resize-y"
                            rows={5}
                            placeholder="Your message here..."
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={submitStatus.sending}
                        className="w-full py-3 px-6 text-black bg-white 
            font-bold rounded-lg shadow-lg hover:bg-white/90 
            transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {submitStatus.sending ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Submission Status Messages */}
                    {submitStatus.success && (
                        <div className="mt-4 text-green-400">
                            Your message was sent successfully! We&apos;ll get back to you soon.
                        </div>
                    )}
                    {submitStatus.error && (
                        <div className="mt-4 text-red-400">
                            {submitStatus.error}
                        </div>
                    )}
                </form>

                <div className="mt-8 text-white/50">
                    <p>© 2024 Your Brand. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;