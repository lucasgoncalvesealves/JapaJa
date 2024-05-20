'use client'

import "@/app/globals.css";

export default function Container({ children }) {
    
    return (
    <>
        <div id="container">
            {children}
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