import React from 'react'
import Styled from 'styled-components'

const LogoStyle = Styled.svg`
    width: 65px;

    :hover{
        #delta{
            fill: #fff;
        }
        -webkit-filter: drop-shadow( 3px 3px 4px #37c8abbb);
        filter: drop-shadow( 2px 2px 4px #37c8abbb);
        transition-timing-function: ease-in-out;
        -webkit-transition: 200ms;
        -webkit-transition-timing-function: ease-in-out; 
    }

    :active{
        #delta{
            fill: white;
        }
        #theR{
            fill: #37c8abbb;
        }
        #triangle{
            fill: #37c8abbb;
        }
        -webkit-filter: drop-shadow( 3px 3px 5px white);
        filter: drop-shadow( 2px 2px 5px white);
        transition-timing-function: ease-in;
        -webkit-transition: 200ms;
        -webkit-transition-timing-function: ease-in;

    }
`

const Logo = ({
    width = "100%",
    viewBox = "0 0 16.106659 7.9375002"
  }) => (
    <LogoStyle
      width={width}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
    <g transform="translate(3.123228e-7,-289.0625)">
        <g
            transform="matrix(0.14761412,0,0,0.14976822,-4.0338899,272.77347)">
            <g>
                <path
                id="triangle"
                fill='#fff'
                d="M 57.903376,108.76156 27.32726,161.72065 H 64.494137 L 76.486811,140.94879 Z M 79.01267,145.32397 69.546083,161.72065 H 88.479252 Z" />
                <path
                fill='#37c8ab'
                id="delta"
                d="M 86.787013,108.76156 56.211138,161.72065 H 64.494137 L 86.787045,123.1082 109.10274,161.76012 117.36313,161.72065 Z" />
                <path
                fill='#fff'
                id="theR"
                d="M 92.845134,108.81143 H 121.75226 C 138.79534,108.81143 139.68725,137.34645 121.75226,137.34645 H 116.32546 L 130.39792,161.72065 H 123.33834 L 106.27117,132.06601 120.02695,132.08879 C 132.18357,132.08879 132.01794,114.50653 120.03648,114.50653 L 96.103292,114.45473 Z" />
            </g>
        </g>
    </g>
    </LogoStyle>
  );



export default Logo