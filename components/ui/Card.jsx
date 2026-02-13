export default function Card({ title, children, className = '' }) {
    return (
        <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
            {title && <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>}
            {children}
        </div>
    );
}
