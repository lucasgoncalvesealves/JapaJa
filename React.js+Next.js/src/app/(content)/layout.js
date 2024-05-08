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
            <div id="subheader">
            <h1>{title}</h1>
            <a id="voltar" href="javascript:history.go(-1)"></a>
            </div>
            <titleContext.Provider value={{title, updateTitle}}>
            {children}
            </titleContext.Provider>
        </div>

        <style jsx>{`
            #conteudo {
                height: auto;
                padding: 20px;
                text-align: left;
                margin-top: 7px;
                background-color: #fff;
                border: 3px solid #f63;
                border-radius: 7px;
                transition: .25s;
            }
            #conteudo:hover {
                border: 3px solid #f99;
            }
            #conteudo p {
                font: 14px 'Trebuchet MS';
            }
            #subheader {
                width: 100%;
                height: 73px;
                margin-bottom: 15px;
                display: flex;
                justify-content: space-between;
            }
            h1 {
                font: normal 40px 'GalaBold';
                width: auto;
                color: #f63;
                padding-right: 20px;
                margin: 0;
                transition: .25s;
            }
            h1:hover {
                color: #f99;
            }
            #voltar {
                background-image: url(/voltar.png);
                background-size: cover;
                width: 82px;
                height: 30px;
                transition: .25s;
            }
            #voltar:hover {
                background-image: url(/voltar_on.png);
            }
              
            /* incorporando a fonte Gala */
            @font-face {
                font-family: 'GalaBold';
                src: url('/font/gala_bold-webfont.eot');
                src:
                  url('/font/gala_bold-webfont.eot?#iefix') format('embedded-opentype'),
                  url('/font/gala_bold-webfont.woff') format('woff'),
                  url('/font/gala_bold-webfont.ttf') format('truetype'),
                  url('/font/gala_bold-webfont.svg#GalaRegular') format('svg');
                font-weight: normal;
                font-style: normal;
            }
              
            /* design responsivo */
            @media only screen and (min-width: 414px) {
                #conteudo {
                  width: 362px;
                }
            }
            @media only screen and (min-width: 863px) {
                #conteudo {
                  width: 778px;
                }
            }
            @media only screen and (min-width: 1270px) {
                #conteudo {
                  width: 1193px;
                }
            }
        `}</style>
    </>
  );
}