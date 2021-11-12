import { createGlobalStyle } from 'styled-components';

// criação do estilo global da pagina

const GlobalStyle = createGlobalStyle`

/* resetando as propriedades globais */
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

/* estilizando as propriedades */
body{
    background-color: #03091F;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
}

a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
}

p{
    line-height: 2rem;
}

.Before{
    position: relative;
    padding-left: 3rem;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 35px;
        background-color: #395FF6;
    }
}
`;

export default GlobalStyle;