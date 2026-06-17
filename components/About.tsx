
"use client";

import CountUp from "react-countup";
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

export default function About() {
    return (
        <section
            id="about"
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
          top-20
          right-20
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[140px]
        "
            />

            <div
                className="
          absolute
          bottom-10
          right-40
          w-[250px]
          h-[250px]
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
            />

            <div
                className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
            >
                {/* Left Column */}
                <div>
                    <p
                        className="
              uppercase
              tracking-[0.35em]
              text-[#D4AF37]
              text-sm
              mb-8
            "
                    >
                        About Us
                    </p>

                    <p
                        className="
              text-lg
              md:text-xl
              leading-relaxed
              tracking-wide
              text-white/80
              max-w-2xl
            "
                    >
                        Woods Events Creations specializes in crafting elegant
                        weddings, memorable birthday celebrations, corporate
                        gatherings, premium catering experiences, and customized
                        event solutions. Every event is designed with creativity,
                        precision, and attention to detail to create moments that
                        last forever.
                    </p>
                </div>

                {/* Right Column */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="
              rounded-3xl
              border
              border-white/15
              bg-white/[0.07]
              backdrop-blur-xl
              p-8
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              hover:-translate-y-4
hover:border-[#D4AF37]/40
            "
                    >
                        <h3
                            className="
                text-5xl
                font-bold
                text-[#D4AF37]
              "
                        >
                            <CountUp end={500} duration={2.5} />+
                        </h3>

                        <p
                            className="
                mt-3
                text-sm
                uppercase
                tracking-[0.2em]
                text-white/70
              "
                        >
                            Events Managed
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="
              rounded-3xl
              border
              border-white/15
              bg-white/[0.07]
              backdrop-blur-xl
              p-8
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              hover:-translate-y-4
hover:border-[#D4AF37]/40
            "
                    >
                        <h3
                            className="
                text-5xl
                font-bold
                text-[#D4AF37]
              "
                        >
                            <CountUp end={100} duration={2.5} />+
                        </h3>

                        <p
                            className="
                mt-3
                text-sm
                uppercase
                tracking-[0.2em]
                text-white/70
              "
                        >
                            Happy Clients
                        </p>
                    </motion.div>

                    {/* Wide Card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="
              col-span-2
              rounded-3xl
              border
              border-white/15
              bg-white/[0.07]
              backdrop-blur-xl
              p-10
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              hover:-translate-y-4
hover:border-[#D4AF37]/40
            "
                    >
                        <h3
                            className="
                text-6xl
                font-bold
                text-[#D4AF37]
              "
                        >
                            <CountUp end={10} duration={2} />+
                        </h3>

                        <p
                            className="
                mt-4
                text-sm
                uppercase
                tracking-[0.25em]
                text-white/70
              "
                        >
                            Premium Services
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
