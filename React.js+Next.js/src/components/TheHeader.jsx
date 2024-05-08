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
          <form id="buscaAmplo">
          <div id="digitar"><input type="text" value="buscar já!" /></div>
          <input type="submit" id="pesquisa" value="" href="#" />
          </form>
          <div id="nearby" alt="Por Perto"></div>
          <Link href="/contact"><div id="formulario"></div></Link>
      </header>
      <header id="reduzido">
          <form id="buscaReduz">
          <div id="digitar"><input type="text" value="buscar já!" /></div>
          <input type="submit" id="pesquisa" value="" href="#" />
          </form>
      </header>

      <style jsx>{`
          header {
              width: 100%;
              height: 82px;
            }
            #simbolo {
              width: 82px;
              height: 82px;
              margin-right: 7px;
              background-image: url(/simbolo.png);
              transition: .25s;
            }
            #simbolo:hover {
              background-image: url(/simbolo_on.png);
            }
            #logotipo {
              width: 173px;
              height: 82px;
              margin-right: 7px;
              background-image: url(/logotipo.png);
              transition: .25s;
            }
            #logotipo:hover {
              background-image: url(/logotipo_on.png);
            }
            header form {
              display: flex;
            }
            #digitar {
              height: 82px;
              text-align: center;
              margin-right: 3px;
              padding-left: 7px;
              border-radius: 7px;
              background-color: #f63;
              transition: .25s;
            }
            #digitar:hover,
            #digitar:focus {
              background-color: #f99;
            }
            #digitar input {
              border: none;
              height: 40px;
              margin-top: 20px;
              padding-left: 10px;
              font: normal 18px 'Trebuchet MS';
              background-color: #fff;
            }
            #digitar input:focus,
            #digitar input:hover {
              background-color: #fff;
            }
            #pesquisa {
              background-image: url(/pesquisa.png);
              width: 82px;
              height: 82px;
              border: none;
              margin-right: 7px;
              transition: .25s;
            }
            #pesquisa:hover {
              background-image: url(/pesquisa_on.png);
            }
            #nearby {
              width: 82px; 
              height: 82px; 
              background-image: url(/nearby.png); 
              margin-right: 7px;
              transition: .25s;
            }
            #nearby:hover {
              background-image: url(/nearby_on.png);
            }
            #formulario {
              width: 82px;
              height: 82px;
              background-image: url(/form.png);
              margin-right: 7px;
              transition: .25s;
            }
            #formulario:hover {
              background-image: url(/form_on.png);
            }
            
            /* design responsivo */
            @media only screen and (min-width: 414px) {
              #completo,
              #largo {
                display: none;
              }
              #reduzido {
                display: flex;
              }
              #digitar {
                width: 311px;
              }
              #digitar input {
                width: 261px;
              }
            }
            @media only screen and (min-width: 863px) {
              #completo,
              #largo {
                display: flex;
              }
              #reduzido {
                display: none;
              }
              #digitar {
                width: 279px;
              }
              #digitar input {
                width: 229px;
              }
            }
            @media only screen and (min-width: 1270px) {
              #reduzido {
                display: none;
              }
              #digitar {
                width: 694px;
              }
              #digitar input {
                width: 644px;
              }
            }
      `}</style>
    </>
  )
}