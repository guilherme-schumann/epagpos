interface GlassCardProps {
  variant?: 'standard' | 'light' | 'heavy' | 'brand';
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<NonNullable<GlassCardProps['variant']>, string> = {
  standard: 'glass-card',
  light: 'glass-card-light',
  heavy: 'glass-card-heavy',
  brand: 'glass-card-brand',
};

export function GlassCard({
  variant = 'standard',
  className = '',
  children,
}: GlassCardProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
