"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Target, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lectures = [
    {
        id: 1,
        title: "Implementação da Lei 14.133/21 nos Órgãos Públicos",
        synopsis: "Visão sistêmica da nova lei, pilares de governança, fases do processo, ajustes normativos internos e plano 30-60-90 dias para a transição.",
        objectives: "(i) esclarecer impactos práticos da migração; (ii) orientar a estruturação de fluxos e papéis; (iii) apresentar roteiro de implantação."
    },
    {
        id: 2,
        title: "Governança das Contratações e Papéis",
        synopsis: "Segregação de funções, responsabilidades, accountability e integração com controle interno/assessorias.",
        objectives: "Definir papéis com clareza, reduzir riscos de responsabilização e alinhar rotinas entre áreas."
    },
    {
        id: 3,
        title: "Planejamento Estratégico: PCA, DFD e ETP na Prática",
        synopsis: "Centralidade do planejamento; como articular PCA ↔ DFD ↔ ETP e produzir memórias de cálculo, resultados pretendidos e análise de alternativas.",
        objectives: "Padronizar entregáveis; elevar qualidade técnica dos estudos; reduzir retrabalho."
    },
    {
        id: 4,
        title: "Termo de Referência e Especificações Técnicas",
        synopsis: "Estrutura do TR na 14.133/21, elementos obrigatórios/facultativos, critérios de aceitação, medição de resultados e coerência com o ETP.",
        objectives: "Produzir TRs objetivos, competitivos e juridicamente seguros."
    },
    {
        id: 5,
        title: "Gestão de Riscos: do Mapa à Matriz de Riscos Contratual",
        synopsis: "Conceitos, identificação, análise e tratamento; integração com governança; responsabilidades e compartilhamento de riscos.",
        objectives: "Incorporar gestão de riscos ao ciclo de contratação e ao contrato."
    },
    {
        id: 6,
        title: "Estimativa de Preços e Demonstração da Vantajosidade",
        synopsis: "Fontes, amostras, tratamento de outliers, registro metodológico e evidências; diferenças entre preço estimado, teto e valor adjudicado.",
        objectives: "Padronizar pesquisa de preços e fortalecer a justificativa de vantajosidade."
    },
    {
        id: 7,
        title: "Formação de Agente de Contratação e Pregoeiro",
        synopsis: "Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo; Responsabilidades, obrigações e deveres do Agente de Contratação, as decisões que devem ser tomados pelos agentes.",
        objectives: "Formação de Agentes de Contratação e Pregoeiro na pratica."
    },
    {
        id: 8,
        title: "Contratações Diretas: Dispensa, Inexigibilidade e Credenciamento",
        synopsis: "Hipóteses, requisitos, justificativas, risco probatório e controles; documentação mínima e boas práticas.",
        objectives: "Reduzir riscos de responsabilização e padronizar relatórios/peças técnicas."
    },
    {
        id: 9,
        title: "PNCP e Transparência: o que, quando e como publicar",
        synopsis: "Obrigações de publicidade, integração com sistemas internos e trilhas de auditoria; governança da publicação.",
        objectives: "Garantir regularidade de publicações e reforçar transparência ativa."
    },
    {
        id: 10,
        title: "Gestão e Fiscalização Contratual",
        synopsis: "Designação e rotinas; relatórios, ocorrências, alterações, reajuste/repactuação, reequilíbrio, garantias e sanções.",
        objectives: "Fortalecer a execução contratual e a evidência documental."
    },
    {
        id: 11,
        title: "Sistema de Registro de Preços (SRP) e Gestão de Atas",
        synopsis: "Quando usar, como estruturar, gerenciamento de demandas, adesões (quando cabível) e controle de saldo de ata. ",
        objectives: "Usar SRP de forma eficiente, com governança e segurança."
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 relative scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-vg-gold font-bold tracking-wider uppercase text-sm mb-3 block">
                        Capacitação & Desenvolvimento
                    </span>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-8">
                        Temas e Soluções <br />
                        <span className="text-vg-blue-light">Lei 14.133/2021</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-xl">
                        Conheça nossos principais módulos de treinamento, desenhados para a realidade prática dos órgãos públicos.
                    </p>
                </div>

                <div className="flex flex-col gap-10">
                    {lectures.map((lecture, i) => (
                        <Card key={lecture.id} lecture={lecture} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Card = ({ lecture, index }: { lecture: any, index: number }) => {
    return (
        <div
            className="sticky h-fit flex items-center justify-center mb-10"
            style={{
                top: `120px`, // Constant top for full replacement effect
                zIndex: index + 1,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[453px] h-[517px] md:max-w-[1277px] md:h-[410px] mx-auto bg-[#0B1120] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative group"
            >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-vg-blue/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-vg-gold/10 transition-colors duration-500" />

                <div className="p-6 md:p-14 flex flex-col justify-center h-full relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 relative">
                            {/* Number - Absolute top-right on mobile, normal flow on desktop */}
                            <span className="absolute top-0 right-0 md:static md:top-auto md:right-auto w-10 h-10 md:w-12 md:h-12 rounded-full md:rounded-xl bg-vg-gold/10 flex items-center justify-center text-vg-gold font-bold text-lg md:text-xl border border-vg-gold/20">
                                {lecture.id}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight group-hover:text-vg-gold-light transition-colors text-left pr-12 md:pr-0">
                                {lecture.title}
                            </h3>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 mb-10 pl-0 md:pl-16">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-vg-blue-light uppercase tracking-wider mb-4">
                                <BookOpen size={16} />
                                <span>Sinopse</span>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {lecture.synopsis}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-vg-blue-light uppercase tracking-wider mb-4">
                                <Target size={16} />
                                <span>Objetivos</span>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {lecture.objectives}
                            </p>
                        </div>
                    </div>

                    <div className="pl-0 md:pl-16">
                        <Link
                            href={`/?tema=${encodeURIComponent(lecture.title)}#contato`}
                            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-vg-gold text-vg-dark font-bold hover:bg-white hover:text-vg-dark transition-all text-base shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Solicitar Proposta
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
