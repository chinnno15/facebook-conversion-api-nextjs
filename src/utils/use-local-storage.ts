import {useEffect, useState} from 'react';

export default function useLocalStorage<T>(key: string, fallbackValue: T) {
    const [value, setValue] = useState(fallbackValue);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(key);

        if (value) {
            if (stored !== JSON.stringify(value)) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } else {
            if (stored) {
                setValue(JSON.parse(stored));
            }
        }

        setIsLoaded(true);
    }, [value, fallbackValue, key, isLoaded]);

    return [value, isLoaded, setValue] as const;
}
