'use client'

import React from "react";
import Link from 'next/link';

export default function ButtonAbout()
{
  return (
    <>
        <Link href="/about"><div alt="Sobre"></div></Link>
        
        <style jsx>{`
            div {
                width: 82px; 
                height: 82px; 
                background-image: url(/sobre.png); 
                transition: .25s;
                &:hover {
                    background-image: url(/sobre_on.png);
                }
            }
        `}</style>
    </>
  )
}