import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --gray-dark:rgba(27, 27, 27, 0.733);
        --background: #16123be5;
        --gray-line: #DCDDE0;
        --text: #d8d5d5;
        --text-highlight: #B3B9FF;
        --title: #5e8ce9;
        --red: #FF0000;
        --green: #4CD62B;
        --blue: #2aa4b4;
        --blue-dark: #236377;
        --blue-twitter: #2AA9E0;
        --login-button: #0d5963e5;
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.background};
    }

    body, input, textarea, button {
        font: 400 1rem "Inter", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`