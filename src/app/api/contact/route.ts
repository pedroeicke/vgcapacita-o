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

        // 1. Admin Email (Nova Proposta Personalizada)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'contato@vgcapacitacao.com.br', // Admin email
            subject: 'Nova Proposta Personalizada - Site VG',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #002855; border-bottom: 2px solid #ffb703; padding-bottom: 10px;">Nova Solicitação de Proposta</h2>
                    
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
                    <p><strong>Órgão/Entidade:</strong> ${orgao}</p>
                    <p><strong>Cidade/Estado:</strong> ${cidade}</p>
                    <p><strong>Modalidade:</strong> ${modalidade}</p>
                    
                    <h3 style="color: #002855; margin-top: 20px;">Temas de Interesse:</h3>
                    <ul>
                        ${temas.map((tema: string) => `<li>${tema}</li>`).join('')}
                    </ul>
                    
                    <h3 style="color: #002855; margin-top: 20px;">Mensagem Adicional:</h3>
                    <p style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">${mensagem || 'Nenhuma mensagem adicional.'}</p>
                </div>
            `,
        };

        // 2. Client Confirmation Email (Recebemos Sua Proposta)
        const clientMailOptions = {
            from: process.env.EMAIL_USER,
            to: email, // Client email
            subject: 'Recebemos Sua Proposta - VG Capacitação',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 10px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #002855; margin: 0;">VG Capacitação</h1>
                        <p style="color: #ffb703; margin: 5px 0 0 0; font-weight: bold;">Soluções Governamentais</p>
                    </div>

                    <h2 style="color: #002855;">Olá, ${nome}.</h2>
                    
                    <p style="font-size: 16px; line-height: 1.5; color: #334155;">
                        Recebemos sua solicitação de proposta personalizada com sucesso!
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.5; color: #334155;">
                        Nossa equipe técnica já está analisando suas necessidades e o perfil do seu órgão: <strong>${orgao}</strong>.
                    </p>
                    
                    <div style="background-color: #fff; padding: 15px; border-left: 4px solid #ffb703; margin: 20px 0;">
                        <p style="margin: 0; color: #555;">Em breve, um de nossos consultores entrará em contato para apresentar a solução ideal.</p>
                    </div>

                    <p style="font-size: 14px; color: #888; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
                        Atenciosamente,<br>
                        <strong>Equipe VG Capacitação</strong><br>
                        <a href="https://vgcapacitacao.com.br" style="color: #0077b6; text-decoration: none;">www.vgcapacitacao.com.br</a>
                    </p>
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
