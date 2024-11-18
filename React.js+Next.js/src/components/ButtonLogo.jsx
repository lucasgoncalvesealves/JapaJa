'use client'

import React from "react";
import Link from 'next/link';

export default function ButtonLogo()
{
  return (
    <>
      <Link href="/"><div alt="Página Inicial"></div></Link>

      <style jsx>{`
            div {
                width: 173px; 
                height: 82px; 
                margin-right: 7px; 
                background-image:url(/logotipo.png); 
                transition: .25s;
                &:hover {
                    background-image:url(/logotipo_on.png);
                }
            }
      `}</style>
    </>
  )
}