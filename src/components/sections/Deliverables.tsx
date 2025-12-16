"use client";

import { FileText, CheckSquare, GitPullRequest, BarChart3, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Deliverables() {
    return (
        <section id="entregaveis" className="py-24 relative scroll-mt-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-vg-gold font-bold tracking-wider uppercase text-sm mb-3 block">
                        Resultados
                    </span>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-8">
                        O que entregamos
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Entregáveis */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl border border-white/10 h-full"
                    >
                        <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                            <span className="bg-vg-blue/20 p-3 rounded-xl text-blue-300 border border-vg-blue/30">
                                <FileText size={32} />
                            </span>
                            Entregáveis
                            <span className="text-sm font-normal text-gray-400 ml-auto block sm:inline">
                                (conforme contrato)
                            </span>
                        </h3>

                        <ul className="space-y-8">
                            <li className="flex gap-5 group">
                                <FileText className="text-vg-blue-light shrink-0 group-hover:text-vg-gold transition-colors" size={28} />
                                <div>
                                    <strong className="block text-white text-lg mb-1">Modelos editáveis</strong>
                                    <p className="text-gray-400 text-sm">DFD, ETP, TR, Mapa/Matriz de Riscos, minutas-base (quando couber).</p>
                                </div>
                            </li>
                            <li className="flex gap-5 group">
                                <CheckSquare className="text-vg-blue-light shrink-0 group-hover:text-vg-gold transition-colors" size={28} />
                                <div>
                                    <strong className="block text-white text-lg mb-1">Checklists de conformidade</strong>
                                    <p className="text-gray-400 text-sm">Listas de verificação detalhadas por fase do processo.</p>
                                </div>
                            </li>
                            <li className="flex gap-5 group">
                                <GitPullRequest className="text-vg-blue-light shrink-0 group-hover:text-vg-gold transition-colors" size={28} />
                                <div>
                                    <strong className="block text-white text-lg mb-1">Fluxos de processo “TO-BE”</strong>
                                    <p className="text-gray-400 text-sm">Desenho de fluxos com definição clara de papéis e prazos.</p>
                                </div>
                            </li>
                            <li className="flex gap-5 group">
                                <BarChart3 className="text-vg-blue-light shrink-0 group-hover:text-vg-gold transition-colors" size={28} />
                                <div>
                                    <strong className="block text-white text-lg mb-1">Planilhas de apoio</strong>
                                    <p className="text-gray-400 text-sm">Estimativa de preços e roteiro de publicação no PNCP.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Diferenciais Específicos */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-indigo-900/50 to-blue-900/30 rounded-3xl p-10 text-white border border-white/10 backdrop-blur-md h-full"
                    >
                        <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                            <span className="bg-vg-gold/20 p-3 rounded-xl text-vg-gold border border-vg-gold/30">
                                <Zap size={32} />
                            </span>
                            Diferenciais 14.133/21
                        </h3>

                        <div className="space-y-8">
                            {[
                                { id: 1, title: "Implementação prática", desc: "Do desenho de fluxos à produção real de documentos (PCA, DFD, ETP, TR)." },
                                { id: 2, title: "Conformidade e evidências", desc: "Foco absoluto em trilhas documentais e regularidade no PNCP." },
                                { id: 3, title: "Capacitação orientada a entregas", desc: "Oficinas realizadas com objetos reais do órgão, gerando valor imediato." },
                                { id: 4, title: "Gestão de riscos e resultados", desc: "Métricas de desempenho e foco na melhoria contínua dos processos." }
                            ].map((item) => (
                                <div key={item.id} className="flex gap-5">
                                    <div className="mt-1 w-10 h-10 rounded-full bg-vg-gold text-vg-dark flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-blue-500/20">
                                        {item.id}
                                    </div>
                                    <div>
                                        <strong className="block text-xl mb-2 text-white">{item.title}</strong>
                                        <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
