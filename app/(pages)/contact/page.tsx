import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contacto',
 description: 'SEO description',
 keywords: ['Contacto de la empresa', 'Misión y visión', 'Valores corporativos'],
};
export default function Contact() {
    return (
        <h1 className="text-5xl">Contact</h1>
    );
};
