'use client';

import { Particles } from '@/components/Particles';

export function ParticlesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={['#ffffff', '#ffffff', '#ffffff']}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>
    </div>
  );
}
