import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
        
    }

:root {
    font-size: 62.5%;
}

body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
}

body, input, textarea, button {
    outline: none; 
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
}

a{
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s; ;
}

button:hover, a:hover {
    filter: brightness(0.9);
}


`;
