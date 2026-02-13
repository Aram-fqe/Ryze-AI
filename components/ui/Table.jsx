export default function Table({ headers = [], data = [], className = '' }) {
    const hasData = data && data.length > 0;


    return (
        <div className={`overflow-x-auto rounded-lg border border-gray-200 ${className}`}>
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i} className="px-4 py-3 font-semibold text-gray-900">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {hasData ? (
                        data.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                {Object.values(row).map((cell, j) => (
                                    <td key={j} className="px-4 py-3 text-gray-600">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={headers.length} className="px-4 py-8 text-center text-gray-400 italic">
                                No data found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
