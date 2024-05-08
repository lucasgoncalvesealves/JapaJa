'use client'

import React from "react";

export default function ThePropaganda()
{
  return (
    <>
        <div id="wrapper">
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
        </div>

        <style jsx>{`
            #wrapper {
                display: contents;
            }
            .propaganda {
                float: left; 
                margin: 7px 7px 0 0; 
                border-radius: 7px; 
                display: flex; 
                overflow: hidden;
            }
            .propaganda img {
                width: 408px; 
                height: 193px; 
                object-fit: cover; 
                object-position: top left; 
                transition: transform .5s ease;
            }
            .propaganda img:hover {
                transform: scale(1.2);
            }
            
            /* design responsivo */
            @media only screen and (min-width: 414px) {
                #wrapper {
                    width: 364px;
                }
            }
            @media only screen and (min-width: 863px) {
                #wrapper {
                    width: 779px;
                }
            }
            @media only screen and (min-width: 1270px) {
                #wrapper {
                    width: 1194px;
                }
            }
        `}</style>
    </>
  )
}