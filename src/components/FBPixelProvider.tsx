'use client';

import React, {useEffect} from 'react';
// import {useRouter} from 'next/router';
import {fbPageView} from '../conversion-api';

type Props = {
    children: React.ReactNode
};

const FBPixelProvider = ({children}: Props) => {
    console.log('###### FBPixelProvider #####');
    // const router = useRouter();

    useEffect(() => {
        fbPageView();

        // router.events.on('routeChangeComplete', fbPageView);
        // return () => {
        //     router.events.off('routeChangeComplete', fbPageView);
        // };
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};

export default FBPixelProvider;
