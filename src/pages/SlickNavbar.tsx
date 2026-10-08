import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500']

const BASE = 64 // resting icon size (px)
const MAX = 120 // size of the icon directly under the cursor
const RANGE = 180 // how far (px) from the cursor icons still react
const LIFT = 16 // how high the hovered icon floats

const SlickNavbar = () => {
  const dockRef = useRef<HTMLDivElement>(null)
  const icons = useRef<HTMLDivElement[]>([])
  const shadows = useRef<HTMLDivElement[]>([])

  useLayoutEffect(() => {
    const dock = dockRef.current
    if (!dock) return

    const tween = { duration: 0.25, ease: 'power3.out' }

    const setters = icons.current.map((icon, i) => ({
      icon,
      w: gsap.quickTo(icon, 'width', tween),
      h: gsap.quickTo(icon, 'height', tween),
      y: gsap.quickTo(icon, 'y', tween),
      shadowScale: gsap.quickTo(shadows.current[i], 'scaleX', tween),
      shadowOpacity: gsap.quickTo(shadows.current[i], 'opacity', tween),
    }))

    const apply = (s: (typeof setters)[number], t: number) => {
      const size = BASE + (MAX - BASE) * t
      s.w(size)
      s.h(size)
      s.y(-LIFT * t)
      s.shadowScale(1 - 0.35 * t)
      s.shadowOpacity(0.7 - 0.4 * t)
    }

    const onMove = (e: MouseEvent) => {
      setters.forEach((s) => {
        const rect = s.icon.getBoundingClientRect()
        const dist = Math.abs(e.clientX - (rect.left + rect.width / 2))
        const t = dist < RANGE ? (Math.cos((dist / RANGE) * Math.PI) + 1) / 2 : 0
        apply(s, t)
      })
    }

    const onLeave = () => setters.forEach((s) => apply(s, 0))

    dock.addEventListener('mousemove', onMove)
    dock.addEventListener('mouseleave', onLeave)

    return () => {
      dock.removeEventListener('mousemove', onMove)
      dock.removeEventListener('mouseleave', onLeave)
      gsap.killTweensOf([...icons.current, ...shadows.current])
    }
  }, [])

  return (
    <div className="h-screen bg-black flex items-end justify-center pb-16">
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-[88px] rounded-3xl bg-white/15 border border-white/20 backdrop-blur-xl" />

        <div ref={dockRef} className="relative flex items-end gap-3 px-4 pb-2">
          {colors.map((color, i) => (
            <div key={color} className="flex flex-col items-center">
              <div
                ref={(el) => {
                  if (el) icons.current[i] = el
                }}
                className={`w-16 h-16 ${color} rounded-full ring-1 ring-white/20 cursor-pointer`}
              />
              <div
                ref={(el) => {
                  if (el) shadows.current[i] = el
                }}
                className="mt-2 h-2 w-12 rounded-full bg-black/70 blur-[6px] opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlickNavbar