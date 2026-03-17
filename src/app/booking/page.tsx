import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSystem from "@/components/BookingSystem";

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />

            <div className="pt-32 pb-24 px-4 overflow-hidden relative">
                {/* Decorative elements */}
                <div className="absolute top-40 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Book an Appointment</h1>
                        <p className="font-sans text-foreground/70 tracking-widest uppercase text-sm">Secure your spot online in minutes</p>
                        <div className="w-12 h-[1px] bg-primary mx-auto mt-8" />
                    </div>

                    <BookingSystem />

                    <div className="mt-20 text-center max-w-2xl mx-auto space-y-6">
                        <p className="font-serif text-xl italic text-foreground/60 leading-relaxed">
                            "We believe every client deserves undivided attention and a personalized experience. Please note a small deposit is required to confirm your booking."
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-primary/10 opacity-60">
                            <div className="text-xs uppercase tracking-[0.2em]">Secured by Stripe</div>
                            <div className="text-xs uppercase tracking-[0.2em]">BIAB Specialist</div>
                            <div className="text-xs uppercase tracking-[0.2em]">Luxury Finish</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
