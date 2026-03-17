import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import Link from "next/link";
import Image from "next/image";

const featuredServices = [
  {
    title: "BIAB Nails",
    description: "The ultimate strength and growth treatment for natural nails.",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop",
    price: "From £30"
  },
  {
    title: "Acrylic Full Set",
    description: "Elegant extensions designed for durability and daily glamour.",
    image: "https://images.unsplash.com/photo-1604654894610-df490998cbcc?q=80&w=800&auto=format&fit=crop",
    price: "From £33"
  },
  {
    title: "Luxury Pedicure",
    description: "A restorative experience for your feet with premium gel finish.",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c9?q=80&w=800&auto=format&fit=crop",
    price: "From £45"
  }
];

const whyChooseUs = [
  {
    icon: "✦",
    title: "BIAB Specialists",
    description: "We are experts in Builder In A Bottle — the gold standard for nail health and strength."
  },
  {
    icon: "♡",
    title: "Luxury Experience",
    description: "Every visit is a pampering ritual. We use only premium, cruelty-free products."
  },
  {
    icon: "★",
    title: "Master Technicians",
    description: "Our team is fully trained, accredited, and dedicated to flawless, long-lasting results."
  },
  {
    icon: "◎",
    title: "Easy Online Booking",
    description: "Secure your appointment 24/7 from your phone or laptop in under 2 minutes."
  }
];

const testimonials = [
  {
    name: "Sophie M.",
    quote: "The best nail salon in Liverpool by far. My BIAB nails lasted over 4 weeks and looked perfect the whole time!",
    service: "BIAB Nails"
  },
  {
    name: "Emma L.",
    quote: "Absolutely obsessed! The atmosphere is so luxurious and the team are so talented. I won't go anywhere else.",
    service: "Acrylic Full Set"
  },
  {
    name: "Chloe R.",
    quote: "The luxury pedicure was the most relaxing experience. My feet have never felt so soft. Highly recommend!",
    service: "Luxury Pedicure"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />

      {/* Stats Strip */}
      <section className="bg-primary py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "5★", label: "Average Rating" },
            { value: "3+", label: "Years Experience" },
            { value: "100%", label: "Premium Products" }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl text-secondary font-bold">{stat.value}</div>
              <div className="font-sans text-xs uppercase tracking-widest text-secondary/80 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-primary/80 tracking-widest uppercase text-xs mb-4">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">Featured Services</h2>
          <div className="w-20 h-[2px] bg-primary mx-auto mb-6" />
          <p className="font-sans text-white/60 max-w-2xl mx-auto font-light">
            Discover our most popular treatments, meticulously performed by our expert technicians using only the finest products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-all duration-500 rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl mb-3 text-white">{service.title}</h3>
                <p className="text-sm font-sans text-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex bg-white/5 p-3 rounded-xl justify-between items-center border border-white/5">
                  <span className="font-serif text-lg text-primary">{service.price}</span>
                  <Link href="/services" className="text-xs uppercase tracking-widest font-sans border-b border-primary text-primary hover:border-transparent transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-block border border-primary text-primary px-10 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-primary hover:text-secondary transition-all"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 px-4 bg-white/[0.03] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-primary/80 tracking-widest uppercase text-xs mb-4">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Why Choose Boutique Nail?</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section className="py-28 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
            alt="Boutique Nail Liverpool Salon"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <p className="font-serif text-xl text-white italic">&ldquo;Luxury is in each detail.&rdquo;</p>
              <p className="font-sans text-white/60 text-xs mt-2 uppercase tracking-widest">— Our philosophy</p>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <p className="font-sans text-primary/80 tracking-widest uppercase text-xs">About Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">Liverpool&apos;s Home of Luxury Nail Care</h2>
          <div className="w-16 h-[2px] bg-primary" />
          <p className="font-sans text-white/60 leading-relaxed font-light">
            Boutique Nail Liverpool was founded with a single vision: to create an inviting sanctuary where every client feels truly valued, pampered, and leaves feeling their most beautiful self.
          </p>
          <p className="font-sans text-white/60 leading-relaxed font-light">
            We specialize in BIAB, Acrylic, Gel Polish, and bespoke nail art — all delivered with meticulous attention to detail and a genuine passion for nail health as well as beauty.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            {[
              { label: "Established", value: "2020" },
              { label: "Treatments", value: "20+" },
              { label: "Products Used", value: "Premium only" },
              { label: "Location", value: "Liverpool City" }
            ].map((fact) => (
              <div key={fact.label} className="border border-white/10 rounded-xl p-4 bg-white/5">
                <div className="font-serif text-lg text-primary">{fact.value}</div>
                <div className="font-sans text-white/50 text-xs uppercase tracking-wider mt-1">{fact.label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block border border-primary text-primary px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-primary hover:text-secondary transition-all"
          >
            Find Us
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-4 bg-white/[0.03] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-primary/80 tracking-widest uppercase text-xs mb-4">What Our Clients Say</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Client Love</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
                <div className="absolute top-4 right-6 text-primary text-6xl font-serif opacity-20 group-hover:opacity-30 transition-opacity">&ldquo;</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-sm">★</span>
                  ))}
                </div>
                <p className="font-sans text-white/70 leading-relaxed mb-6 italic font-light">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <div>
                    <div className="font-serif text-white text-lg">{testimonial.name}</div>
                    <div className="font-sans text-primary/70 text-xs uppercase tracking-widest mt-1">{testimonial.service}</div>
                  </div>
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-serif">
                    {testimonial.name[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-28 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-sans text-secondary/80 tracking-widest uppercase text-xs mb-6">Reserve Your Spot</p>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-8 font-bold">Ready to pamper your nails?</h2>
          <p className="font-sans text-secondary/90 mb-10 text-lg font-medium max-w-xl mx-auto">
            Join us at Boutique Nail Liverpool and experience the luxury you deserve. Book online in minutes.
          </p>
          <Link
            href="/booking"
            className="bg-secondary text-white px-12 py-4 rounded-full font-serif text-xl hover:opacity-90 transition-opacity inline-block shadow-xl hover:scale-105 transform"
          >
            Secure Your Appointment
          </Link>
        </div>
      </section>

      <InstagramFeed />
      <Footer />
    </main>
  );
}
