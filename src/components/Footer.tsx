import Link from "next/link";
import Image from "next/image";
import logoVG from "@/assets/logovg.png";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-vg-dark-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-6">
                            <Image
                                src={logoVG}
                                alt="VG Capacitação"
                                className="h-14 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Transformando conhecimento em resultado. Soluções educacionais
                            para o setor público com foco em segurança jurídica e eficiência.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-vg-gold">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#quem-somos" className="text-gray-300 hover:text-white hover:pl-1 transition-all">
                                    Quem Somos
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" className="text-gray-300 hover:text-white hover:pl-1 transition-all">
                                    Portfólio Palestras
                                </Link>
                            </li>
                            <li>
                                <Link href="#metodologia" className="text-gray-300 hover:text-white hover:pl-1 transition-all">
                                    Metodologia
                                </Link>
                            </li>
                            <li>
                                <Link href="#entregaveis" className="text-gray-300 hover:text-white hover:pl-1 transition-all">
                                    Diferenciais
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-vg-gold">Fale Conosco</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <Mail className="mt-1 shrink-0 text-vg-blue" size={18} />
                                <span>contato@vgcapacitacao.com.br</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Phone className="mt-1 shrink-0 text-vg-blue" size={18} />
                                <span>(41) 99999-9999</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="mt-1 shrink-0 text-vg-blue" size={18} />
                                {/* Placeholder address */}
                                <span>Curitiba - PR</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} VG Capacitação. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
