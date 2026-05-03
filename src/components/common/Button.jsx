/**
 * Button Component - Reusable button with multiple variants
 * Props:
 *   - variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 *   - size: 'sm' | 'md' | 'lg'
 *   - children: React node
 *   - onClick: function
 *   - disabled: boolean
 *   - className: string (additional classes)
 */

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const baseStyle = 'transition-all duration-300 ease-out focus:outline-none';

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'text-[#D4AF37] hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
