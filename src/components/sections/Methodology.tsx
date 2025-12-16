"use client";

import { Laptop, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Methodology() {
    return (
        <section id="metodologia" className="py-24 relative scroll-mt-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid md:grid-cols-2 gap-20">
                    {/* Modalidades */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-vg-blue font-bold tracking-wider uppercase text-sm mb-3 block">
                            Formatos
                        </span>
                        <h2 className="text-4xl font-sans font-bold mb-10 text-[#0B1120]">
                            Modalidades de Ensino
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-8 bg-[#0B1120] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all group border border-blue-900">
                                <div className="bg-white/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-vg-gold/20 transition-colors">
                                    <Laptop className="text-vg-gold group-hover:scale-110 transition-transform" size={40} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">Treinamentos Online</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Flexibilidade e alcance para equipes distribuídas, com a mesma qualidade de conteúdo garantida.
                                </p>
                            </div>

                            <div className="p-8 bg-[#0B1120] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all group border border-blue-900">
                                <div className="bg-white/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-vg-gold/20 transition-colors">
                                    <Users className="text-vg-gold group-hover:scale-110 transition-transform" size={40} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">Treinamentos Presenciais</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Imersão completa e interação direta para resolução de dúvidas e networking estratégico.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Metodologia Didática */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-vg-blue font-bold tracking-wider uppercase text-sm mb-3 block">
                            Como Ensinamos
                        </span>
                        <h2 className="text-4xl font-sans font-bold mb-10 text-[#0B1120]">
                            Metodologia Didática
                        </h2>

                        <div className="space-y-4">
                            {[
                                "Exposição dialogada com exemplos reais.",
                                "Estudos de caso (jurisprudência e boas práticas).",
                                "Exercícios práticos com objetos do próprio órgão.",
                                "Clínica de documentos (revisão e padronização).",
                                "Planos de ação com responsáveis e prazos (30-60-90 dias)."
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 bg-[#1e3a8a] rounded-xl shadow-md border border-blue-800 hover:border-vg-gold transition-all group">
                                    <div className="bg-white/10 p-1.5 rounded-full text-vg-gold shrink-0 group-hover:bg-vg-gold group-hover:text-blue-950 transition-colors">
                                        <CheckCircle size={18} />
                                    </div>
                                    <p className="text-lg text-white font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
