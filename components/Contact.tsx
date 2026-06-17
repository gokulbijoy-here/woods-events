
"use client";

import { motion } from "framer-motion";
import { HoverButton } from "@/components/ui/HoverButton";

export default function Contact() {

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <section
            id="contact"
            className="
        relative
        overflow-hidden
        bg-[#07192F]
        py-32
        px-6
        md:px-12
      "
        >
            {/* Ambient Glow */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[180px]
        "
            />

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative z-10 max-w-5xl mx-auto text-center"
            >                <p
                className="
            uppercase
            tracking-[0.35em]
            text-[#D4AF37]
            text-sm
            mb-6
          "
            >
                    Contact Us
                </p>

                <h2
                    className="
            text-4xl
            md:text-6xl
            text-white
            font-serif
            leading-tight
          "
                >
                    Let's Bring Your Vision To Life
                </h2>

                <p
                    className="
            mt-8
            text-white/70
            max-w-2xl
            mx-auto
            text-lg
            leading-relaxed
          "
                >
                    Whether it's a wedding, birthday celebration, corporate
                    gathering, or a special occasion, we're ready to create
                    an unforgettable experience tailored perfectly for you.
                </p>

                {/* Contact Cards */}
                <div
                    className="
            mt-16
            grid
            md:grid-cols-2
            gap-8
            max-w-3xl
            mx-auto
          "
                >
                    {/* Phone */}
                    <div
                        className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              p-8
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            "
                    >
                        <p
                            className="
                text-[#D4AF37]
                uppercase
                tracking-[0.2em]
                text-sm
              "
                        >
                            Phone
                        </p>

                        <p className="text-white text-2xl mt-4">
                            +91 98765 43210
                        </p>
                    </div>

                    {/* Email */}
                    <div
                        className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              p-8
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            "
                    >
                        <p
                            className="
                text-[#D4AF37]
                uppercase
                tracking-[0.2em]
                text-sm
              "
                        >
                            Email
                        </p>

                        <p className="text-white text-lg mt-4 break-all">
                            info@woodsevents.com
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12">
                    <a href="tel:+919876543210">
                        <HoverButton>
                            CALL NOW
                        </HoverButton>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

