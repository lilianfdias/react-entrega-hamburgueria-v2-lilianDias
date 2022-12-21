import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    
    :root{
        //color primary

        --color-primary: #27ae60;
        --color-primary-50: #92d7af;
        --color-secondary: #eb5757;

        //Grey scale palette

        --grey-100:#333333;
        --grey-50:#828282 ;
        --grey-20:#e0e0e0;
        --grey-0:#f5f5f5;
        --white:#ffffff;

        //feedback pallette

        --negative:#e60000;
        --warning:#ffcd07;
        --sucess:#162821;
        --information:#155bcb; 

    }

  

    body{
        font-family: 'Inter', sans-serif
    }

`;
