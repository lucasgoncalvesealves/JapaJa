'use client'

import React from "react";
import Link from 'next/link';

export default function ButtonNearby()
{
  return (
    <>
      <Link href="/nearby"><div alt="Por Perto"></div></Link>
      
      <style jsx>{`
            div {
                width: 82px; 
                height: 82px; 
                background-image: url(/nearby.png); 
                margin-right: 7px; 
                transition: .25s;
                &:hover {
                    background-image: url(/nearby_on.png);
                }
            }
      `}</style>
    </>
  )
}