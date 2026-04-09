interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-gradient-cta text-white shadow-glow-cta hover:shadow-glow-cta-hover',
  secondary:
    'bg-surface-card text-text-primary border border-border-default hover:bg-surface-card-hover hover:border-border-medium',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-card/50',
  outline:
    'bg-transparent text-brand-primary border border-brand-primary/30 hover:bg-brand-primary/10 hover:border-brand-primary/60',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-heading font-semibold
        cursor-pointer transition-all duration-normal
        focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
