import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Precios',
 description: 'SEO description',
 keywords: ['Precios de la empresa', 'Misión y visión', 'Valores corporativos'],
};
export default function Pricing() {
    return (
        <h1 className="text-5xl">Pricing</h1>
    );
};
