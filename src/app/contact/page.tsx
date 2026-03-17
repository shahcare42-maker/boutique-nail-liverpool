import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />

            <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Contact Us</h1>
                    <p className="font-sans text-foreground/70 tracking-widest uppercase text-sm">Find us in the heart of Liverpool</p>
                    <div className="w-12 h-[1px] bg-primary mx-auto mt-8" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-serif text-3xl text-primary mb-6">Get in Touch</h2>
                            <div className="space-y-4 font-sans text-foreground/80">
                                <p className="flex items-center gap-4">
                                    <span className="w-8 h-8 flex items-center justify-center bg-primary text-secondary rounded-full text-xs font-bold">A</span>
                                    123 Luxury Lane, Liverpool, L1 1AB
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="w-8 h-8 flex items-center justify-center bg-primary text-secondary rounded-full text-xs font-bold">P</span>
                                    +44 151 123 4567
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="w-8 h-8 flex items-center justify-center bg-primary text-secondary rounded-full text-xs font-bold">I</span>
                                    <a href="https://instagram.com/boutiquenail.liverpool" target="_blank" className="hover:text-primary transition-colors">
                                        @boutiquenail.liverpool
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-3xl text-primary mb-6">Opening Hours</h2>
                            <div className="grid grid-cols-2 gap-y-3 font-sans text-foreground/80 max-w-xs">
                                <span>Mon - Fri</span>
                                <span>9:00 AM - 7:00 PM</span>
                                <span>Saturday</span>
                                <span>10:00 AM - 6:00 PM</span>
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>

                        <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16" />
                            <h3 className="font-serif text-2xl mb-4 italic text-white relative z-10">Have a question?</h3>
                            <p className="font-sans text-white/60 mb-6 relative z-10 font-light leading-relaxed">
                                Our chatbot is available on every page to help with pricing, booking, and general inquiries. For urgent matters, please give us a call!
                            </p>
                            <a
                                href="/booking"
                                className="relative z-10 inline-block bg-primary text-secondary px-8 py-3 rounded-full font-sans uppercase tracking-widest text-xs hover:scale-105 transition-all font-bold"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="relative aspect-square md:aspect-video lg:aspect-square w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        {/* In a real scenario, we'd use Google Maps or Mapbox. This is a stylized placeholder. */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col p-12 text-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h4 className="font-serif text-2xl mb-2 text-foreground">Boutique Nail Liverpool</h4>
                            <p className="font-sans text-foreground/60 max-w-xs">
                                Premium nail care & BIAB specialist in the heart of the city.
                            </p>
                            <div className="mt-8 pt-8 border-t border-primary/10 w-full text-xs font-sans tracking-[0.3em] uppercase opacity-40">
                                Liverpool | L1 1AB
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
