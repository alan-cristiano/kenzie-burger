import { useRef, useEffect } from "react";

export const useHandleKeydown = (keyId, callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === keyId) {
                if (callback) callback(ref.current);
            }
        };

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.addEventListener("keydown", handleKeydown);
        };
    }, []);

    return ref;
};
