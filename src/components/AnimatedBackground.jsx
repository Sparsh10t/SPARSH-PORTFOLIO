import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030712]">
      {/* Soft, professional ambient glowing spots (very subtle and elegant) */}
      <div className="absolute -top-[20%] -left-[10%] h-[60%] w-[50%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] -right-[10%] h-[60%] w-[50%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[10%] left-[30%] h-[50%] w-[50%] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      
      {/* Radial overlay to create a smooth, premium dark vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(3,7,18,0.6)_100%)] pointer-events-none" />
    </div>
  );
}

