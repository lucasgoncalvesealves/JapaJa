'use client'

import React from "react";
import Link from 'next/link';

export default function ButtonHome()
{
  return (
    <>
      <Link href="/"><div alt="Página Inicial"></div></Link>

      <style jsx>{`
            div {
                width: 82px; 
                height: 82px; 
                margin-right: 7px; 
                background-image: url(/simbolo.png); 
                transition: .25s;
                &:hover {
                    background-image:url(/simbolo_on.png);
                }
            }
      `}</style>
    </>
  )
}