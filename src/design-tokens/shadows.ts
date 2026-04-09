export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.50)',
  DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.50)',
  md: '0 4px 8px rgba(0, 0, 0, 0.50)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.50)',
  xl: '0 16px 32px rgba(0, 0, 0, 0.60)',
  '2xl': '0 24px 48px rgba(0, 0, 0, 0.70)',

  // Brand glow effects
  'glow-sm': '0 0 10px rgba(24, 178, 254, 0.20)',
  glow: '0 0 20px rgba(24, 178, 254, 0.25)',
  'glow-md': '0 0 30px rgba(24, 178, 254, 0.30)',
  'glow-lg': '0 0 50px rgba(24, 178, 254, 0.30), 0 0 100px rgba(24, 178, 254, 0.10)',
  'glow-xl': '0 0 80px rgba(24, 178, 254, 0.40), 0 0 150px rgba(24, 178, 254, 0.15)',

  // Cyan accent glow
  'glow-cyan': '0 0 20px rgba(86, 231, 250, 0.25)',
  'glow-cyan-lg': '0 0 50px rgba(86, 231, 250, 0.30), 0 0 100px rgba(86, 231, 250, 0.10)',

  // CTA button glow
  'glow-cta': '0 4px 20px rgba(24, 178, 254, 0.40)',
  'glow-cta-hover': '0 4px 30px rgba(24, 178, 254, 0.60), 0 0 60px rgba(24, 178, 254, 0.20)',

  // Inner subtle glow for glass
  'inner-glow': 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
} as const;
