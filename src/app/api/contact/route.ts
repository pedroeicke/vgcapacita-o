import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            nome,
            email,
            telefone,
            orgao,
            cidade,
            modalidade,
            temas,
            mensagem
        } = body;

        // Configure transporter with environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const cleanPhone = telefone.replace(/\D/g, '');
        const whatsappLink = `https://wa.me/55${cleanPhone}`;

        // 1. Admin Email (Nova Proposta)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'contato@vgcapacitacao.com.br',
            subject: 'Nova Solicitação de Proposta - Site VG',
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
                    <div style="background-color: #002855; padding: 20px; border-radius: 8px 8px 0 0;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nova Solicitação de Proposta</h2>
                    </div>
                    
                    <div style="border: 1px solid #e2e8f0; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
                        <div style="margin-bottom: 20px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Cliente</strong>
                            <p style="margin: 4px 0 0; font-size: 16px;">${nome}</p>
                            <p style="margin: 2px 0 0; color: #4a5568;">${email}</p>
                            <p style="margin: 2px 0 0; color: #4a5568;">
                                ${telefone} 
                                <a href="${whatsappLink}" style="display: inline-block; margin-left: 8px; color: #25D366; text-decoration: none; font-weight: bold; background: #f0fff4; padding: 2px 8px; border-radius: 4px; border: 1px solid #c6f6d5;">
                                    WhatsApp ↗
                                </a>
                            </p>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                            <div>
                                <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Órgão</strong>
                                <p style="margin: 4px 0 0;">${orgao}</p>
                            </div>
                            <div>
                                <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Cidade</strong>
                                <p style="margin: 4px 0 0;">${cidade}</p>
                            </div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Modalidade</strong>
                            <span style="display: inline-block; background-color: #ebf8ff; color: #2b6cb0; padding: 4px 8px; border-radius: 4px; font-size: 14px; margin-top: 4px;">${modalidade}</span>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Temas de Interesse</strong>
                            <ul style="margin: 8px 0 0; padding-left: 20px; color: #2d3748;">
                                ${temas.map((tema: string) => `<li style="margin-bottom: 4px;">${tema}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div>
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Mensagem</strong>
                            <div style="background-color: #f7fafc; padding: 12px; border-radius: 6px; margin-top: 4px; color: #4a5568; font-style: italic;">
                                "${mensagem || 'Sem mensagem adicional.'}"
                            </div>
                        </div>
                    </div>
                </div>
            `,
        };

        // 2. Client Confirmation Email
        const clientMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Proposta Recebida - VG Capacitação',
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <!-- Header Minimalista -->
                    <div style="text-align: center; padding: 40px 0;">
                        <h1 style="color: #002855; font-size: 24px; letter-spacing: -0.5px; margin: 0;">VG CAPACITAÇÃO</h1>
                        <div style="width: 40px; height: 3px; background-color: #ffb703; margin: 15px auto 0;"></div>
                    </div>

                    <!-- Conteúdo Principal -->
                    <div style="background-color: #ffffff; padding: 40px; border: 1px solid #eaeaea; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
                        <h2 style="margin: 0 0 20px; font-weight: 600; font-size: 20px; color: #111;">Olá, ${nome}.</h2>
                        
                        <p style="font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 25px;">
                            Confirmamos o recebimento da sua solicitação de proposta para o órgão <strong>${orgao}</strong>.
                        </p>
                        
                        <p style="font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 30px;">
                            Nossa equipe técnica já iniciou a análise do seu pedido. Em breve, enviaremos uma proposta personalizada com todos os detalhes e condições especiais.
                        </p>
                        
                        <div style="border-top: 1px solid #eee; margin-top: 30px; padding-top: 30px;">
                            <p style="font-size: 14px; color: #888; margin: 0;">
                                Atenciosamente,<br>
                                <strong style="color: #002855;">Equipe VG Capacitação</strong>
                            </p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; padding: 30px 0; color: #999; font-size: 13px;">
                        <p style="margin: 0;">© ${new Date().getFullYear()} VG Capacitação. Todos os direitos reservados.</p>
                        <a href="https://vgcapacitacao.com.br" style="color: #002855; text-decoration: none; font-weight: 500; margin-top: 10px; display: inline-block;">vgcapacitacao.com.br</a>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        return NextResponse.json({ message: 'Proposta enviada com sucesso!' }, { status: 200 });

    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Erro desconhecido ao enviar.' },
            { status: 500 }
        );
    }
}
