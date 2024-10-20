'use client';

import React, {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {fbPageView} from '../conversion-api';
import log from "eslint-plugin-react/lib/util/log";

type Props = {
    children: React.ReactNode
};

const FBPixelProvider = ({children}: Props) => {
    const pathname = usePathname();

    useEffect(() => {
        fbPageView();

        // router.pathname.on('routeChangeComplete', fbPageView);
        // return () => {
        //     router.events.off('routeChangeComplete', fbPageView);
        // };

        console.log('### page view should trigger ###')
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};

export default FBPixelProvider;
