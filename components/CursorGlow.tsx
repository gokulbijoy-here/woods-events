
"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", updateMouse);

        return () => {
            window.removeEventListener("mousemove", updateMouse);
        };
    }, []);

    return (
        <div
            className="
        pointer-events-none
        fixed
        z-[1]
        w-[400px]
        h-[400px]
        rounded-full
        blur-[120px]
        bg-[#D4AF37]/10
        transition-transform
        duration-200
      "
            style={{
                left: position.x - 200,
                top: position.y - 200,
            }}
        />
    );
}

