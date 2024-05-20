'use client'

import TheSubheader from "@/components/TheSubheader";
import Error404 from "@/components/Error404";

export default function NotFound() {
  return (
    <>
        <div id="container">
            <TheSubheader title="Erro 404"/>
            <Error404 />
        </div>

        <style jsx>{`
            #container {
                height: auto; 
                text-align: left; 
                background-color: #FFF; 
                transition: .25s;
                & p {
                    font: 14px 'Trebuchet MS';
                    margin: 0 auto 1em auto;
                }
            }
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
                src: url(/font/gala_bold-webfont.eot);
                src: url(/font/gala_bold-webfont.eot?#iefix) format('embedded-opentype'),
                     url(/font/gala_bold-webfont.woff) format('woff'),
                     url(/font/gala_bold-webfont.ttf) format('truetype'),
                     url(/font/gala_bold-webfont.svg#GalaRegular) format('svg');
                font-weight: normal;
                font-style: normal;
            }
            /* design responsivo */
            @media only screen and (min-width: 414px)
            {
                #container {
                    width: 362px;
                    border: 3px solid #F63; 
                    border-radius: 7px;
                    overflow: auto;
                    height: 100%;
                    margin: 96px 0 0 7px;
                    padding: 20px;
                    &:hover {
                        border: 3px solid #F99;
                    }
                    &::-webkit-scrollbar {
                        width: 10px;
                    }
                    &::-webkit-scrollbar-track {
                        border-radius: 10px;
                        background: #FFF;
                    } 
                    &::-webkit-scrollbar-thumb {
                        border-radius: 10px;
                        background: #CCC;
                    }
                    &::-webkit-scrollbar-thumb:hover {
                        background: #AAA; 
                    }
                }
            }
            @media only screen and (min-width: 863px)
            {
                #container {
                    width: 777px;
                    height: auto;
                    margin: 7px 0 0 0;
                }
            }
            @media only screen and (min-width: 1270px)
            {
                #container {
                    width: 1193px;
                }
            }
        `}</style>
    </>
  );
}