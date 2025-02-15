import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'Contact Page',
 description: 'You can contact us here',
 keywords: ['Contact Page', 'Andres','informacion','...'],
};


export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">
                Contact Page
            </span>
        </>
    );
}