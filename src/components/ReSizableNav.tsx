import React, { useRef } from 'react';
import useSize from '@/lib/hooks/useSize';

export default function ReSizableNav( { children } : {children: any}) {
    const navRef = useRef<HTMLElement>(null);
    const size = useSize(navRef);
    const width = size?.width;

    return(
        <nav
            ref={ navRef }
            style={{ width:  width , minWidth: "72px", maxWidth: "450px" }}
            className="flex flex-col flex-1 gap-2 overflow-hidden"
        >
            { children } 
        </nav>
    )
}