"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export default function Background3D() {
    const vantaRef = useRef<HTMLDivElement>(null)
    const vantaEffect = useRef<any>(null)

    useEffect(() => {
        const initVanta = () => {
            if (
                !vantaEffect.current &&
                vantaRef.current &&
                (window as any).VANTA
            ) {
                vantaEffect.current = (window as any).VANTA.BIRDS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200,
                    minWidth: 200,
                    backgroundColor: 0x07192F,  // ← navy blue
                    color1: 0xd4af37,
                    color2: 0xffffff,
                    birdSize: 0.6,               // ← smaller birds (was 1.2)
                    quantity: 5,                 // ← fewer birds
                    speedLimit: 3,
                    wingSpan: 20,
                    separation: 60,
                    alignment: 40,
                    cohesion: 35,
                })
            }
        }

        // Retry until VANTA loads
        const interval = setInterval(() => {
            if ((window as any).VANTA) {
                initVanta()
                clearInterval(interval)
            }
        }, 100)

        return () => {
            clearInterval(interval)
            if (vantaEffect.current) {
                vantaEffect.current.destroy()
                vantaEffect.current = null
            }
        }
    }, [])

    return (
        <>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js" strategy="beforeInteractive" />
            <div ref={vantaRef} className="absolute inset-0 z-0" />
        </>
    )
}