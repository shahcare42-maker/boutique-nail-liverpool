'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
    { id: 'biab-overlay', name: 'BIAB Overlay Natural Colour', price: 33, duration: '60 min' },
    { id: 'biab-infills', name: 'BIAB Natural Colour Infills', price: 27, duration: '75 min' },
    { id: 'acrylic-set', name: 'Full Set Acrylic', price: 33, duration: '90 min' },
    { id: 'gel-hands', name: 'Gel Polish Hands', price: 20, duration: '45 min' },
    { id: 'pedicure-luxury', name: 'Luxury Pedicure + Gel Polish', price: 45, duration: '60 min' },
];

const timeSlots = [
    '09:00 AM', '10:15 AM', '11:30 AM', '12:45 PM', '02:00 PM', '03:15 PM', '04:30 PM', '05:45 PM'
];

export default function BookingSystem() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleServiceSelect = (service: typeof services[0]) => {
        setSelectedService(service);
        nextStep();
    };

    const handleDateSelect = (date: string) => {
        setSelectedDate(date);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        nextStep();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        nextStep();
        // Here we would call Stripe API
    };

    return (
        <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-primary/20">
            {/* Progress Bar */}
            <div className="bg-primary/10 h-2 w-full">
                <div
                    className="bg-primary h-full transition-all duration-500"
                    style={{ width: `${(step / 4) * 100}%` }}
                />
            </div>

            <div className="p-8 md:p-12">
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4">
                        <h2 className="font-serif text-3xl mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-sans">1</span>
                            Select Service
                        </h2>
                        <div className="space-y-4">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => handleServiceSelect(service)}
                                    className={cn(
                                        "w-full text-left p-6 rounded-2xl border transition-all duration-300 group hover:border-primary/50 hover:bg-white/40",
                                        selectedService?.id === service.id ? "border-primary bg-white/80 shadow-lg" : "border-primary/10 bg-white/20"
                                    )}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-serif text-xl mb-1 group-hover:text-primary transition-colors">{service.name}</h3>
                                            <p className="text-sm font-sans text-foreground/50">{service.duration}</p>
                                        </div>
                                        <span className="font-serif text-2xl text-primary">£{service.price}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-serif text-3xl flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-sans">2</span>
                                Choose Date & Time
                            </h2>
                            <button onClick={prevStep} className="text-primary hover:underline text-sm font-sans flex items-center gap-1">
                                <ChevronLeft size={16} /> Back
                            </button>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-sans uppercase tracking-widest text-foreground/50 mb-4">Select Date</label>
                            <input
                                type="date"
                                onChange={(e) => handleDateSelect(e.target.value)}
                                className="w-full p-4 rounded-xl bg-white/40 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 font-sans text-foreground"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-sans uppercase tracking-widest text-foreground/50">Available Times</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => handleTimeSelect(time)}
                                        className={cn(
                                            "p-3 rounded-xl border font-sans text-sm transition-all duration-300",
                                            selectedTime === time ? "bg-primary text-secondary border-primary shadow-md" : "bg-white/40 border-primary/10 hover:border-primary/40"
                                        )}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-serif text-3xl flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-sans">3</span>
                                Your Details
                            </h2>
                            <button onClick={prevStep} className="text-primary hover:underline text-sm font-sans flex items-center gap-1">
                                <ChevronLeft size={16} /> Back
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-sans text-foreground/60 mb-2">Full Name</label>
                                    <input
                                        type="text" required
                                        className="w-full p-4 rounded-xl bg-white/40 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-sans text-foreground/60 mb-2">Email Address</label>
                                    <input
                                        type="email" required
                                        className="w-full p-4 rounded-xl bg-white/40 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-sans text-foreground/60 mb-2">Phone Number</label>
                                    <input
                                        type="tel" required
                                        className="w-full p-4 rounded-xl bg-white/40 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="p-6 bg-primary shadow-inner rounded-2xl text-secondary">
                                <h4 className="font-serif text-xl mb-4">Booking Summary</h4>
                                <div className="space-y-2 text-sm opacity-90 font-sans">
                                    <p className="flex justify-between"><span>Service:</span> <span>{selectedService?.name}</span></p>
                                    <p className="flex justify-between"><span>Date:</span> <span>{selectedDate}</span></p>
                                    <p className="flex justify-between"><span>Time:</span> <span>{selectedTime}</span></p>
                                    <div className="h-[1px] bg-secondary/20 my-4" />
                                    <p className="flex justify-between font-serif text-lg"><span>Deposit to pay:</span> <span>£10.00</span></p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-foreground text-secondary p-5 rounded-2xl font-sans uppercase tracking-[0.2em] transform active:scale-[0.98] transition-all hover:shadow-xl flex items-center justify-center gap-3"
                            >
                                Proceed to Payment <ChevronRight size={18} />
                            </button>
                        </form>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center py-12 animate-in fade-in zoom-in duration-700">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 className="font-serif text-4xl mb-4">Appointment Confirmed!</h2>
                        <p className="font-sans text-foreground/60 max-w-sm mx-auto mb-10">
                            Thank you {formData.name}, your appointment for {selectedService?.name} on {selectedDate} at {selectedTime} has been successfully booked.
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="bg-primary text-secondary px-10 py-4 rounded-full font-sans uppercase tracking-widest text-sm hover:opacity-90 transition-all"
                            >
                                Return to Home
                            </button>
                            <p className="block text-xs uppercase tracking-tighter text-foreground/30">A confirmation email has been sent to {formData.email}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
