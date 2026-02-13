export default function Input({ label, type = 'text', placeholder, value, onChange, className = '' }) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <input
                type={type}
                className="px-3 py-2 bg-white border border-gray-300 hover:border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
