interface BadgeProps {
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'error';
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-surface-raised text-text-secondary border border-border-default',
  brand: 'bg-brand-primary/10 text-text-accent border border-brand-primary/20',
  success: 'bg-status-success/10 text-status-success border border-status-success/20',
  warning: 'bg-status-warning/10 text-status-warning border border-status-warning/20',
  error: 'bg-status-error/10 text-status-error border border-status-error/20',
};

export function Badge({
  variant = 'default',
  className = '',
  children,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 text-xs font-medium rounded-full
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
