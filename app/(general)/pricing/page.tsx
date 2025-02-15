import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'Product Pricing',
 description: 'You can see the pricing here',
 keywords: ['Pricing Page', 'Mariantinho','informacion','...'],
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">
                Pricing Page
            </span>
        </>
    );
}