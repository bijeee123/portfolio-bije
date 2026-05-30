import { useState } from "react";
import { Reveal } from "../Reveal";
import { Download, Award, User, X } from "lucide-react";

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    img: string;
}

export function About() {
    const [activeTab, setActiveTab] = useState<"about" | "certificates">("about");
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const certificatesList: Certificate[] = [
        {
            title: "Frontend Pemula",
            issuer: "Dicoding Indonesia",
            date: "26 Februari 2025",
            img: "/sertifikat_frontend.png"
        },
        {
            title: "Dasar Pemrograman",
            issuer: "Dicoding Indonesia",
            date: "10 Januari 2025",
            img: "/sertifikat_pemrograman.png"
        },
        {
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "07 November 2024",
            img: "/sertifikat_dicoding.png"
        },
        {
            title: "Sertifikat K3",
            issuer: "International Labour Organizatin",
            date: "02 September 2024",
            img: "/sertifikat_k3.png"
        }
    ];

    return (
        <section id="about" className="border-t-2 border-foreground px-6 py-24 md:py-32">
            <div className="mx-auto max-w-7xl">

                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b-2 border-foreground/10 pb-6 mb-16">
                    <Reveal>
                        <h2 className="font-display text-5xl font-black tracking-tight md:text-7xl">
                            {activeTab === "about" ? (
                                <>About <span className="italic font-light">Me</span></>
                            ) : (
                                <>My <span className="italic font-light">Certificates</span></>
                            )}
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="inline-flex gap-2 rounded-2xl border-2 border-foreground bg-card p-1.5 shadow-hard">
                            <button
                                type="button"
                                onClick={() => setActiveTab("about")}
                                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all ${activeTab === "about"
                                    ? "bg-foreground text-background"
                                    : "hover:bg-neutral-100 text-foreground"
                                    }`}
                            >
                                <User className="h-4 w-4" /> About
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("certificates")}
                                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all ${activeTab === "certificates"
                                    ? "bg-foreground text-background"
                                    : "hover:bg-neutral-100 text-foreground"
                                    }`}
                            >
                                <Award className="h-4 w-4" /> Sertif
                            </button>
                        </div>
                    </Reveal>
                </div>

                {activeTab === "about" ? (
                    <div className="grid gap-8 lg:grid-cols-3">
                        <Reveal delay={0.1} className="lg:col-span-2">
                            <div className="card-hover flex h-full flex-col justify-between rounded-3xl border-2 border-foreground bg-card p-8 shadow-hard md:p-10">
                                <div>
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground text-2xl">
                                        👋
                                    </div>
                                    <h3 className="font-display text-3xl font-bold md:text-4xl">
                                        Hi, I'm Abizar Adnan Cahya
                                    </h3>
                                    <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                                        A passionate Front-End Developer studying Software Engineering at SMK Wikrama Bogor. I
                                        specialize in slicing complex UI designs from Figma into pixel-perfect, highly responsive,
                                        and interactive web applications using modern technologies like React, TypeScript, and Tailwind CSS.
                                    </p>
                                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                                        Experienced in building clean and maintainable client-side architectures, optimizing web performance,
                                        and integrating smooth micro-interactions to deliver exceptional user experiences across all devices.
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href="/CV Abizar Adnan Cahya.pdf"
                                        download="CV Abizar Adnan Cahya.pdf"
                                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
                                    >
                                        <Download className="h-4 w-4" /> Download Resume
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="card-hover group relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[32px] border-2 border-foreground bg-[#eaeaea] shadow-hard min-h-[350px] lg:min-h-0">
                                <img
                                    src="/Profile.png"
                                    alt="Abizar Adnan Cahya"
                                    className="absolute inset-0 z-10 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 select-none pointer-events-none"
                                />
                                <div className="absolute inset-x-4 bottom-4 z-30 flex items-center justify-between rounded-2xl border border-white/10 bg-black/80 p-4 shadow-lg backdrop-blur-md md:inset-x-6 md:bottom-6 md:p-5">
                                    <div className="text-left text-white">
                                        <p className="font-display text-sm font-bold tracking-tight md:text-base">
                                            @zarzz_aja
                                        </p>
                                        <div className="mt-1 flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                                            Online
                                        </div>
                                    </div>
                                    <a
                                        href="#contact"
                                        className="rounded-xl bg-white px-4 py-2 text-xs font-black tracking-tight text-black shadow-md transition-all hover:bg-neutral-200 active:scale-95 uppercase md:px-5 md:py-2.5"
                                    >
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.15} className="lg:col-span-2">
                            <div className="card-hover rounded-3xl border-2 border-foreground bg-card p-8 shadow-hard">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                                            Studying
                                        </p>
                                        <h4 className="mt-1 text-lg font-semibold text-foreground">
                                            SMK Wikrama Bogor
                                        </h4>
                                        <p className="font-mono text-xs text-muted-foreground mt-0.5">
                                            2024 - 2027
                                        </p>
                                        <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                                            Rekayasa Perangkat Lunak
                                        </h3>
                                    </div>
                                </div>
                                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                    Relevant Coursework
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {[
                                        "Web Programming",
                                        "Database Systems",
                                        "UI/UX Design",
                                    ].map((c) => (
                                        <span
                                            key={c}
                                            className="rounded-full border border-foreground/20 px-3 py-1 text-xs font-medium"
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.25}>
                            <div className="card-hover h-full rounded-3xl border-2 border-foreground bg-secondary p-8 shadow-hard flex flex-col justify-between">
                                <div>
                                    <h4 className="font-display text-2xl font-bold">My Focus</h4>
                                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                                        Mastering modern front-end engineering with React, TypeScript, and Tailwind CSS.
                                        I focus on building robust client-side applications, optimizing performance, and crafting scalable interfaces.
                                    </p>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-foreground/20 bg-background px-3 py-1 text-xs font-medium">
                                        React & TS
                                    </span>
                                    <span className="rounded-full border border-foreground/20 bg-background px-3 py-1 text-xs font-medium">
                                        UI/UX Slicing
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2">
                        {certificatesList.map((cert, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <div
                                    onClick={() => setSelectedCert(cert)}
                                    className="card-hover flex items-center gap-6 rounded-3xl border-2 border-foreground bg-card p-6 shadow-hard cursor-pointer group/cert"
                                >
                                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-foreground bg-secondary">
                                        <img
                                            src={cert.img}
                                            alt={cert.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover/cert:scale-105"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            {cert.issuer}
                                        </span>
                                        <h3 className="font-display text-xl font-bold tracking-tight text-foreground truncate mt-0.5 group-hover/cert:text-neutral-600 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <div className="mt-2 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                                            <span>{cert.date}</span>
                                            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                )}

                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
                        <div className="absolute inset-0" onClick={() => setSelectedCert(null)} />

                        <div className="relative z-10 flex max-h-[90vh] max-w-5xl flex-col rounded-3xl border-4 border-foreground bg-card p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-6 animate-scale-up">

                            <button
                                type="button"
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-4 -right-4 rounded-full border-2 border-foreground bg-card p-2 text-foreground shadow-hard transition-transform hover:scale-110 active:scale-95"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="overflow-y-auto rounded-xl border-2 border-foreground bg-neutral-100 p-2">
                                <img
                                    src={selectedCert.img}
                                    alt={selectedCert.title}
                                    className="h-auto w-full rounded-lg object-contain max-h-[70vh]"
                                />
                            </div>

                            <div className="mt-4 flex flex-col gap-2 border-t-2 border-foreground/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
                                        {selectedCert.issuer}
                                    </span>
                                    <h4 className="font-display text-xl font-bold text-foreground">
                                        {selectedCert.title}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}