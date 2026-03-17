import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const galleryImages = [
    {
        src: "https://source.unsplash.com/800x1000/?nail,art,manicure",
        alt: "Nude BIAB Nails",
        title: "Classic BIAB"
    },
    {
        src: "https://source.unsplash.com/800x1000/?french,nails,tips",
        alt: "French Tip Extensions",
        title: "Elegant French"
    },
    {
        src: "https://source.unsplash.com/800x1000/?pedicure,spa,feet",
        alt: "Luxury Spa Pedicure",
        title: "Pamper Session"
    },
    {
        src: "https://source.unsplash.com/800x1000/?gel,polish,nail",
        alt: "Neon Gel Polish",
        title: "Vibrant Summer"
    },
    {
        src: "https://source.unsplash.com/800x1000/?nail,design,art",
        alt: "Minimalist Nail Art",
        title: "Abstract Design"
    },
    {
        src: "https://source.unsplash.com/800x1000/?pastel,nails,beauty",
        alt: "Soft Pastel Mani",
        title: "Pastel Dreams"
    }
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />

            <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Gallery</h1>
                    <p className="font-sans text-foreground/70 tracking-widest uppercase text-sm">Our Latest Creations</p>
                    <div className="w-12 h-[1px] bg-primary mx-auto mt-8" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-white/20 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <div>
                                    <h3 className="text-secondary font-serif text-2xl mb-1">{image.title}</h3>
                                    <p className="text-secondary/70 font-sans text-xs uppercase tracking-[0.2em]">{image.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Booking CTA */}
                <div className="mt-24 text-center">
                    <p className="font-serif text-2xl mb-8 text-foreground/80 italic">Inspired by our work?</p>
                    <a
                        href="/booking"
                        className="inline-block bg-primary text-secondary px-12 py-4 rounded-full font-sans uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-all shadow-md"
                    >
                        Get the Look
                    </a>
                </div>
            </div>

            <Footer />
        </main>
    );
}
