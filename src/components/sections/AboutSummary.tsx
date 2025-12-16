"use client";

import Link from "next/link";
import { CheckCircle2, Award, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
    { icon: BookOpen, text: "Metodologia prática e aplicada" },
    { icon: CheckCircle2, text: "Conteúdo sempre atualizado" },
    { icon: Award, text: "Instrutores com ampla experiência" },
    { icon: Users, text: "Foco em soluções reais" },
];

export default function AboutSummary() {
    return (
        <section className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <span className="text-vg-gold font-bold tracking-wider uppercase text-sm mb-2 block">
                            Quem Somos
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8 leading-tight">
                            Excelência na gestão pública através do <span className="text-gradient-blue">conhecimento</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                A <strong className="text-white">VG Capacitação</strong> é uma empresa especializada no desenvolvimento de profissionais do setor público e privado, oferecendo soluções educacionais voltadas para a prática, inovação e excelência na gestão.
                            </p>
                            <p>
                                Atuamos com foco em qualificação técnica, atualização normativa e desenvolvimento de competências essenciais para uma atuação mais segura, estratégica e eficiente.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="#quem-somos"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm"
                            >
                                Conheça a VG Capacitação
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {highlights.map((item, idx) => (
                            <div key={idx} className="glass-card p-6 rounded-2xl group">
                                <item.icon className="text-vg-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                                <h3 className="font-semibold text-white text-lg">{item.text}</h3>
                            </div>
                        ))}
                    </motion.div>

                </div>

                {/* Callout box */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-24 p-8 md:p-14 rounded-3xl text-center text-white relative overflow-hidden glass border border-white/10"
                >
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-4xl font-bold mb-6">
                            Palestras e cursos para implementação segura da Lei 14.133/2021
                        </h3>
                        <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                            Na VG Capacitação, transformar conhecimento em resultado é o nosso propósito.
                            Nossa abordagem conecta teoria, jurisprudência e prática: conteúdos objetivos, linguagem acessível e foco em resultados institucionais.
                        </p>
                        <Link
                            href="#portfolio"
                            className="inline-block px-10 py-4 rounded-full bg-vg-gold text-vg-dark font-bold text-lg hover:bg-blue-400 hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
                        >
                            Explorar temas e cursos
                        </Link>
                    </div>

                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-vg-blue/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
                </motion.div>
            </div>
        </section>
    );
}
