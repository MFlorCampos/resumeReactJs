import React from 'react';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import media from '../../styles/media';
import { HashLink as Link } from 'react-router-hash-link';
import BackgroundLeft from '../svg/full-left';

const Styles = css`
  background-color: #16171b;
  position: relative;
  z-index: 1;

  section {
    height: 100vh;
  }
  .container {
    height: 100vh;

    .background {
      position: absolute;
      padding-top: 20em;
      overflow: visible;
    }

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
    letter-spacing: -2px;
    font-weight: 600;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    color: #959CB1;
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

  ${media.medium} {
    display: flex;
    align-items: center;

    .container {
      .background {
        left: -45em;
      }
    }

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
        <BackgroundLeft />
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
