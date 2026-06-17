
"use client";

import Background3D from "./Background3d";
import Image from "next/image";
import { HoverButton } from "@/components/ui/HoverButton";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden"
        >
            <Background3D />

            {/* Ambient Glow */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#07192F]/10
          blur-[140px]
        "
            />

            {/* Hero Content */}
            <div
                className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          min-h-screen
          text-center
          px-6
          pt-56
          md:pt-64
        "
            >
                {/* Logo */}
                <Image
                    src="/images/logo.png"
                    alt="Woods Events"
                    width={900}
                    height={900}
                    priority
                    className="
            w-[240px]
            sm:w-[320px]
            md:w-[400px]
            lg:w-[480px]
            h-auto
            object-contain
            mix-blend-screen
          "
                />

                {/* Subtitle */}
                <h2
                    className="
            mt-10
            text-xl
            md:text-3xl
            font-light
            tracking-wide
            text-white/90
          "
                >
                    Turning moments into memories.
                </h2>

                {/* CTA */}
                <div className="mt-10">
                    <a href="/book-event">
                        <HoverButton
                            className="
                px-10
                py-4
                text-white
                border
                border-[#D4AF37]/40
                hover:border-[#D4AF37]
                transition-all
                duration-300
              "
                        >
                            BOOK EVENT
                        </HoverButton>
                    </a>
                </div>
            </div>
        </section>
    );
}
