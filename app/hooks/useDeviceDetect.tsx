'use client'

// hooks/useDeviceDetect.ts
import { useEffect, useState } from 'react';

const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const userAgent: string = navigator.userAgent;

        // Detect mobile devices
        const isMobileDevice = /Mobi|Android/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    return { isMobile };
};

export default useDeviceDetect;