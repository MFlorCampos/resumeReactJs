import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';
import reactLogo from '../../../public/react-js.png';
import sasssLogo from '../../../public/sass.png';

// import mySqlLogo from '../../../public/my-sql.png';
// import laravelLogo from '../../../public/laravel.png';
// import vueLogo from '../../../public/vue-js.png';

import node from '../../../public/node.png';
import js from '../../../public/js.png';
import ts from '../../../public/ts.png';
import css3 from '../../../public/css.png';
import html from '../../../public/html.png';
import es6 from '../../../public/es6.png';
// import angularLogo from '../../../public/angular.png';
import jestLogo from '../../../public/jest.png';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';

const Styles = css`
  position: relative;
  padding: 50px 0 100px

  h2 {
    font-size: 2.5rem;
    line-height: 3.3rem;
    color: #000;
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
      margin: 0 1em;
      display: flex;
      border-radius: 100%;
      background: radial-gradient(circle at bottom, #376DF9 0%, #ff79af 50%, #FF8D74 100%);

      img {
        width: 8em;
        height: 8em;
        object-fit: contain;
        padding: 1.2em;

      }
    }
  }

  ${media.medium} {
    padding: 0 40px;

    .container {
      background-color: unset;
      padding: 0;
    }

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
        margin: 0.5em;
      }
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
                <img alt="html" src={html} />
              </div>
              <div className="logo">
                <img alt="css3" src={css3} />
              </div>
              <div className="logo">
                <img alt="sass" src={sasssLogo} />
              </div>
              <div className="logo">
                <img alt="mysql" src={js} />
              </div>
              <div className="logo">
                <img alt="es6" src={es6} />
              </div>
              <div className="logo">
                <img alt="ts" src={ts} />
              </div>
              <div className="logo">
                <img alt="react"  src={reactLogo} />
              </div>
              <div className="logo">
                <img alt="mysql" src={node} />
              </div>
              <div className="logo">
                <img alt="jest" src={jestLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
export default ProgrammingLanguages;
