
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const services = [
    {
        title: "Wedding Decoration",
        image: "/images/services/wedding.jpg",
        description:
            "Elegant wedding decor designed to create magical and unforgettable celebrations.",
    },
    {
        title: "Birthday Parties",
        image: "/images/services/birthday.jpg",
        description:
            "Creative birthday experiences tailored for all ages with style and excitement.",
    },
    {
        title: "Corporate Events",
        image: "/images/services/corporate.jpg",
        description:
            "Professional event planning and execution for conferences, launches, and corporate gatherings.",
    },
    {
        title: "Premium Catering",
        image: "/images/services/catering.jpg",
        description:
            "Exceptional catering services with carefully curated menus and premium presentation.",
    },
    {
        title: "Cakes For All Occasions",
        image: "/images/services/cakes.jpg",
        description:
            "Custom-designed cakes crafted to perfectly complement every celebration.",
    },
    {
        title: "Bride & Groom To Be",
        image: "/images/services/bride-groom.jpg",
        description:
            "Specialized pre-wedding celebrations and personalized experiences for couples.",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export default function Services() {
    return (
        <section
            id="services"
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
          left-20
          top-20
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[120px]
        "
            />

            <div
                className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
            >
                <div className="mb-16">
                    <p
                        className="
              uppercase
              tracking-[0.35em]
              text-[#D4AF37]
              text-sm
              mb-4
            "
                    >
                        Services
                    </p>

                    <h2
                        className="
              text-4xl
              md:text-6xl
              font-serif
              text-white
            "
                    >
                        What We Create
                    </h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
                >


                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                        >
                            <Tilt
                                tiltMaxAngleX={8}
                                tiltMaxAngleY={8}
                                perspective={1000}
                                transitionSpeed={1500}
                                scale={1.02}
                                glareEnable={true}
                                glareMaxOpacity={0.08}
                                glarePosition="all"
                                className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#D4AF37]/20
        bg-white/[0.05]
        backdrop-blur-xl
        shadow-[0_20px_50px_rgba(0,0,0,0.35)]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#D4AF37]/60
      "
                            >
                                {/* Gold Glow */}
                                <div
                                    className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]
        "
                                />

                                <div className="relative h-[250px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-115
          "
                                    />

                                    <div
                                        className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          "
                                    />
                                </div>

                                <div className="p-6">
                                    <h3
                                        className="
            text-2xl
            text-white
            font-semibold
            mb-3
          "
                                    >
                                        {service.title}
                                    </h3>

                                    <p
                                        className="
            text-white/70
            leading-relaxed
          "
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
