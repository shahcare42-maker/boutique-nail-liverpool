'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

const initialMessages = [
    { id: 1, text: "Hi there! Welcome to Boutique Nail Liverpool. How can I help you today?", sender: 'bot' }
];

const faqs = [
    { q: "What are your prices?", a: "Our prices start from £20 for Gel Polish, £30 for BIAB, and £33 for Acrylic. You can see the full list on our Services page!" },
    { q: "How do I book?", a: "You can book directly through our website by clicking the 'Book Now' button. It only takes a couple of minutes!" },
    { q: "Where are you located?", a: "We are located at 123 Luxury Lane, Liverpool. You can find a map on our Contact page." },
    { q: "Do you offer BIAB?", a: "Yes! We are BIAB specialists. We offer overlays, extensions, and infills." }
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMessage = { id: Date.now(), text, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInputValue('');

        // Simple bot logic
        setTimeout(() => {
            const lowerText = text.toLowerCase();
            let response = "I'm not sure about that, but our team would be happy to help! You can call us at +44 151 123 4567.";

            if (lowerText.includes('price') || lowerText.includes('cost')) {
                response = faqs[0].a;
            } else if (lowerText.includes('book')) {
                response = faqs[1].a;
            } else if (lowerText.includes('location') || lowerText.includes('where')) {
                response = faqs[2].a;
            } else if (lowerText.includes('biab')) {
                response = faqs[3].a;
            }

            const botMessage = { id: Date.now() + 1, text: response, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-16 h-16 rounded-full bg-primary text-secondary flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110",
                    isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                )}
            >
                <MessageCircle size={32} />
            </button>

            {/* Chat Window */}
            <div className={cn(
                "absolute bottom-0 right-0 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-primary/20 flex flex-col transition-all duration-500 origin-bottom-right",
                isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
            )}>
                {/* Header */}
                <div className="bg-primary p-6 text-secondary flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                            <Bot size={24} />
                        </div>
                        <div>
                            <h3 className="font-serif text-lg leading-tight">Boutique Assistant</h3>
                            <p className="text-[10px] uppercase tracking-widest opacity-70">Online now</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                        <X size={24} />
                    </button>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto bg-secondary/10 space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={cn(
                            "flex w-full",
                            msg.sender === 'user' ? "justify-end" : "justify-start"
                        )}>
                            <div className={cn(
                                "max-w-[80%] p-4 rounded-2xl text-sm font-sans",
                                msg.sender === 'user'
                                    ? "bg-primary text-secondary rounded-tr-none"
                                    : "bg-white text-foreground shadow-sm rounded-tl-none"
                            )}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {/* FAQ Suggestions */}
                    {messages.length === 1 && (
                        <div className="pt-4 space-y-2">
                            <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Common questions:</p>
                            {faqs.map((faq) => (
                                <button
                                    key={faq.q}
                                    onClick={() => handleSend(faq.q)}
                                    className="block w-full text-left p-2 rounded-lg bg-white/50 text-xs font-sans hover:bg-white transition-colors border border-primary/10"
                                >
                                    {faq.q}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-primary/10 flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
                        placeholder="Type your message..."
                        className="flex-grow p-3 bg-secondary/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary text-sm font-sans text-foreground"
                    />
                    <button
                        onClick={() => handleSend(inputValue)}
                        className="w-11 h-11 bg-primary text-secondary flex items-center justify-center rounded-xl hover:opacity-90 transition-opacity"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
