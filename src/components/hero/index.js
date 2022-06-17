import React, { useState } from 'react';
import { css } from '@emotion/react';
import heroImg from '../../../public/hero1.png';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';

import media from '../../styles/media';
import { HashLink as Link } from 'react-router-hash-link';

const Styles = css`
  .hero-sparkles {
    z-index: 10;
    position: absolute;
    object-fit: contain;
    height: 100%;
    width: 100%;
    padding: 90px;
  }
  ::after {
    content: '';
    position: absolute;
    width: 200vw;
    height: 100%;
    top: 0;
    background-image: url(data:image/png;base64,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);
  }
  border-bottom: 3px solid #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  position: relative;
  z-index: 4;
  section {
    height: 100vh;
  }
  .container {
    .title {
      .flex {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .border {
        border: 1px solid black;
        border-radius: 15px;
        height: 70px;
        width: 40%;
        .frame {
          height: 20px;
          width: 100%;
          border-bottom: 1px solid black;
          align-items: center;
          display: flex;
          padding: 10px;
          .circle {
            width: 10px;
            height: 10px;
            border: 1px solid black;
            border-radius: 30px;
          }
          .circle2 {
            width: 10px;
            height: 10px;
            border: 1px solid black;
            border-radius: 30px;
            margin-left: 5px;
          }
        }
      }
    }
    height: 100vh;
    .scrolldown a svg {
       position: absolute;
       bottom: 30px;
       left: 50%;
       margin-left: -29px;
       color: #000;
       display: block;
       height: 42px;
       width: 42px;
       font-size: 42px;
       line-height: 42px;
       border-radius: 100%;
       z-index: 99;

       -webkit-transition: all .3s ease-in-out;
       -moz-transition: all .3s ease-in-out;
       -o-transition: all .3s ease-in-out;
       transition: all .3s ease-in-out;
    }
    .scrolldown a svg:hover { color: #FFF; }

  }

  h1 {
    font-size: 6rem;
    text-align: center;
    color: #000;
    z-index: 3;
    letter-spacing: -2px;
    font-weight: 300;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    color: #000;
    z-index: 3;
    font-family: 'Questrial', sans-serif;
    padding: 5px 30px;
    display: flex;
    align-items: end;
    justify-content: center;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height:100%;
    width:100%;
  }

  .hero-image {
    max-width: 100%;
  }

  .hero-image-mobile {
    display:none;
  }
  .slick-arrow {
    display: none!important;
  }
  .hero-3 {
    position:relative;
    .container {
      position: absolute;
      top: 0;
      left:0;
      right:0;
      width:100vw;
    }

    h1 {
      margin-top:50px;
      margin-bottom:20px;
    }
  }
  .hero-2 {
    position:relative;
  }

  .float-left {
    align-self:flex-start;
    text-align:left;
    max-width: 600px;
    margin-bottom: 200px;
    margin-top: 0;
  }

  .float-right {
    float:right;
    text-align:right;
    align-self:flex-end;
  }
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
  .hero-slide {
    position: relative;
    .container {
      position:absolute;
      top:0;
      left:0;
      right:0;
    }
  }
  ${media.medium} {
    display: flex;
    align-items: center;
    .hero-sparkles {
      padding: 10px;
      object-fit: fill;
      height: 60%;
    }
    .hero-slide {
      padding-left: 0;
      padding-right: 0;
      video {
        width:100vw
      }
    }

    padding-top: 0;
    height: calc(100vh);
    .hero-3 {
      background-size: cover;
    }

    .background {
      width: 80%;
      height: 200px;
      margin: auto;
    }

    br {display:none;}
    .border {
      border: 1px solid black;
      border-radius: 15px;
      height: 60px;
      align-items: end;
      width: 60%!important;
    }
    .title {
      width: 100%;
      overflow: hidden;
      padding: 0 40px;
    }

    .hero-image-mobile {
      display: block;
    }

    .hero-image {
      display:none;
    }

    h1 {
      font-size: 3.5rem;
      width: 100%;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      padding: 5px;
      line-height: 2.5rem;
    }
  }
`;

const Hero = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  return (
    <div className="noise" css={[Styles]} >
      <img src={heroImg} className="hero-sparkles" />
      <div className="container">
        <div className="title" >
          <div className="flex" >
            <h1 dangerouslySetInnerHTML={i18n(locale, 'hero-1-title')} data-aos="fade-up" />
            <div className="border" >
              <div className="frame">
                <div className="circle"></div>
                <div className="circle2"></div>
              </div>
              <h2 dangerouslySetInnerHTML={i18n(locale, 'hero-1-desc')} data-aos="fade-up"/>
            </div>
          </div>
        </div>
        <p className="scrolldown">
          <Link to={`/${locale}/#about`} className="smoothscroll">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </Link>
        </p>
      </div>
    </div>

  );
}

export default Hero;
