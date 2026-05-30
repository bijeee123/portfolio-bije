import { useState } from "react";
import { Reveal } from "../Reveal";
import { ExternalLink, ArrowUpRight, X } from "lucide-react";

interface Project {
    tag: string;
    title: string;
    desc: string;
    stats: { v: string; l: string }[];
    stack: string[];
    link: string;
    livelink: string;
    image: string;
    accent: string;
}

const projects: Project[] = [
    {
        tag: "Full-Stack Web App",
        title: "Sistem Inventaris",
        desc: "Aplikasi manajemen stok barang terintegrasi dengan fitur pelaporan otomatis dan pembagian hak akses pengguna.",
        stats: [
            { v: "Real Time", l: "Stocks Update" },
            { v: "Automated", l: "Reporting" },
            { v: "Secure", l: "User Access" },
        ],
        stack: ["Laravel MVC", "MySQL", "Tailwind", "AOS"],
        link: "https://github.com/bijeee123/Inventaris/blob/master/README_project.md",
        livelink: "https://github.com/bijeee123/Inventaris",
        image: "/Inventory.png",
        accent: "bg-card",
    },
    {
        tag: "Web Game API",
        title: "CheapShark Game",
        desc: "Platform pencarian diskon game terbaik yang mengintegrasikan CheapShark API dengan antarmuka yang responsif.",
        stats: [
            { v: "Fast", l: "API Fetching" },
            { v: "Dynamic", l: "Search" },
            { v: "Responsive", l: "UI Layout" },
        ],
        stack: ["React JS", "Tailwind"],
        link: "https://github.com/bijeee123/cheapshark",
        livelink: "https://bijeee123.github.io/cheapshark/",
        image: "/Cheapshark.png",
        accent: "bg-secondary",
    },
    {
        tag: "Project DBS",
        title: "EcoLearn",
        desc: "Platform edukasi lingkungan interaktif yang dirancang untuk meningkatkan kesadaran ekologis generasi muda.",
        stats: [
            { v: "Interactive", l: "Learning" },
            { v: "Structured", l: "Database" },
            { v: "Clean", l: "Architecture" },
        ],
        stack: ["HTML", "CSS & Bootstrap", "Axios", "Express"],
        link: "https://github.com/muhammad-ramadhan-fadillah-tjiptadi/Echolearn",
        livelink: "https://muhammad-ramadhan-fadillah-tjiptadi.github.io/Echolearn/",
        image: "/Ecolearn.png",
        accent: "bg-card",
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="border-t-2 border-foreground px-6 py-24 md:py-32">
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <h2 className="font-display text-5xl font-black tracking-tight md:text-7xl">
                        Selected <span className="italic font-light">Works</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        A showcase of functional web solutions focused on data accuracy,
                        automation, and user experience.
                    </p>
                </Reveal>

                <div className="mt-16 space-y-8">
                    {projects.map((p, i) => (
                        <Reveal key={p.title} delay={i * 0.05}>
                            <article
                                className={`card-hover grid gap-8 rounded-3xl border-2 border-foreground ${p.accent} p-8 shadow-hard md:p-12 lg:grid-cols-2 group`}
                            >
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                            {p.tag}
                                        </span>
                                        <h3 className="font-display mt-3 text-3xl font-black md:text-5xl">
                                            {p.title}
                                        </h3>
                                        <p className="mt-5 text-base text-muted-foreground md:text-lg">
                                            {p.desc}
                                        </p>

                                        <div className="mt-8 grid grid-cols-3 gap-4 border-y-2 border-foreground py-5">
                                            {p.stats.map((s) => (
                                                <div key={s.l}>
                                                    <p className="font-display text-2xl font-black md:text-3xl">
                                                        {s.v}
                                                    </p>
                                                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                                        {s.l}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {p.stack.map((s) => (
                                                <span
                                                    key={s}
                                                    className="rounded-full border border-foreground/30 px-3 py-1 text-xs font-medium"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <a
                                            href={p.link}
                                            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
                                        >
                                            Read Case Study <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                        <a
                                            href={p.livelink}
                                            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
                                        >
                                            Visit Site <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>

                                <div
                                    onClick={() => setSelectedProject(p)}
                                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-foreground bg-[#eaeaea] cursor-pointer group/img"
                                >
                                    {p.image && (
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105 select-none pointer-events-none"
                                        />
                                    )}

                                    <div className="absolute inset-0 grid place-items-center bg-black/0 transition-colors duration-300 group-hover/img:bg-black/20 pointer-events-none">
                                        <div className="font-display text-[12vw] font-black opacity-0 transition-opacity duration-300 group-hover/img:opacity-10 md:text-[6vw] text-white">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                    </div>

                                    <div className="absolute top-4 left-4 rounded-full bg-background/90 border border-foreground/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur shadow-sm z-10">
                                        Preview (Click to view)
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
                        <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

                        <div className="relative z-10 flex max-h-[90vh] max-w-5xl flex-col rounded-3xl border-4 border-foreground bg-card p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-6 animate-scale-up">

                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="absolute -top-4 -right-4 rounded-full border-2 border-foreground bg-card p-2 text-foreground shadow-hard transition-transform hover:scale-110 active:scale-95 z-20"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="overflow-y-auto rounded-xl border-2 border-foreground bg-neutral-100 p-2">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="h-auto w-full rounded-lg object-contain max-h-[65vh]"
                                />
                            </div>

                            <div className="mt-4 flex flex-col gap-3 border-t-2 border-foreground/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <span className="font-mono text-xs font-bold uppercase text-muted-foreground">
                                        {selectedProject.tag}
                                    </span>
                                    <h4 className="font-display text-2xl font-black text-foreground">
                                        {selectedProject.title}
                                    </h4>
                                </div>

                                <a
                                    href={selectedProject.link}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-foreground bg-foreground px-4 py-2.5 text-xs font-bold text-background transition-transform hover:scale-105 active:scale-95"
                                >
                                    Visit Live Site <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}