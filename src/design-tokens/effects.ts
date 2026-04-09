export const effects = {
  glass: {
    standard: {
      background: 'rgba(10, 14, 39, 0.60)',
      backdropBlur: '12px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    light: {
      background: 'rgba(10, 14, 39, 0.40)',
      backdropBlur: '16px',
      border: '1px solid rgba(255, 255, 255, 0.06)',
    },
    heavy: {
      background: 'rgba(10, 14, 39, 0.80)',
      backdropBlur: '20px',
      border: '1px solid rgba(255, 255, 255, 0.10)',
    },
    brand: {
      background: 'rgba(4, 55, 163, 0.20)',
      backdropBlur: '16px',
      border: '1px solid rgba(24, 178, 254, 0.15)',
    },
  },

  patterns: {
    dotGrid: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
    dotGridSize: '24px 24px',
    lineGrid:
      'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
    lineGridSize: '64px 64px',
  },

  orb: {
    blue: 'radial-gradient(600px circle at var(--orb-x, 50%) var(--orb-y, 50%), rgba(24,178,254,0.08), transparent 60%)',
    cyan: 'radial-gradient(400px circle at var(--orb-x, 50%) var(--orb-y, 50%), rgba(86,231,250,0.06), transparent 60%)',
    deep: 'radial-gradient(800px circle at var(--orb-x, 50%) var(--orb-y, 50%), rgba(8,80,181,0.10), transparent 60%)',
  },
} as const;
