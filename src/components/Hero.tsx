import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Nail Salon Interior"
                    fill
                    className="object-cover brightness-[0.7]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tighter animate-fade-in">
                    Elegance at Your <br className="hidden md:block" />
                    <span className="italic font-light">Fingertips</span>
                </h1>
                <p className="font-sans text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide">
                    Experience the pinnacle of luxury nail care in the heart of Liverpool.
                    Specializing in BIAB, Acrylic, and bespoke artistry.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/booking"
                        className="w-full sm:w-auto bg-primary text-secondary px-10 py-4 rounded-full font-sans uppercase tracking-widest hover:bg-primary/90 transition-all transform hover:scale-105"
                    >
                        Book Appointment
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-auto border border-white text-white px-10 py-4 rounded-full font-sans uppercase tracking-widest hover:bg-white hover:text-secondary transition-all"
                    >
                        Our Services
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-12 bg-secondary/30 mx-auto" />
            </div>
        </section>
    );
}
