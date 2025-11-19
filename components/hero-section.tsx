'use client'

import { Canvas } from '@react-three/fiber'
import { Orange3D } from './orange-3d'
import { Button } from './ui/button'

export function HeroSection() {
  const handleSqueeze = () => {
    console.log('🍊 SQUEEZE INITIATED!')
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* 3D Orange Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Orange3D />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-balance text-white drop-shadow-2xl">
          Zero-FAF-Builder
        </h1>

        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 flex flex-col gap-2 drop-shadow-md">
          <p>Zero faff from day zero</p>
          <p>IANA-registered .faf context built-in</p>
        </div>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-pretty text-lime-300">
          "Born knowing everything · Grok-ready · MCP live"
        </p>

        <div className="pt-8">
          <Button 
            onClick={handleSqueeze}
            size="lg"
            className="text-2xl md:text-3xl font-black px-12 py-8 h-auto rounded-2xl bg-gradient-to-br from-[oklch(0.85_0.18_60)] to-[oklch(0.65_0.18_60)] hover:from-[oklch(0.9_0.2_60)] hover:to-[oklch(0.7_0.2_60)] text-black shadow-2xl shadow-[oklch(0.75_0.18_60/0.5)] hover:shadow-[oklch(0.75_0.18_60/0.8)] transition-all duration-300 hover:scale-105"
          >
            🍊 SQUEEZE TO BUILD
          </Button>
        </div>
      </div>
    </section>
  )
}
