import { NextResponse } from 'next/server';
import { stripeServer } from '@/lib/stripe';

export async function POST(req: Request) {
    try {
        const { service, price } = await req.json();

        // Create Checkout Sessions from body params.
        const session = await stripeServer.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'gbp',
                        product_data: {
                            name: `Deposit for ${service}`,
                            description: 'Non-refundable deposit to secure your appointment.',
                        },
                        unit_amount: 1000, // £10.00 deposit
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/booking?status=success`,
            cancel_url: `${req.headers.get('origin')}/booking?status=canceled`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
