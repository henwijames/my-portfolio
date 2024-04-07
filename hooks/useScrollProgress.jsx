import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight =
                document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(
                    Number(currentProgress / scrollHeight).toFixed(2) * 100
                );
            }
        };

        // Event

        window.addEventListener("scroll", updateScollCompletion);
        // Clear event
        return () =>
            window.removeEventListener("scroll", updateScollCompletion);
    }, []);

    return completion;
};

export default useScrollProgress;
