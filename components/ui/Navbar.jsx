export default function Navbar({ navLinks = [] }) {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    RyzeAI
                </h1>
            </div>

            <nav className="flex items-center gap-6">
                {navLinks.map((link, i) => (
                    <a
                        key={i}
                        href={link.href}
                        className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
                    Get Started
                </button>
            </div>
        </header>
    );
}
