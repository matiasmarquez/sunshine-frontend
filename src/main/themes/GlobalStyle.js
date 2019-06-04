import { createGlobalStyle } from "styled-components";

import MaterialDesignIcons from "./icons/css/materialdesignicons.min.css";

const GlobalStyle = createGlobalStyle`
  ${MaterialDesignIcons}

  *{
    outline: 0 !important;
    box-sizing: border-box;
  }
  
  body{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin: 0;
    font-size: 14px;
    color: #626262;
    background: #F8F8F8;
  }

  a{
    color: #7E9AA8;
    text-decoration: none;
    background-color: transparent;
    transition: all 250ms ease 0s;
    &:hover{
      color: #0C344B;
    }
  }

  .swal2-title{
    font-size: 21px !important;
  }

  .justify-center{
    justify-content: center !important;
  }

  .row .col-xs-3,
  .row .col-xs{
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 10px;
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.95, 0.95, 0.95);
    }
    20%{
      opacity: .2
    }
    40% {
      opacity: .4;
    }
    60% {
      opacity: .6;
    }
    80% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(234, 84, 85, 0.4);
      box-shadow: 0 0 0 0 rgba(234, 84, 85, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(234, 84, 85, 0);
        box-shadow: 0 0 0 10px rgba(234, 84, 85, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(234, 84, 85, 0);
        box-shadow: 0 0 0 0 rgba(234, 84, 85, 0);
    }
  }

  .zoomIn {
    animation-name: zoomIn;
  }

  .animated {
    animation-duration: .4s;
  }

`;

export default GlobalStyle;
