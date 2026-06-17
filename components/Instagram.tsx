"use client";

import Script from "next/script";

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="
        relative
        overflow-hidden
        bg-[#07192F]
        py-32
        px-6
        md:px-12
      "
    >
      {/* Gold Glow */}
      <div
        className="
          absolute
          top-20
          left-20
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[140px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#D4AF37]
                text-sm
                mb-4
              "
            >
              Social
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-serif
                text-white
              "
            >
              INSTAGRAM
            </h2>
          </div>

          <a
            href="https://instagram.com/woods_events"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:block
              text-white/60
              hover:text-white
              transition
            "
          >
            Open Profile →
          </a>
        </div>

        {/* Elfsight Widget */}
        <div
          className="
            rounded-[32px]
            overflow-hidden
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-xl
            shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            p-4
          "
        >
          <div className="elfsight-app-YOUR_WIDGET_ID"></div>
        </div>
      </div>

      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
    </section>
  );
}