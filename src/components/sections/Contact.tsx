"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const themes = [
    "Implementação da Lei 14.133/21",
    "Governança das Contratações",
    "Planejamento Estratégico (PCA, DFD, ETP)",
    "Termo de Referência (TR)",
    "Gestão de Riscos",
    "Estimativa de Preços",
    "Agente de Contratação e Pregoeiro",
    "Contratações Diretas",
    "PNCP e Transparência",
    "Gestão e Fiscalização Contratual",
    "SRP e Gestão de Atas"
];

export default function Contact() {
    const searchParams = useSearchParams();
    const preSelectedTheme = searchParams.get("tema");

    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (preSelectedTheme) {
            const match = themes.find(t => preSelectedTheme.includes(t.substring(0, 10)));
            if (match && !selectedThemes.includes(match)) {
                setSelectedThemes([match]);
            }
        }
    }, [preSelectedTheme]);

    const toggleTheme = (theme: string) => {
        if (selectedThemes.includes(theme)) {
            setSelectedThemes(selectedThemes.filter((t) => t !== theme));
        } else {
            setSelectedThemes([...selectedThemes, theme]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            nome: (e.target as any).nome.value,
            email: (e.target as any).email.value,
            telefone: (e.target as any).telefone.value,
            orgao: (e.target as any).orgao.value,
            cidade: (e.target as any).cidade.value,
            modalidade: (e.target as any).modalidade.value,
            temas: selectedThemes,
            mensagem: (e.target as any).mensagem.value
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                alert(`Erro: ${data.error}`);
            }
        } catch (error) {
            console.error(error);
            alert('Erro de conexão. Verifique sua internet.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contato" className="py-24 relative scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto glass rounded-3xl shadow-2xl overflow-hidden border border-white/10"
                >
                    <div className="p-8 md:p-14">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-sans font-bold text-white mb-6">
                                Solicite uma proposta personalizada
                            </h2>
                            <p className="text-gray-300 text-lg">
                                Preencha os dados abaixo para receber um orçamento adaptado à realidade do seu órgão.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="text-center py-24 animate-fade-in">
                                <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Solicitação Enviada!</h3>
                                <p className="text-gray-300 max-w-md mx-auto">
                                    Agradecemos o contato. Nossa equipe retornará em breve com a proposta solicitada.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-10 text-vg-gold font-semibold hover:text-white transition-colors underline"
                                >
                                    Enviar nova solicitação
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">Nome Completo</label>
                                        <input required name="nome" type="text" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-vg-blue focus:border-transparent outline-none transition-all hover:bg-white/10" placeholder="Seu nome" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">E-mail Institucional</label>
                                        <input required name="email" type="email" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-vg-blue focus:border-transparent outline-none transition-all hover:bg-white/10" placeholder="seu.email@orgao.gov.br" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">Telefone / WhatsApp</label>
                                        <input required name="telefone" type="tel" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-vg-blue focus:border-transparent outline-none transition-all hover:bg-white/10" placeholder="(XX) 99999-9999" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">Órgão / Entidade</label>
                                        <input required name="orgao" type="text" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-vg-blue focus:border-transparent outline-none transition-all hover:bg-white/10" placeholder="Ex: Prefeitura de Curitiba" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">Cidade / Estado</label>
                                        <input required name="cidade" type="text" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-vg-blue focus:border-transparent outline-none transition-all hover:bg-white/10" placeholder="Ex: Curitiba/PR" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">Modalidade Desejada</label>
                                        <select name="modalidade" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-vg-blue focus:border-transparent outline-none transition-all hover:bg-white/10 [&>option]:text-gray-900">
                                            <option>Selecione...</option>
                                            <option>Presencial (In Company)</option>
                                            <option>Online (Ao Vivo)</option>
                                            <option>Híbrido</option>
                                            <option>A definir</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-4 ml-1">Temas de Interesse (Selecione um ou mais)</label>
                                    <div className="grid sm:grid-cols-2 gap-4 p-5 bg-white/5 rounded-xl border border-white/10">
                                        {themes.map((theme) => (
                                            <label key={theme} className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-white/5">
                                                <input
                                                    type="checkbox"
                                                    className="mt-1 w-5 h-5 accent-vg-gold text-vg-dark-blue rounded focus:ring-offset-0 focus:ring-0"
                                                    checked={selectedThemes.includes(theme)}
                                                    onChange={() => toggleTheme(theme)}
                                                />
                                                <span className="text-sm text-gray-200">{theme}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-3 text-right">
                                        {selectedThemes.length} tema(s) selecionado(s)
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">Mensagem Adicional</label>
                                    <textarea name="mensagem" rows={4} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-vg-blue focus:border-transparent outline-none transition-all hover:bg-white/10" placeholder="Descreva sua necessidade específica..." />
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 rounded-xl bg-vg-gold text-vg-dark font-bold text-xl hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.01]"
                                    >
                                        {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                                        {!isSubmitting && <Send size={22} />}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
