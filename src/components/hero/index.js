import React from 'react';
import { css } from '@emotion/react';
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
    width: 100%;
    max-width: 100%;
    height: 612px;
    background-size: auto;
    background-image: url(https://preview.cruip.com/neon/images/illustration-section-01.svg);
    background-repeat: no-repeat;
    left: 50%;
    top: 0;
    background-position: center top;
    transform: translate(-50%);
  }
  background-color: #16171b;

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
        border: 1px solid #959CB1;
        border-radius: 15px;
        height: 70px;
        width: 40%;
        .frame {
          height: 20px;
          width: 100%;
          border-bottom: 1px solid #959CB1;
          align-items: center;
          display: flex;
          padding: 10px;
          .circle {
            width: 10px;
            height: 10px;
            border: 1px solid #959CB1;
            border-radius: 30px;
          }
          .circle2 {
            width: 10px;
            height: 10px;
            border: 1px solid #959CB1;
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
       color: #959CB1;
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
    color: #F9FAFF;
    z-index: 3;
    letter-spacing: -2px;
    font-weight: 600;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    color: #959CB1;
    z-index: 3;
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
  ${media.medium} {
    display: flex;
    align-items: center;
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
