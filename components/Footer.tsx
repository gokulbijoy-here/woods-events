
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Footer() {
    return (
        <footer
            className="
        relative
        overflow-hidden
        bg-[#07192F]
        border-t
        border-white/10
        py-24
        px-6
        md:px-12
      "
        >
            {/* Ambient Glow */}
            <div
                className="
          absolute
          bottom-0
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[180px]
        "
            />

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {/* Top */}
                <div
                    className="
            grid
            md:grid-cols-4
            gap-16
            pb-20
          "
                >
                    {/* Brand */}
                    <div>
                        <h3
                            className="
                text-white
                text-xl
                font-semibold
                tracking-[0.3em]
              "
                        >
                            WOODS EVENTS
                        </h3>

                        <p
                            className="
                mt-6
                text-white/50
                leading-relaxed
                text-sm
                max-w-[220px]
              "
                        >
                            Turning moments into memories through
                            elegant celebrations and unforgettable
                            experiences.
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <p
                            className="
                text-white/40
                uppercase
                tracking-[0.3em]
                text-xs
                mb-6
              "
                        >
                            Explore
                        </p>

                        <div className="space-y-4">
                            <Link
                                href="#about"
                                className="block text-white/60 hover:text-white transition"
                            >
                                About
                            </Link>

                            <Link
                                href="#services"
                                className="block text-white/60 hover:text-white transition"
                            >
                                Services
                            </Link>

                            <Link
                                href="#instagram"
                                className="block text-white/60 hover:text-white transition"
                            >
                                Instagram
                            </Link>

                            <Link
                                href="#contact"
                                className="block text-white/60 hover:text-white transition"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p
                            className="
                text-white/40
                uppercase
                tracking-[0.3em]
                text-xs
                mb-6
              "
                        >
                            Services
                        </p>

                        <div className="space-y-4 text-white/60">
                            <p>Wedding Decoration</p>
                            <p>Birthday Parties</p>
                            <p>Corporate Events</p>
                            <p>Premium Catering</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p
                            className="
                text-white/40
                uppercase
                tracking-[0.3em]
                text-xs
                mb-6
              "
                        >
                            Contact
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:info@woodsevents.com"
                                className="block text-white/60 hover:text-white transition"
                            >
                                info@woodsevents.com
                            </a>

                            <a
                                href="tel:+919876543210"
                                className="block text-white/60 hover:text-white transition"
                            >
                                +91 98765 43210
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    className="
            border-t
            border-white/10
            pt-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
                >
                    <p
                        className="
              text-white/30
              text-xs
              tracking-widest
            "
                    >
                        © 2026 WOODS EVENTS. ALL RIGHTS RESERVED.
                    </p>

                    <p
                        className="
              text-white/30
              text-xs
              tracking-widest
            "
                    >
                        KERALA, INDIA
                    </p>
                </div>
            </motion.div>
        </footer>
    );
}

