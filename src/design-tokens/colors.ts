export const colors = {
  // === Brand Colors (from logo SVG) ===
  brand: {
    primary: '#18B2FE',
    'primary-deep': '#0437A3',
    accent: '#00B1F9',
    'accent-light': '#56E7FA',
    blue: '#0850B5',
  },

  // === Surface / Background (Dark Theme) ===
  surface: {
    base: '#000000',
    raised: '#050A1A',
    card: '#0A0E27',
    'card-hover': '#0F1535',
    overlay: '#0D1229',
    glass: 'rgba(10, 14, 39, 0.60)',
    'glass-hover': 'rgba(10, 14, 39, 0.75)',
    'glass-border': 'rgba(86, 231, 250, 0.10)',
    'glass-border-hover': 'rgba(86, 231, 250, 0.20)',
    input: '#0A0F25',
    navbar: 'rgba(0, 0, 0, 0.60)',
  },

  // === Text Colors ===
  text: {
    primary: '#FFFFFF',
    secondary: '#A0AEC0',
    tertiary: '#5A6478',
    'on-brand': '#FFFFFF',
    accent: '#56E7FA',
    link: '#18B2FE',
    'link-hover': '#56E7FA',
  },

  // === Border Colors (mode-dependent — see global.css CSS custom properties) ===
  // Light: visible gray borders | Dark: subtle white-alpha borders
  border: {
    DEFAULT: 'var(--border-default)',
    subtle: 'var(--border-subtle)',
    medium: 'var(--border-medium)',
    strong: 'var(--border-strong)',
    brand: 'var(--border-brand)',
    'brand-strong': 'var(--border-brand-strong)',
    focus: '#18B2FE',
  },

  // === Status / Semantic Colors ===
  status: {
    success: '#22C55E',
    'success-bg': 'rgba(34, 197, 94, 0.10)',
    warning: '#F59E0B',
    'warning-bg': 'rgba(245, 158, 11, 0.10)',
    error: '#EF4444',
    'error-bg': 'rgba(239, 68, 68, 0.10)',
    info: '#18B2FE',
    'info-bg': 'rgba(24, 178, 254, 0.10)',
  },
} as const;

export const gradients = {
  'brand-primary': 'linear-gradient(135deg, #18B2FE 0%, #0437A3 100%)',
  'brand-horizontal': 'linear-gradient(90deg, #18B2FE 0%, #0437A3 100%)',
  'brand-radial': 'radial-gradient(ellipse at center, #18B2FE 0%, #0437A3 70%)',
  'glow-blue': 'radial-gradient(ellipse at center, rgba(24,178,254,0.15) 0%, transparent 70%)',
  'glow-cyan': 'radial-gradient(ellipse at center, rgba(0,177,249,0.10) 0%, transparent 70%)',
  'cta-button': 'linear-gradient(135deg, #18B2FE 0%, #0850B5 100%)',
  'cta-button-hover': 'linear-gradient(135deg, #56E7FA 0%, #18B2FE 100%)',
} as const;
