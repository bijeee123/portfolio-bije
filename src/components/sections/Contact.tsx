import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "../Reveal";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);
        setStatus("idle");

        const SERVICE_ID = "service_hzrdthr";
        const TEMPLATE_ID = "template_qmkymcb"; 
        const PUBLIC_KEY = "ULvEUCzDr1fDXDL5w"; 

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                () => {
                    setStatus("success");
                    setIsSending(false);
                    formRef.current?.reset();
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("error");
                    setIsSending(false);
                }
            );
    };

    return (
        <section
            id="contact"
            className="border-t-2 border-foreground bg-foreground px-6 py-24 text-background md:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <h2 className="font-display text-5xl font-black tracking-tight md:text-8xl">
                        Let's Start{" "}
                        <span className="italic font-light">A Project</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg opacity-70">
                        Interested in working together? Drop me a direct email or fill the
                        form. Available for freelance & full-time roles.
                    </p>
                </Reveal>

                <div className="mt-16 grid gap-8 lg:grid-cols-5">
                    <Reveal delay={0.1} className="lg:col-span-2">
                        <div className="space-y-6">
                            <div className="card-hover rounded-3xl border-2 border-background bg-background p-8 text-foreground">
                                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                    Direct Email
                                </p>
                                <a
                                    href="mailto:abizarcahya559@gmail.com"
                                    className="font-display mt-2 block text-xl font-bold md:text-2xl"
                                >
                                    abizarcahya559@gmail.com
                                </a>
                                <Mail className="mt-4 h-6 w-6" />
                            </div>

                            <div className="card-hover rounded-3xl border-2 border-background bg-background p-8 text-foreground">
                                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                    Social Presence
                                </p>
                                <div className="mt-4 grid gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/abizar-adnan-cahya-927766347/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between rounded-full border-2 border-foreground px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
                                    >
                                        <span className="flex items-center gap-3">
                                            LinkedIn
                                        </span>
                                        <span>→</span>
                                    </a>

                                    <a
                                        href="https://github.com/bijeee123"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between rounded-full border-2 border-foreground px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
                                    >
                                        <span className="flex items-center gap-3">
                                            GitHub
                                        </span>
                                        <span>→</span>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/zarzz_aja/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between rounded-full border-2 border-foreground px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
                                    >
                                        <span className="flex items-center gap-3">
                                            Instagram
                                        </span>
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2} className="lg:col-span-3">
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="card-hover space-y-5 rounded-3xl border-2 border-background bg-background p-8 text-foreground md:p-10"
                        >
                            <div className="grid gap-5 md:grid-cols-2">
                                <Field label="Your Name" name="from_name" placeholder="User 123" required />
                                <Field label="Your Email" name="reply_to" placeholder="User@example.com" type="email" required />
                            </div>
                            <div>
                                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                    Subject
                                </label>
                                <select 
                                    name="subject"
                                    className="mt-2 w-full rounded-2xl border-2 border-foreground bg-background px-4 py-3 text-sm font-medium focus:outline-none"
                                >
                                    <option>Project Collaboration</option>
                                    <option>Job Opportunity</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="mt-2 w-full resize-none rounded-2xl border-2 border-foreground bg-background px-4 py-3 text-sm focus:outline-none"
                                />
                            </div>

                            {status === "success" && (
                                <div className="flex items-center gap-2 rounded-2xl border-2 border-green-500 bg-green-50 p-4 text-sm font-semibold text-green-700">
                                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                                    Pesan berhasil dikirim! Silakan cek inbox Gmail kamu.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="flex items-center gap-2 rounded-2xl border-2 border-red-500 bg-red-50 p-4 text-sm font-semibold text-red-700">
                                    <AlertCircle className="h-5 w-5 shrink-0" />
                                    Gagal mengirim pesan. Silakan coba beberapa saat lagi.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSending}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-sm font-bold tracking-widest text-background uppercase transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none"
                            >
                                {isSending ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </Reveal>
                </div>

                <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-background/20 pt-8 text-xs opacity-60 md:flex-row md:items-center">
                    <p>© 2026 Abizar Adnan Cahya. All Rights Reserved.</p>
                    <p className="font-mono uppercase tracking-widest">
                        Based in Bogor ID · Still Studying 
                    </p>
                </div>
            </div>
        </section>
    );
}

function Field({
    label,
    name,
    placeholder,
    type = "text",
    required = false,
}: {
    label: string;
    name: string;
    placeholder: string;
    type?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className="mt-2 w-full rounded-2xl border-2 border-foreground bg-background px-4 py-3 text-sm focus:outline-none"
            />
        </div>
    );
}