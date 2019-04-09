import Styled from 'styled-components'

const HeaderContent = Styled.div`
    z-index:1;
    color: #fff;
    text-align: center;
    

    h1{
        font-size:50px;
        margin-bottom:0;
    }

    p{
        font-size:1.5rem;
        display:block;
        padding-bottom:2rem;
    }

    .btn{
        background: #34b3a0;
        color:#fff;
        font-size:1.2rem;
        padding: 1rem 2rem;
        text-decoration: none;
    }

    .btn:hover{
        box-shadow: #fff 1px 1px 1px;
    }

    .btn:active{
        background-color: #fff;
        color: #000 !important;
        box-shadow: #000 1px 1px 1px;
    }
`
export default HeaderContent