import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceCategories = [
    {
        name: "BIAB",
        items: [
            { name: "BIAB Overlay Clear", price: "£30" },
            { name: "BIAB Overlay Natural Colour", price: "£33" },
            { name: "BIAB Clear Extension", price: "£35" },
            { name: "BIAB Natural Extension", price: "£38" },
            { name: "BIAB Infills", price: "£25" },
            { name: "BIAB Natural Colour Infills", price: "£27" },
            { name: "Add Gel Polish", price: "£5" },
        ]
    },
    {
        name: "ACRYLIC",
        items: [
            { name: "Full Set Acrylic", price: "£33" },
            { name: "Infills", price: "£25" },
            { name: "Toe Nails Acrylic", price: "£35" },
            { name: "Soak Off Acrylic", price: "£10" },
            { name: "Add Gel Polish", price: "£5" },
        ]
    },
    {
        name: "GEL POLISH",
        items: [
            { name: "Gel Polish Hands", price: "£20" },
            { name: "Gel Polish Toes", price: "£22" },
            { name: "Manicure + Gel Polish", price: "£28" },
            { name: "Pedicure + Gel Polish", price: "£38" },
            { name: "Luxury Pedicure + Gel Polish", price: "£45" },
            { name: "Soak Off Gel Polish Hands", price: "£5" },
            { name: "Soak Off Gel Polish Toes", price: "£8" },
        ]
    },
    {
        name: "ADD-ONS",
        items: [
            { name: "Nail Repair", price: "from £4" },
            { name: "Gems", price: "from £5" },
            { name: "Nail Art", price: "from £5" },
            { name: "Cat Eye", price: "from £7" },
            { name: "French Tips", price: "£5" },
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-secondary">
            <Navbar />

            <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Services</h1>
                    <p className="font-sans text-foreground/70 tracking-widest uppercase text-sm">Professional Nail Care in Liverpool</p>
                    <div className="w-12 h-[1px] bg-primary mx-auto mt-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-20">
                    {serviceCategories.map((category) => (
                        <div key={category.name} className="space-y-8">
                            <h2 className="font-serif text-3xl text-primary border-b border-primary/20 pb-4 tracking-wider">
                                {category.name}
                            </h2>
                            <div className="space-y-6">
                                {category.items.map((item) => (
                                    <div key={item.name} className="flex justify-between items-end group">
                                        <div className="flex-grow">
                                            <span className="font-sans text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                                                {item.name}
                                            </span>
                                            <div className="border-b border-dotted border-foreground/20 flex-grow mx-4 mb-2 hidden sm:block" />
                                        </div>
                                        <span className="font-serif text-xl text-foreground/80">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Booking CTA */}
                <div className="mt-32 p-12 bg-white/5 backdrop-blur-xl rounded-3xl text-center border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="relative z-10">
                        <h3 className="font-serif text-3xl mb-6 text-white">Book Your Treatment Today</h3>
                        <p className="font-sans text-white/70 mb-10 max-w-xl mx-auto italic font-light">
                            Appointments are highly recommended to ensure we can provide you with the dedicated time and care your nails deserve.
                        </p>
                        <a
                            href="/booking"
                            className="inline-block bg-primary text-secondary px-12 py-4 rounded-full font-sans uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-xl font-bold"
                        >
                            Schedule Appointment
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
