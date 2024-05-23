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
                © 2012/2024 Japa Já. 
                Todos os direitos reservados. 
                Design & Development by Gonçalves Alves. 
                Conheça aqui a ferramenta.
            </footer>
        </Link>

        <style jsx>{`
            #simbolo {
                width: 82px; 
                height: 82px; 
                margin-right: 7px; 
                background-image: url(/simbolo.png); 
                transition: .25s;
                &:hover {
                    background-image:url(/simbolo_on.png);
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
            #largo {
                height: 22px; 
                padding: 6px; 
                float: left; 
                font-size: 12px; 
                background-color: #F63; 
                border-radius: 7px; 
                margin: 7px 0; 
                text-align: center; 
                text-decoration: none; 
                flex-direction:column; 
                justify-content: center; 
                transition: .25s;
                &:hover {
                    background-color: #F99;
                }
            }
            footer {
                color: #FFF;
                transition: .25s;
                &:hover {
                    color: #000;
                }
            }
            #menu-mobile {
                height: 82px; 
                padding: 7px;
                width: 348px; 
                float: left; 
                background-color: #FFF;
                position: fixed;
                bottom: 0;
            }
            /* design responsivo */
            @media only screen and (min-width: 348px)
            {
                #largo {
                    display: none;
                }
                #menu-mobile {
                    display: flex;
                }
            }
            @media only screen and (min-width: 863px)
            {
                #largo {
                    display: flex;
                    width: 811px;
                }
                #menu-mobile {
                    display: none;
                }
            }
            @media only screen and (min-width: 1270px)
            {
                #menu-mobile {
                    display: none;
                }
                #largo {
                    width: 1226px;
                }
            }
        `}</style>
    </>
  )
}