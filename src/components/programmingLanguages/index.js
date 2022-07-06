import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';
import reactLogo from '../../../public/react-js.png';
import sasssLogo from '../../../public/sass.png';
import mySqlLogo from '../../../public/my-sql.png';
import laravelLogo from '../../../public/laravel.png';
import vueLogo from '../../../public/vue-js.png';
import angularLogo from '../../../public/angular.png';
import jestLogo from '../../../public/jest.png';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';

const Styles = css`
  z-index: 3;
  position: relative;
  padding: 50px 0 100px

  h2 {
    font-size: 2.5rem;
    line-height: 3.3rem;
    color: #000;
    z-index: 3;
    text-align: center;
  }
  .container {
    padding: 0;

    .border {
      border: 1px solid #959CB1;
      border-radius: 15px;
      height: 100%;
      width: 100%;
      .frame {
        width: 100%;
        border-bottom: 1px solid #959CB1;
        align-items: center;
        display: flex;
        padding: 10px;
        .circle {
          width: 20px;
          height: 20px;
          border: 1px solid #959CB1;
          border-radius: 30px;
        }
        .circle2 {
          width: 20px;
          height: 20px;
          border: 1px solid #959CB1;
          border-radius: 30px;
          margin-left: 5px;
        }
      }
    }
    .container-rounded {
      border-radius:30px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .highlight {
        padding: 50px 0 0;
        font-weight: 100;
      }

    }
  }

  .logos-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 50px 0;

    .logo {
      background: radial-gradient(circle at bottom, #376DF9 0%, #ff79af 50%, #FF8D74 100%);
      border-radius: 100%;
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      margin: 0 1em;

      img {
        width:60%;
      }
      a {
        font-size: 1.3rem;
        display: flex;
        img {
          width: 60px;
          height: 60px;
          object-fit: contain;
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
    .container {
      background-color: unset;
      padding: 0;
    }

    padding: 0 40px;
    h2 {
      padding: 50px 20px 0 20px!important;
      font-size: 1.9rem;
    }
    h3 {
      font-weight:400;
      font-size:1.8rem;
    }
    .highlight {
      padding: 0;
    }

    .logos-container {
      display: flex;
      flex: wrap;
      flex-wrap: wrap;
      justify-content: center;
      .logo {
        width: 60px;
        margin: 8px;
        height: 60px;
        padding: 45px;
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
      <div className="container" data-aos="fade-up">
        <div className="container-rounded">
          <div className="border" >
            <div className="frame">
              <div className="circle"></div>
              <div className="circle2"></div>
            </div>
            <h2 dangerouslySetInnerHTML={i18n(locale, 'programming-languages')} className="highlight" />
            <div className="logos-container">
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
        </div>
      </div>
  </div>
  );
}
export default ProgrammingLanguages;
