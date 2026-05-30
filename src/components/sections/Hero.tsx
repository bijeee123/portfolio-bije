import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, ArrowDown } from "lucide-react";

const initialPills = [
    { label: "JUNIOR WEB DEVELOPER", rot: -8 },
    { label: "FREELANCER", rot: 6 },
    { label: "Frontend", rot: -5 },
    { label: "UI / UX", rot: 4 },
    { label: "Bije ✦", rot: -3 },
];

interface PillType {
    label: string;
    rot: number;
    x: number;
    y: number;
}

export function Hero() {
    const [pills, setPills] = useState<PillType[]>([]);

    useEffect(() => {        
        const randomizePills = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const randomized = initialPills.map((pill) => {
                const minX = -(width * 0.38);
                const maxX = width * 0.38;

                const minY = -(height * 0.28);
                const maxY = height * 0.12;

                return {
                    ...pill,
                    x: Math.random() * (maxX - minX) + minX,
                    y: Math.random() * (maxY - minY) + minY,
                };
            });

            setPills(randomized);
        };

        randomizePills();

        window.addEventListener("resize", randomizePills);
        return () => window.removeEventListener("resize", randomizePills);
    }, []);

    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
        >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                {pills.map((p, i) => (
                    <motion.div
                        key={p.label}
                        initial={{
                            opacity: 0,
                            scale: 0.3,
                            x: p.x,
                            y: -1000
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: p.x,
                            y: p.y,
                            rotate: p.rot,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,      
                            damping: 12,         
                            delay: 0.1 + i * 0.12, 
                        }}
                        className="absolute"
                    >
                        <div className="pill text-xs md:text-sm whitespace-nowrap shadow-hard-sm pointer-events-auto cursor-pointer select-none">
                            {p.label}
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="absolute grid h-16 w-16 place-items-center rounded-full bg-foreground text-background shadow-hard"
                    style={{ y: "-8vh" }}
                >
                    <Code2 className="h-7 w-7" />
                </motion.div>
            </div>

            <div className="relative z-10 mt-16 w-full text-center select-none">
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-[7.5vw] leading-[0.85] font-black uppercase tracking-tighter whitespace-nowrap"
                >
                    ABIZAR ADNAN CAHYA
                </motion.h1>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="font-mono mt-10 max-w-3xl text-center text-xs md:text-sm"
            >
                <span className="text-foreground/70">const</span> INITIALIZE_SYSTEM ={" "}
                <span className="text-foreground/70">async</span> () =&gt; &#123;
                Developer.create(&#123; clarity: true, motion: "Physics_Inspired" &#125;)
                &#125;;
            </motion.p>

            <div className="absolute right-0 bottom-0 left-0 grid grid-cols-2 border-t-2 border-foreground bg-background text-xs md:grid-cols-4 md:text-sm z-20">
                <div className="flex items-center gap-2 border-r-2 border-foreground px-6 py-4">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="font-semibold tracking-widest uppercase">
                        Open To Work
                    </span>
                </div>
                <div className="border-r-2 border-foreground px-6 py-4 font-mono">
                    BASED IN BOGOR, ID
                </div>
                <div className="hidden border-r-2 border-foreground px-6 py-4 font-mono md:block">
                    TODAY: 25 MAY 2026
                </div>
                <a
                    href="#about"
                    className="hidden items-center justify-between px-6 py-4 font-semibold tracking-widest uppercase transition-colors hover:bg-foreground hover:text-background md:flex"
                >
                    Scroll Down <ArrowDown className="h-4 w-4" />
                </a>
            </div>
        </section>
    );
}