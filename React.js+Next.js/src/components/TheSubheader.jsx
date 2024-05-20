'use client'

import "@/app/globals.css";

export default function Subheader(props) {
    
    return (
    <>
        <header id="subheader">
            <h1>{props.title}</h1>
            <a id="voltar" href="javascript:history.go(-1)"></a>
        </header>

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
        `}</style>
    </>
  );
}