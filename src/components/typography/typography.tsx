import React, { ReactNode } from "react";


export interface Typegrophay{
    tag: string,
    children: ReactNode,
    className: string, 
}


export function TextoBase({tag, children, className} : Typegrophay){
    return(
        <>
            {tag === 'h1' && <h1 className={className}>{children}</h1>}
            {tag === 'h2' && <h2 className={className}>{children}</h2>}
            {tag === 'h3' && <h3 className={className}>{children}</h3>}
            {tag === 'h4' && <h4 className={className}>{children}</h4>}
            {tag === 'h5' && <h5 className={className}>{children}</h5>}
            {tag === 'h6' && <h6 className={className}>{children}</h6>}
        </>
    )
}