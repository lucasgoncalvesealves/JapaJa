'use client'

import React from "react";
import Link from 'next/link';

export default function TheHeader()
{
  return (
    <>
      <header id="completo">
          <Link href="/"><div id="simbolo"></div></Link>
          <Link href="/"><div id="logotipo"></div></Link>
          <form id="buscaAmplo" action="/search" method="get" role="search">
          <div id="digitar"><input type="text" placeholder="buscar já!" name="q" /></div>
          <input type="submit" id="pesquisa" value="" />
          </form>
          <Link href="/nearby"><div id="nearby" alt="Por Perto"></div></Link>
          <Link href="/contact"><div id="formulario"></div></Link>
      </header>
      <header id="reduzido">
          <form id="buscaReduz" action="/search" method="get" role="search">
          <div id="digitar"><input type="text" placeholder="buscar já!" name="q" /></div>
          <input type="submit" id="pesquisa" value="" />
          </form>
      </header>

      <style jsx>{`
            header {
                width: 100%;
                & form {
                    display: flex;
                }
            }
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
            #logotipo {
                width: 173px; 
                height: 82px; 
                margin-right: 7px; 
                background-image:url(/logotipo.png); 
                transition: .25s;
                &:hover {
                    background-image:url(/logotipo_on.png);
                }
            }
            #digitar {
                height: 82px; 
                text-align: center; 
                margin-right: 7px; 
                padding-left: 7px; 
                border-radius: 7px; 
                background-color: #F63; 
                transition: .25s;
                &:hover {
                    background-color: #F99;
                }
                & input {
                    border: none; 
                    height: 40px; 
                    margin: 20px 20px auto 10px; 
                    padding-left: 10px; 
                    font: normal 18px 'Trebuchet MS'; 
                    background-color: #FFF;
                    &:hover, &:focus {
                        background-color: #FFF;
                    }
                }
            }
            #pesquisa {
                background-image: url(/pesquisa.png); 
                width: 82px;
                height: 82px; 
                border: none; 
                margin-right: 7px; 
                transition: .25s;
                &:hover {
                    background-image: url(/pesquisa_on.png);
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
            #reduzido {
                top: 0;
                padding: 7px;
                background-color: #FFF;
                position: fixed;
                z-index: 1;
            }
            #completo {
                height: 82px;
            }
            
            /* design responsivo */
            @media only screen and (min-width: 414px)
            {
                #completo, #largo {
                    display: none;
                }
                #reduzido {
                    display: flex;
                }
                #digitar {
                    width: 311px;
                    & input {
                        width: 261px;
                    }
                }
            }
            @media only screen and (min-width: 863px)
            {
                #completo, #largo {
                    display: flex;
                }
                #reduzido {
                    display: none;
                }
                #digitar {
                    width: 279px;
                    & input {
                        width: 229px;
                    }
                }
            }
            @media only screen and (min-width: 1270px)
            {
                #reduzido {
                    display: none;
                }
                #digitar {
                    width: 694px;
                    & input {
                        width: 644px;
                    }
                }
            }
      `}</style>
    </>
  )
}