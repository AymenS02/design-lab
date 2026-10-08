"use client";

import { useRef } from "react";
import LogoAssembly, { type LogoAssemblyHandle } from "../components/Logoassembly";

export default function LogoAnimation() {
  const logoRef = useRef<LogoAssemblyHandle>(null);

  return (
    <>
      <LogoAssembly ref={logoRef} className="w-auto text-[#007401]" />
    </>
  );
}