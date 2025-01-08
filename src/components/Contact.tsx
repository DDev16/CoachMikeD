// components/Contact.tsx
const Contact = () => (
    <section className="py-16 bg-black text-white relative overflow-hidden" id="contact">
        <div className="container mx-auto text-center relative z-10 px-4">
            <h2 className="text-4xl font-extrabold mb-12 text-white relative inline-block 
                before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 
                before:bg-gradient-to-r before:from-white/50 before:via-white before:to-white/50">
                Get in Touch
            </h2>

            <form className="max-w-xl mx-auto bg-black p-8 rounded-xl border border-white/10">
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
                        className="w-full p-3 bg-black text-white border border-white/20 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent 
                        transition-all duration-300 placeholder-white/50"
                        placeholder="Your Name"
                        required
                    />
                </div>

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
                        className="w-full p-3 bg-black text-white border border-white/20 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent 
                        transition-all duration-300 placeholder-white/50"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div className="mb-6 group">
                    <label
                        htmlFor="message"
                        className="block text-left mb-2 text-white/70 group-focus-within:text-white transition-colors duration-300"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full p-3 bg-black text-white border border-white/20 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent 
                        transition-all duration-300 placeholder-white/50 resize-y"
                        rows={5}
                        placeholder="Your message here..."
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 text-black bg-white 
                    font-bold rounded-lg shadow-lg hover:bg-white/90 
                    transition-all duration-300"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-8 text-white/50">
                <p>© 2024 Your Brand. All rights reserved.</p>
            </div>
        </div>

        {/* Subtle decorative silver elements */}
        <div className="absolute bottom-84 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute top-36 left-0 w-64 h-64 bg-white/25 rounded-full blur-3xl"></div>
    </section>
);

export default Contact;