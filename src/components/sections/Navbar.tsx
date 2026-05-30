import { motion } from "framer-motion";

const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
        >
            <nav className="flex items-center gap-2 rounded-full border-2 border-foreground bg-background/90 px-3 py-2 shadow-hard-sm backdrop-blur">
                <a
                    href="#home"
                    className="grid h-9 w-9 place-items-center rounded-full bg-foreground font-mono text-sm font-bold text-background"
                >
                    S
                </a>
                <ul className="hidden items-center gap-1 px-2 md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-foreground hover:text-background"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
