import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-serif text-2xl tracking-widest text-foreground">
                            BOUTIQUE NAIL <span className="text-primary">LIVERPOOL</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8 text-sm uppercase tracking-widest font-sans">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                            <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
                            <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                            <Link href="/booking" className="bg-primary text-secondary px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                                Book Now
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu button could go here */}
                        <button className="text-foreground">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
