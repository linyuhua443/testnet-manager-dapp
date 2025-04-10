export function Button({ children, onClick, className = '', variant }) {
  const styles = variant === 'destructive'
    ? 'bg-red-500 hover:bg-red-600 text-white'
    : 'bg-blue-600 hover:bg-blue-700 text-white';
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded ${styles} ${className}`}>
      {children}
    </button>
  );
}
