import Image from "next/image";

// components/About.tsx
const About = () => (
    <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative group overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-xl">
                    <Image
                        src="/assets/work.jpeg"
                        alt="Coach"
                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        width={800}
                        height={600}
                    />
                    <div className="absolute inset-0 bg-white bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
                <h2 className="text-4xl font-bold mb-6 text-white border-b-2 border-gray-700 pb-3">
                    Why Choose Personalized Online Coaching?
                </h2>
                <div className="space-y-6">
                    <p className="leading-relaxed bg-gray-900 bg-opacity-50 p-4 rounded-lg shadow-md">
                        My own fitness journey began with confusion and frustration. I had no idea what I was doing, with limited access to healthy food and no knowledge of how to prepare nutritious meals. I tried every diet trend imaginable, failing repeatedly due to being ill-informed, inconsistent, and lacking self-compassion. Over the years, I realized I wanted to become the guide I desperately needed when I first started my transformation journey.
                    </p>
                    <p className="leading-relaxed bg-gray-900 bg-opacity-50 p-4 rounded-lg shadow-md">
                        Online coaching allows me to make a meaningful impact in people&apos;s lives, regardless of gender, background, or fitness level. I understand how challenging and isolating a transformational journey can be, especially without a supportive community. Traditional personal training often feels disconnected – with trainers who may not understand the unique challenges and experiences of their clients.
                    </p>
                    <p className="leading-relaxed bg-gray-900 bg-opacity-50 p-4 rounded-lg shadow-md">
                        My approach is different. I&apos;ve been where you are. I know the struggle of feeling stuck, the intimidation of stepping into a gym, and the frustration of not seeing results. That&apos;s why I&apos;ve designed a coaching program that goes beyond just workout plans – it&apos;s about creating a supportive, understanding environment where you can truly transform your life.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default About;