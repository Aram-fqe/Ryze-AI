"use client";

import { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        const dialogDimensions = dialogRef.current?.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions?.left ||
            e.clientX > dialogDimensions?.right ||
            e.clientY < dialogDimensions?.top ||
            e.clientY > dialogDimensions?.bottom
        ) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={handleBackdropClick}
            className="p-0 rounded-2xl shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm open:animate-in open:fade-in open:zoom-in-95 closed:animate-out closed:fade-out closed:zoom-out-95"
        >
            <div className="w-[500px] max-w-full bg-white p-6">
                <header className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-gray-600 rounded-full transition-colors"
                    >
                        ✕
                    </button>
                </header>

                <div className="text-gray-600">{children}</div>
            </div>
        </dialog>
    );
}
