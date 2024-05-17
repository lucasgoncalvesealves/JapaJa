'use client'

import React from "react";
import Link from 'next/link';

export default function TheFooter()
{
  return (
    <>
        <footer id="menu-mobile">
            <Link href="/"><div id="simbolo" alt="Página Inicial"></div></Link>
            <Link href="/nearby"><div id="nearby" href="#" alt="Por Perto"></div></Link>
            <Link href="/contact"><div id="formulario"  alt="Contato"></div></Link>
            <Link href="/about"><div id="sobre" alt="Sobre"></div></Link>
        </footer>
        <Link href="/about">
            <footer id="largo">
                © 2012/2024 Japa Já. Todos os direitos reservados. 
                Design by Gonçalves Alves. Conheça aqui a ferramenta.
            </footer>
        </Link>

        <style jsx>{`
            #largo {
                height: 22px;
                padding: 6px;
                float: left;
                font-size: 12px;
                background-color: #f63;
                border-radius: 7px;
                margin: 7px 0;
                text-align: center;
                text-decoration: none;
                flex-direction: column;
                justify-content: center;
                transition: .25s;
                &:hover {
                  background-color: #f99;
                }
            }
            footer {
                color: #fff;
                transition: .25s;
                &:hover {
                  color: #000;
                }
            }
            #menu-mobile {
                height: 82px;
                margin: 7px 0;
                flex-direction: row;
                width: 408px;
                float: left;
                justify-content: space-between;
            }
              
            /* botões */
            #simbolo {
                width: 82px;
                height: 82px;
                margin-right: 7px;
                background-image: url(/simbolo.png);
                transition: .25s;
                &:hover {
                  background-image: url(/simbolo_on.png);
                }
            }
            #nearby {
                width: 82px; 
                height: 82px; 
                background-image: url(/nearby.png); 
                margin-right: 7px;
                transition: .25s;
                &:hover {
                  background-image: url(/nearby_on.png);
                }
            }
            #formulario {
                width: 82px;
                height: 82px;
                background-image: url(/form.png);
                margin-right: 7px;
                transition: .25s;
                &:hover {
                  background-image: url(/form_on.png);
                }
            }
            #sobre {
                width: 82px;
                height: 82px;
                background-image: url(/sobre.png);
                transition: .25s;
                &:hover {
                  background-image: url(/sobre_on.png);
                }
            }
              
            /* design responsivo */
            @media only screen and (min-width: 414px) {
                #menu-mobile {
                  display: flex;
                }
                #largo {
                  display: none;
                }
            }
            @media only screen and (min-width: 863px) {
                #menu-mobile {
                  display: none;
                }
                #largo {
                  display: flex;
                  width: 811px;
                }
            }
            @media only screen and (min-width: 1270px) {
                #largo {
                  width: 1226px;
                }
            }
        `}</style>
    </>
  )
}