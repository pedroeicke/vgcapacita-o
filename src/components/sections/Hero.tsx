"use client";

import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/hero_bg.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);


    return (
        <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0"
            >
                <Image
                    src={heroBg}
                    alt="Servidores Públicos em reunião"
                    fill
                    className="object-cover opacity-20"
                    priority
                    placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-vg-dark/95" />
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div

                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >


                    <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-8 drop-shadow-2xl">
                        Portfólio de Palestras <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                            Lei 14.133/2021
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Soluções educacionais de <span className="text-white font-semibold">alta performance</span> e <span className="text-white font-semibold">segurança jurídica</span> para transformar o setor público.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="#contato"
                            className="group w-full sm:w-auto px-8 py-4 rounded-full bg-vg-gold text-vg-dark font-bold text-lg hover:bg-blue-400 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 hover:scale-105"
                        >
                            Solicitar Proposta
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="#portfolio"
                            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm"
                        >
                            Ver todos os temas
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
