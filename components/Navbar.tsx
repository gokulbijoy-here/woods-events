
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HoverButton } from "@/components/ui/HoverButton";

const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Instagram", href: "#instagram", id: "instagram" },
    { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = [
            "home",
            "about",
            "services",
            "instagram",
            "contact",
        ];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            sections.forEach((section) => {
                const element = document.getElementById(section);

                if (!element) return;

                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">
            <nav
                className="
          relative
          mx-auto
          max-w-3xl
          h-14
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
            >
                <div className="h-full flex items-center justify-center">
                    <div className="flex items-center gap-6 md:gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm transition-all duration-300 ${activeSection === item.id
                                    ? "text-[#D4AF37]"
                                    : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Link href="/book-event">
                        <HoverButton>
                            Book Event
                        </HoverButton>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

