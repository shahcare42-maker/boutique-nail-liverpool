import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Luxury Cuticle Oil",
        price: "£12.99",
        description: "Deeply nourishing blend of natural oils to keep your nails and skin hydrated.",
        image: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Nail Strengthening Kit",
        price: "£24.99",
        description: "The perfect home-care trio for maintaining nail health between appointments.",
        image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Hydrating Hand Cream",
        price: "£15.50",
        description: "Silky smooth formula with a signature subtle fragrance, perfect for dry skin.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Glass Nail File",
        price: "£8.00",
        description: "Gentle yet effective filing to prevent splitting and peeling of natural nails.",
        image: "https://images.unsplash.com/photo-1599305090598-fe179d501c27?q=80&w=800&auto=format&fit=crop"
    }
];

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />

            <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Boutique Shop</h1>
                    <p className="font-sans text-foreground/70 tracking-widest uppercase text-sm">Curated Essentials for Nail Care</p>
                    <div className="w-12 h-[1px] bg-primary mx-auto mt-8" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl">
                            <div className="relative aspect-square overflow-hidden bg-secondary/50">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-xs font-sans tracking-widest">
                                    New
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-serif text-xl text-foreground mb-2">{product.name}</h3>
                                <p className="font-sans text-sm text-foreground/60 mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="font-serif text-2xl text-primary">{product.price}</span>
                                    <button className="bg-foreground text-secondary px-4 py-2 rounded-lg text-xs font-sans uppercase tracking-widest hover:opacity-90 transition-opacity">
                                        Add to Bag
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Shop Info Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-24 text-center">
                    <div>
                        <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">✓</div>
                        <h4 className="font-serif text-xl mb-3">Premium Quality</h4>
                        <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                            Every product in our shop is used and recommended by our professional technicians.
                        </p>
                    </div>
                    <div>
                        <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">✦</div>
                        <h4 className="font-serif text-xl mb-3">Salon Results</h4>
                        <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                            Maintain your salon-perfect nails for longer with our professional-grade formulas.
                        </p>
                    </div>
                    <div>
                        <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">♡</div>
                        <h4 className="font-serif text-xl mb-3">Eco-Conscious</h4>
                        <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                            We prioritize sustainable packaging and ethically sourced ingredients in all our products.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
