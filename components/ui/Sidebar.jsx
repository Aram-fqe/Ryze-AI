export default function Sidebar({ items = [], onSelect }) {
    return (
        <aside className="w-64 h-full bg-white border-r border-gray-200">
            <div className="p-4 flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 grid place-items-center">
                    <span className="text-white font-bold">R</span>
                </div>
                <span className="text-lg font-bold text-gray-900">Ryze Demo</span>
            </div>

            <nav className="space-y-1 px-4">
                {items.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => onSelect(item.id)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                        {item.icon && <span className="text-lg">{item.icon}</span>}
                        <span className="font-medium text-sm">{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
}
