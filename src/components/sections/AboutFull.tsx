"use client";

import { Target, Eye, Heart, Check, Users, ShieldCheck, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutFull() {
    return (
        <section id="quem-somos" className="py-24 relative scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-vg-gold font-bold tracking-wider uppercase text-sm mb-3 block">
                        Institucional
                    </span>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-8">
                        Quem Somos
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-xl">
                        A VG Capacitação é uma empresa especializada no desenvolvimento de profissionais do setor público e privado, oferecendo soluções educacionais voltadas para a prática, inovação e excelência na gestão.
                    </p>
                </div>

                {/* Mission Vision Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-card p-6 md:p-8 rounded-2xl border-t-4 border-vg-blue"
                    >
                        <Target className="text-vg-blue-light mb-6" size={48} />
                        <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Capacitar profissionais para que atuem com excelência, responsabilidade e segurança jurídica, contribuindo para a melhoria da gestão pública e privada.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-card p-6 md:p-8 rounded-2xl border-t-4 border-vg-gold"
                    >
                        <Eye className="text-vg-gold mb-6" size={48} />
                        <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Ser referência nacional em capacitação profissional, reconhecida pela qualidade dos conteúdos, excelência dos instrutores e impacto real na atuação dos alunos.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-card p-6 md:p-8 rounded-2xl border-t-4 border-blue-900"
                    >
                        <Heart className="text-blue-500 mb-6" size={48} />
                        <h3 className="text-2xl font-bold text-white mb-4">Nossos Valores</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-vg-gold" /> Ética e transparência</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-vg-gold" /> Compromisso com resultados</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-vg-gold" /> Inovação contínua</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-vg-gold" /> Excelência educacional</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-vg-gold" /> Foco no aluno e na prática</li>
                        </ul>
                    </motion.div>
                </div>

                {/* 3-Column Grid: Solutions, Differentials, Target Audience */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Column 1: O que Fazemos */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass p-6 md:p-8 rounded-3xl border border-white/10 h-full"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-vg-gold rounded-full" />
                            O que Fazemos
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Cursos presenciais e online",
                                "Workshops práticos",
                                "Treinamentos In Company",
                                "Palestras técnicas",
                                "Atualizações legislativas"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                                        <Check className="text-green-400" size={16} />
                                    </div>
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 2: Diferenciais (Highlight) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 md:p-8 rounded-3xl border border-vg-gold/30 h-full bg-gradient-to-b from-vg-gold/10 to-transparent relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Eye size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                            <span className="w-1.5 h-8 bg-vg-gold rounded-full" />
                            Diferenciais
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            {[
                                "Metodologia prática",
                                "Conteúdo atualizado",
                                "Instrutores experientes",
                                "Foco em soluções reais",
                                "Atendimento personalizado"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-vg-gold shadow-[0_0_8px_#fbbf24]" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Público-Alvo */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass p-6 md:p-8 rounded-3xl border border-white/10 h-full"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-vg-gold rounded-full" />
                            Público-Alvo
                        </h3>
                        <div className="space-y-3">
                            {[
                                { label: "Servidores públicos", icon: ShieldCheck },
                                { label: "Gestores e líderes", icon: Users },
                                { label: "Área Jurídica", icon: Briefcase },
                                { label: "Empresas privadas", icon: Target }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
                                    <item.icon className="text-vg-gold" size={20} />
                                    <span className="font-medium text-gray-200">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
