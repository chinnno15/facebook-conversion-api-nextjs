'use client';
import React, {useEffect} from 'react';
import {fbPageView} from '../conversion-api';
import {usePathname} from 'next/navigation';
import log from "eslint-plugin-react/lib/util/log";
import useLocalStorage from "../utils/use-local-storage";

type Props = {
    children: React.ReactNode
};


const FBPixelProvider = ({children}: Props) => {
    let [value, isLoaded, setValue] = useLocalStorage<string>('pathname', '');

    const pathname = usePathname();

    useEffect(() => {
        if (value !== pathname && isLoaded) {
            fbPageView();
            setValue(pathname);
        }
    }, [value, setValue, isLoaded]);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};

export default FBPixelProvider;
