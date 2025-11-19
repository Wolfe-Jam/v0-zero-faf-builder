'use client'

import { useEffect } from 'react'

export function ConsoleEasterEgg() {
  useEffect(() => {
    // Console easter egg
    console.log('%c🍊 I/🍊 enjoy the squeeze! @elonmusk', 
      'font-size: 20px; font-weight: bold; color: #ff8800; text-shadow: 2px 2px 4px rgba(255, 136, 0, 0.5);'
    )
    console.log('%cZero-FAF-Builder initialized with ZERO faff! 🚀', 
      'font-size: 16px; color: #ff8800;'
    )
    console.log('%cGrok-ready · MCP live · Born knowing everything', 
      'font-size: 14px; color: #888; font-style: italic;'
    )
  }, [])

  return null
}
