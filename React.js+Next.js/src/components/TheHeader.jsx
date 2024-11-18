'use client'

import React from "react";

import ButtonHome from "@/components/ButtonHome";
import ButtonLogo from "@/components/ButtonLogo";
import SearchBar from "@/components/SearchBar";
import ButtonNearby from "@/components/ButtonNearby";
import ButtonForm from "@/components/ButtonForm";

export default function TheHeader()
{
  return (
    <>
      <header id="completo">
          <ButtonHome />
          <ButtonLogo />
          <SearchBar />
          <ButtonNearby />
          <ButtonForm />
      </header>
      <header id="reduzido">
          <SearchBar />
      </header>

      <style jsx>{`
            header {
                width: 100%;
                & form {
                    display: flex;
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
            @media only screen and (min-width: 348px)
            {
                #completo {
                    display: none;
                }
                #reduzido {
                    display: flex;
                }
            }
            @media only screen and (min-width: 863px)
            {
                #completo {
                    display: flex;
                }
                #reduzido {
                    display: none;
                }
            }
            @media only screen and (min-width: 1270px)
            {
                #reduzido {
                    display: none;
                }
            }
      `}</style>
    </>
  )
}