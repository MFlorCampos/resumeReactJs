import React from 'react';
import { css } from '@emotion/react';
import media from '../../styles/media';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import phone from '../../../public/phone.png';

const Styles = css`
  .gradient {
    background: rgb(238,174,202);
    background: linear-gradient(228deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)!important;
  }
  z-index: 3;
  position: relative;

  .container {
    align-items: center;
    justify-content: center;
  }

  .info-container {
    display: flex;
    justify-content: flex-end;
    .image-container {
      display: grid;
      justify-content: flex-end;
      width:50%;
      margin-right: 50px;
      .btm-lines {
        width: 35px;
      }
    }
    ol {
      width: 50%;
      li {
        color: #FFF;
        font-size: 2rem;
        line-height: 3.3rem;
      }
    }
  }

  .black-container {
    width:100%;
    background: #1D1D1D;
    padding: 40px;

    h2 {
      font-size: 2.5rem;
      line-height: 3.3rem;
      color: #fff;
      text-align: left;
      margin-bottom: 20px;
      border:1px solid #fff;
      border-radius: 30px;
      padding: 5px 15px;
      width: 30%;
      font-weight: 100;
    }
  }

  .rounded-box {
    margin-top: -60px;
    margin-bottom: -300px;
    margin-left: 350px;
    display: flex;
    align-items: stretch;
    width: 750px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
  }

  .mid-circles {
    position: relative;
    width: 200px;
    margin-left:75px;
  }
  .bold {
    font-weight: 600;
  }
  .green { color: #34C55D }

  ${media.medium} {
    .highlight {
      width: 100%!important;
    }
    .rounded-box {
      width:100%;
      max-width: 400px;
      flex-direction: column;
      margin: 10px;
      margin-top: 100px;
      margin-bottom: 30px;
      border-radius: 15px;
      .green-container {
        border-radius: 15px 15px 0 0;
        padding: 120px 50px;
        font-size: 1.5rem;
        margin-top: -15px;
        line-height: 2.3rem;
      }

    }
    .image-container {
      top:230px;
      width:100%; 
      bottom:unset;
      padding: 10px;
      .mid-circles {
        width: 70%;
        margin-left: -30px;
      }
      .btm-lines {
        width:40%;
        max-height: 33px;
        height:33px;
      }
    }
  }
`;

const Contact = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  return (
    <div css={[Styles]}>
      <div className="container">
        <div className="rounded-box">
          <div className="black-container">
            <h2 dangerouslySetInnerHTML={i18n(locale, 'contact-me')} className="highlight" />
            <div className="info-container">
              <div className="image-container">
                <img className="btm-lines" src={phone} />
                <img className="btm-lines" src={phone} />
                <img className="btm-lines" src={phone} />
                <img className="btm-lines" src={phone} />
                <img className="btm-lines" src={phone} />
              </div>
              <ol>
                <li>
                  +54 9 11 3122-4698
                </li>
                <li>
                  Argentina
                </li>
                <li>
                  m.ﬂorcampos99@gmail.com
                </li>
                <li>
                  www.mariaﬂorenciacampos.com
                </li>
                <li>
                  /MFlorenciaCampos
                </li>
                <li>
                  /FlorCampos
                </li>
              </ol>
            </div>
          </div>
          {/* <div className="green-container" dangerouslySetInnerHTML={i18n(locale, 'onboarding-process-right')} /> */}

        </div>
      </div>
    </div>
  );
}

export default Contact;

