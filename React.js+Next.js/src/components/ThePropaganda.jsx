'use client'

import React from "react";

export default function ThePropaganda()
{
  return (
    <>
        <main>
            <div className="propaganda"><img src="/geisha.png" /></div>
            <div className="propaganda"><img src="/ie.png" /></div>
            <div className="propaganda"><img src="/konistore.png" /></div>
            <div className="propaganda"><img src="/konomiai.png" /></div>
            <div className="propaganda"><img src="/lapamaki.png" /></div>
            <div className="propaganda"><img src="/manekineko.png" /></div>
            <div className="propaganda"><img src="/yakiniku.png" /></div>
            <div className="propaganda"><img src="/samurai.png" /></div>
            <div className="propaganda"><img src="/gendai.png" /></div>
            <div className="propaganda"><img src="/gohan.png" /></div>
            <div className="propaganda"><img src="/t-maki.png" /></div>
            <div className="propaganda"><img src="/japax.png" /></div>
        </main>

        <style jsx>{`
            .propaganda {
                float: left; 
                margin: 7px 7px 0 0; 
                border-radius: 7px; 
                display: flex; 
                overflow: hidden;
                & img {
                    width: 100%;
                    object-fit: cover; 
                    object-position: top left; 
                    transition: transform .5s ease;
                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }
            
            /* design responsivo */
            @media only screen and (min-width: 348px)
            {
                main {
                    flex-direction: column;
                    margin: 89px 0 0 7px;
                    padding-bottom: 96px;
                }
                .propaganda {
                    width: 348px; 
                    height: 164px;
                }
            }
            @media only screen and (min-width: 863px)
            {
                main {
                    margin: 0;
                    padding: 0;
                }
                .propaganda {
                    width: 408px; 
                    height: 193px; 
                }
            }
        `}</style>
    </>
  )
}