import Image from 'next/image';
import { Instagram } from 'lucide-react';

const igPosts = [
    { id: 1, src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=400&auto=format&fit=crop" },
    { id: 2, src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop" },
    { id: 3, src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=400&auto=format&fit=crop" },
    { id: 4, src: "https://images.unsplash.com/photo-1634128221889-82ed6efdf33c?q=80&w=400&auto=format&fit=crop" },
    { id: 5, src: "https://images.unsplash.com/photo-1522337360788-8b13df75526a?q=80&w=400&auto=format&fit=crop" },
    { id: 6, src: "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?q=80&w=400&auto=format&fit=crop" },
];

export default function InstagramFeed() {
    return (
        <section className="py-24 bg-white/[0.03] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
                    <div>
                        <h2 className="font-serif text-4xl text-foreground mb-2">Follow Us</h2>
                        <p className="font-sans text-foreground/50 tracking-widest uppercase text-xs">@boutiquenail.liverpool</p>
                    </div>
                    <a
                        href="https://instagram.com/boutiquenail.liverpool"
                        target="_blank"
                        className="flex items-center gap-3 bg-foreground text-secondary px-8 py-3 rounded-full font-sans uppercase tracking-widest text-xs hover:opacity-90 transition-opacity"
                    >
                        <Instagram size={18} /> View on Instagram
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {igPosts.map((post) => (
                        <a
                            key={post.id}
                            href="https://instagram.com/boutiquenail.liverpool"
                            target="_blank"
                            className="group relative aspect-square overflow-hidden rounded-xl bg-secondary"
                        >
                            <Image
                                src={post.src}
                                alt="Instagram Post"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram className="text-secondary" size={32} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
