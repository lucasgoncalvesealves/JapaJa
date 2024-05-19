'use client'

import "@/app/globals.css";
import { createContext, useState } from "react";

const titleContext = createContext();

export {titleContext};

export default function Container({ children }) {
    
    const [title, setTitle] = useState('');
    const updateTitle = (data) =>
    {
        setTitle(data);
    }
  
    return (
    <>
        <div id="conteudo">
            <header id="subheader">
            <h1>{title}</h1>
            <a id="voltar" href="javascript:history.go(-1)"></a>
            </header>
            <titleContext.Provider value={{title, updateTitle}}>
            {children}
            </titleContext.Provider>
        </div>

        <style jsx>{`
            h1 {
                font: normal 40px 'GalaBold'; 
                float: left; 
                width: auto; 
                color: #F63; 
                padding-right: 20px; 
                margin: 0; 
                transition: .25s;
                &:hover {
                    color: #F99;
                }
            }
            #conteudo {
                height: auto; 
                text-align: left; 
                background-color: #FFF; 
                transition: .25s;
                & p {
                    font: 14px 'Trebuchet MS';
                    margin: 0 auto 1em auto;
                }
            }
            #subheader {
                width: 100%;
                margin-bottom: 40px;
                display: flex; 
                justify-content: space-between;
            }
            #voltar {
                width: 82px; 
                height: 30px; 
                background-image: url(/voltar.png); 
                background-size: cover; 
                transition: .25s;
                &:hover {
                    background-image: url(/voltar_on.png);
                }
            }
            
            /* incorporando a fonte Gala Bold */
            @font-face 
            {
                font-family: 'GalaBold';
                src: url('/font/gala_bold-webfont.eot');
                src: url('/font/gala_bold-webfont.eot?#iefix') format('embedded-opentype'),
                     url('/font/gala_bold-webfont.woff') format('woff'),
                     url('/font/gala_bold-webfont.ttf') format('truetype'),
                     url('/font/gala_bold-webfont.svg#GalaRegular') format('svg');
                font-weight: normal;
                font-style: normal;
            }
            
            /* design responsivo */
            @media only screen and (min-width: 414px)
            {
                #conteudo {
                    width: 397px;
                    margin-top: 96px;
                    padding: 10px;
                }
            }
            @media only screen and (min-width: 863px)
            {
                #conteudo {
                    width: 778px;
                    margin-top: 7px;
                    border: 3px solid #F63; 
                    border-radius: 7px;
                    padding: 20px;
                    &:hover {
                        border: 3px solid #F99;
                    }
                }
            }
            @media only screen and (min-width: 1270px)
            {
                #conteudo {
                    width: 1193px;
                }
            }
        `}</style>
    </>
  );
}
