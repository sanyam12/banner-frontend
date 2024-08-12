import { useEffect, useState } from "react";

export interface BannerProps {
    title: string;
    description: string;
    url: string;
    duration: number;
    onClose: () => void;
}

const Banner: React.FC<BannerProps> = ({ title, description, url, duration, onClose }) => {
    const [remainingTime, setRemainingTime] = useState(duration);

    useEffect(() => {
        if (remainingTime <= 0) {
            onClose();
            return;
        }

        const timer = setTimeout(() => {
            setRemainingTime(remainingTime - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [remainingTime, onClose]);

    return (
        <div className="fixed inset-x-0 top-0 p-4 bg-blue-500 text-white">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {remainingTime} seconds
                <div>
                    <button
                        onClick={() => window.open(url, '_blank')}
                        className="bg-white text-blue-500 px-4 py-2 rounded mr-2 hover:bg-blue-100"
                    >
                        Open URL
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Close
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;