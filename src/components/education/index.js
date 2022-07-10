import React from 'react';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import { css } from '@emotion/react';
import media from '../../styles/media';
import { ReactComponent as Logo} from '../../../public/icon.svg'


const Styles = css`
  z-index: 3;
  position: relative;

  h2 {
    font-size: 2.5rem;
    line-height: 3.3rem;
    margin-left: 40px;
    color: #F9FAFF;
    text-align: left;
    font-weight: 100;
    z-index: 3;
    padding-bottom: 0;
  }
  .highlight {
    background: linear-gradient(100deg, #376DF9 0, #FF5FA0 75%, #FFC55A 100%);
    border-radius: 30px;
    padding: 5px 15px;
    align-items: center;
    display: flex;
    width: 45%;
  }

  .item-list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;

    .item-box {
      width: 30%;
      margin-top: 20px;
      margin-right: 20px;
      border-top: 3px solid #F9FAFF;

      p {
        color: #959CB1;
        font-size: 1.5rem;
        line-height: 1.8rem;
        transition: all 1s;
      }

      h3 {
        font-family: "Heebo", sans-serif;
        font-size: 2.5rem;
        color: #F9FAFF;
        font-weight: 600;
        padding: 0;
        padding-bottom: 15px;
      }

      h4 {
        font-size: 1.4rem;
        color: #959CB1;
        font-weight: 400;
        line-height: 1.8rem!important;
        padding: 0;
        font-style: italic;
        padding-bottom: 15px;
      }

      h5 {
        font-size: 1.2rem;
        color: #959CB1;
        font-weight: 300;
        line-height: 1.8rem!important;
        padding: 0;
      }
  }

    .title-container {
      display: flex;
      padding: 20px 0;

      .icon {
        width: 10%;
      }

      .text-container {
        width: 90%;
        margin-left: 10px;
        display: block;
      }
    }
  }

  ${media.medium} {
    padding: 40px;

    .highlight {
      width: 100%;
    }

    .item-list {
      flex-direction: column;

      .item-box {
        width: 100%;
        margin: 0;

        .title-container {
          position: relative;
          justify-content: flex-end;

          .icon {
            width: 15%;
          }

          .text-container {
            width: 85%;

            h4 {
              padding-bottom: 0.5em;
            }
          }

          h3 {
            font-size: 1.9rem;
            padding-bottom: 0.5em;
          }
        }
        p {
          max-height:0;
          overflow: hidden;
        }
      }
    }
  }
`;

const services = [
  {
    title: "bachelor",
    subtitle: "empty",
    date: "2018",
  },
  {
    title: "udemy",
    subtitle: "udemy-title",
    date: "sept-2019",
  },
  {
    title: "education-it",
    subtitle: "education-it-title",
    date: "feb-2020",
  },
  {
    title: "codo-a-codo",
    subtitle: "codo-a-codo-title",
    date: "aug-2020",
  },
  {
    title: "center-27",
    subtitle: "center-27-title",
    date: "mar-2020",
  },
  {
    title: "bootcamp-ml",
    subtitle: "mercado-libre",
    date: "sept-2021",
  },
];

const Service = ({title, date, subtitle = {}}) => {
  let { locale } = useParams();
  locale = locale || 'us';

  return title ? (
    <div className="item-box" >
      <div className="title-container">
        <Logo className="icon" />
        <div className="text-container">
          <h3 dangerouslySetInnerHTML={i18n(locale, title)} />
          <h4 dangerouslySetInnerHTML={i18n(locale,  subtitle)} />
          <h5 dangerouslySetInnerHTML={i18n(locale, date )} />
        </div>
      </div>
    </div> ) : (
    <div className="blank"></div>
    )
};

const Education = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  return (
    <div id="education" css={[Styles]}>
      <div className="container">
        <div>
          <div className="highlight" data-aos="fade-right">
            <h2 dangerouslySetInnerHTML={i18n(locale, 'education')} />
          </div>
          <div className="item-list" data-aos="fade-right">
            { services.map((service, index) => <Service key={index} {...service} />) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
