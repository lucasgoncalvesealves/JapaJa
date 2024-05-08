import React from "react";

export default function NotFound()
{
  return (
    <>
        <span>A página que você procura não existe.</span>
        <p>Ela pode ter sido movida ou removida do sistema.</p>
        <ul>
        <li>Caso você tenha digitado um endereço no navegador, certifique-se que ele está correto;</li>
        <li>
            Caso você tenha clicado em um link defeituoso, entre em contato para que ele possa ser
            consertado;
        </li>
        <li>
            Recomendamos enfaticamente que você dê preferência para a ferramenta de busca no topo da tela.
        </li>
        </ul>

        <style jsx>{`
            span {
                font: bold 18px 'Trebuchet MS';
                color: #f63;
                transition: .25s;
            }
            span:hover {
            color: #f99;
            }
            p {
            margin-top: 14px;
            font: 'Trebuchet MS' 14px;
            }
            li {
            margin-bottom: 7px;
            }
            li::marker {
            color: #f63;
            transition: .25s;
            }
            li::marker:hover {
            color: #f99;
            }
        `}</style>
    </>
  )
}