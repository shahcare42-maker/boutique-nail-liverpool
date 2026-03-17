import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-foreground text-secondary py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="font-serif text-2xl tracking-widest">BOUTIQUE NAIL</h3>
                    <p className="text-sm opacity-70 leading-relaxed font-sans">
                        Liverpool's premier luxury nail salon. Specialized in BIAB, Acrylic, and elegant nail art. Your sanctuary for beauty and relaxation.
                    </p>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
                    <ul className="space-y-3 text-sm opacity-70 font-sans uppercase tracking-tight">
                        <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                        <li><Link href="/booking" className="hover:text-primary transition-colors">Book Appointment</Link></li>
                        <li><Link href="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Opening Hours</h4>
                    <ul className="space-y-3 text-sm opacity-70 font-sans">
                        <li>Mon - Fri: 9:00 AM - 7:00 PM</li>
                        <li>Saturday: 10:00 AM - 6:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Connect</h4>
                    <p className="text-sm opacity-70 mb-4 font-sans">Follow us on Instagram for latest designs and offers.</p>
                    <a href="https://instagram.com/boutiquenail.liverpool" target="_blank" className="hover:text-primary transition-colors">
                        @boutiquenail.liverpool
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-secondary/10 text-center text-xs opacity-50 uppercase tracking-widest font-sans">
                © {new Date().getFullYear()} Boutique Nail Liverpool. All Rights Reserved.
            </div>
        </footer>
    );
}
