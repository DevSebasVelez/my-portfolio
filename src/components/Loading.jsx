import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";


export const Loading = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

    const greetings = ['Hello', 'Hola', 'Bonjour', 'Olá', '你好'];

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 3000);

        const interval = setInterval(() => {
        setCurrentGreetingIndex((prevIndex) => (prevIndex < greetings.length - 1 ? prevIndex + 1 : 0));
        }, 400); // Cambia de saludo cada x tiempo

        return () => {
        clearTimeout(timeout);
        clearInterval(interval);
        };
    }, [greetings.length]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-custom z-50"
                >
                    <div className="text-4xl font-bold animate-fade-in">
                        <p>{greetings[currentGreetingIndex]}</p>
                        <p></p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
