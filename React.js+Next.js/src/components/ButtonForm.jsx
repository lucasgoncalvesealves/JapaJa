'use client'

import React from "react";
import Link from 'next/link';

export default function ButtonForm()
{
  return (
    <>
      <Link href="/contact"><div alt="contato"></div></Link>

      <style jsx>{`
            div {
                width: 82px; 
                height: 82px; 
                background-image: url(/form.png); 
                margin-right: 7px; 
                transition: .25s;
                &:hover {
                    background-image: url(/form_on.png);
                }
            }
      `}</style>
    </>
  )
}