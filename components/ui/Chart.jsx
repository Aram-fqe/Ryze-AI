"use client";

import { useState } from 'react';

// Using Recharts for data visualization (install recharts if not present, otherwise use placeholder)
// Since we don't have recharts installed by default, I'll create a simple SVG based chart for now
// to avoid extra dependencies for the first pass.

export default function Chart({ data = [], type = 'bar', title }) {
    const hasData = data && data.length > 0;
    const maxVal = hasData ? Math.max(...data.map(d => d.value), 10) : 10;

    return (
        <div className="w-full h-64 bg-white p-4 rounded-xl border border-gray-100 flex flex-col justify-end gap-2 relative">
            {title && <h3 className="absolute top-4 left-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">{title}</h3>}

            {!hasData ? (
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm italic">
                    No data available
                </div>
            ) : (
                <div className="flex items-end justify-between h-40 gap-2 w-full px-2">
                    {data.map((d, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                            <div
                                className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-md group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300 relative shadow-sm"
                                style={{ height: `${(d.value / maxVal) * 100}%` }}
                            >
                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none transform translate-y-2 group-hover:translate-y-0 duration-200">
                                    {d.value}
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 font-medium truncate w-full text-center">{d.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
