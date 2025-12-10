"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoVG from "@/assets/logovg.png";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Portfólio 14.133/21", href: "#portfolio" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Resultados", href: "#entregaveis" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "glass shadow-xl py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={logoVG}
                        alt="VG Capacitação"
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-vg-gold transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#contato"
                        className="px-5 py-2.5 rounded-full bg-vg-gold text-vg-dark font-semibold hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Solicitar Proposta
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 backdrop-blur-xl rounded-b-3xl shadow-2xl mx-2 mt-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-gray-200 hover:text-vg-gold py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#contato"
                        className="w-full text-center px-4 py-4 rounded-xl bg-vg-gold text-vg-dark font-bold text-lg mt-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Solicitar Proposta
                    </Link>
                </div>
            )}
        </header>
    );
}
