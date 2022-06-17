import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';
import html from '../../../public/html-5.png';
import cssLogo from '../../../public/css-3.png';
import reactLogo from '../../../public/react-js.png';
import sasssLogo from '../../../public/sass.png';
import mySqlLogo from '../../../public/my-sql.png';
import laravelLogo from '../../../public/laravel.png';
import vueLogo from '../../../public/vue-js.png';
import angularLogo from '../../../public/angular.png';
import jestLogo from '../../../public/jest.png';
import sparkle from '../../../public/sparkle-light.png';
import sparkleTwo from '../../../public/sparkle.png';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';

const Styles = css`
  z-index: 3;
  position: relative;

  h2 {
    font-size: 2.5rem;
    line-height: 3.3rem;
    color: #000;
    z-index: 3;
    font-weight: 100;
    text-align: center;
  }

  .container-rounded {
    border: 1px solid #000;
    border-radius:30px;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .highlight {
      border:1px solid #000;
      border-radius: 30px;
      padding: 5px 15px;
      width: auto;
      margin-bottom: 50px;
      margin-top: 70px;
    }

  }

  .logos-container {
    display: flex;
    justify-content: space-between;
    padding: 0 0 50px;
    width: 90%;
    .logo{
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      img {
        width:60%;
      }
      a {
        font-size: 1.3rem;
        display: flex;
        img {
          width: 80px;
          margin: auto;
        }
      }
    }
  }
  .icon-up {
    position:absolute;
    left: 100px;
    width: 250px;
    top: -300px;
  }
  .icon-down {
    position:absolute;
    right: 0px;
    width: 250px;
    bottom: -250px;
  }
  ${media.medium} {
    padding: 40px;
    h2 {
      width: 80%;
      font-size: 1.9rem;
    }
    h3 {
      font-weight:400;
      font-size:1.8rem;
    }
    .highlight {
      margin-bottom: 70px!important;
      margin-top: 20px!important;
    }
    .container-rounded {
      background: transparent;
      padding: 40px;
    }
    .logos-container {
      padding-bottom: 0px;
      display: flex;
      flex: wrap;
      flex-wrap: wrap;
      justify-content: center;
      .logo {
        width: 50%;
        a {
          font-size: 1.5rem;
        }
      }
    }
    .icon-up {
      left: 0;
      width: 130px;
      top: -150px;
    }
    .icon-down {
      width: 100px;
      bottom: -135px;
    }
  }
`;

const ProgrammingLanguages = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  return (
    <div css={[Styles]} id="tools" >
      <img src={sparkle} className="icon-up" />
      <div className="container">
        <div className="container-rounded" data-aos="fade-up">
          <h2 dangerouslySetInnerHTML={i18n(locale, 'programming-languages')} className="highlight" />

          <div className="logos-container">
            <div className="logo">
              <a target="_blank" href="https://www.borderlesscapital.io/">
                <img alt="borderless"  src={html} />
              </a>
            </div>
            <div className="logo">
              <a target="_blank" href="https://newtopia.vc/">
                <img alt="newtopia"  src={cssLogo} />
              </a>
            </div>
            <div className="logo">
              <a target="_blank" href="https://sur.vc/">
                <img alt="sur"  src={reactLogo} />
              </a>
            </div>
            <div className="logo">
              <a target="_blank" href="https://spicevc.com/">
                <img alt="spice" src={sasssLogo} />
              </a>
            </div>
            <div className="logo">
              <a target="_blank" href="https://www.11-11dg.partners/">
                <img alt="dg" src={mySqlLogo} />
              </a>
            </div>
            <div className="logo">
              <a target="_blank" href="https://xeibocapital.com/">
                <img alt="xeibo" src={laravelLogo} />
              </a>
            </div>
            <div className="logo">
              <a target="_blank" href="https://xeibocapital.com/">
                <img alt="xeibo" src={vueLogo} />
              </a>
            </div>
            <div className="logo">
              <a target="_blank" href="https://xeibocapital.com/">
                <img alt="xeibo" src={jestLogo} />
              </a>
            </div>
            <div className="logo">
              <a target="_blank" href="https://xeibocapital.com/">
                <img alt="xeibo" src={angularLogo} />
              </a>
            </div>
          </div>
        </div>
        <img src={sparkleTwo} className="icon-down" />
      </div>
  </div>
  );
}
export default ProgrammingLanguages;
