import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'SEO description',
 keywords: ['Historia de la empresa', 'Misión y visión', 'Valores corporativos'],
};
export default function About() {
    return (
        <h1 className="text-5xl">About</h1>
    );
};
