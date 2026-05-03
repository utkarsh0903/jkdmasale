/**
 * Card Component - Reusable card container with hover effects
 * Props:
 *   - children: React node
 *   - className: string (additional classes)
 *   - hover: boolean (enable hover animation)
 *   - shadow: boolean (show shadow)
 */

export default function Card({
  children,
  className = '',
  hover = true,
  shadow = true,
}) {
  const baseStyle = 'bg-white rounded-xl p-6 transition-all duration-300';
  const hoverStyle = hover ? 'hover:shadow-2xl hover:scale-105' : '';
  const shadowStyle = shadow ? 'shadow-md' : '';

  return (
    <div className={`${baseStyle} ${shadowStyle} ${hoverStyle} ${className}`}>
      {children}
    </div>
  );
}
