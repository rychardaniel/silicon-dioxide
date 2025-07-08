import { useEffect, useState } from "react";

interface ImagePopupProps {
    src: string;
    alt?: string;
    className?: string;
}

export const ImagePopup = ({
    src,
    alt = "",
    className = "",
}: ImagePopupProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keyup", handleKeyUp);
        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`cursor-pointer ${className}`}
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
                    onClick={() => setIsOpen(false)}
                    onKeyUpCapture={(e) => {
                        if (e.key === "Escape") {
                            setIsOpen(false);
                        }
                    }}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};
