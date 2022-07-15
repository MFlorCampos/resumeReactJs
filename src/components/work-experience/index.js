import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import { css } from '@emotion/react';
import media from '../../styles/media';
import { ReactComponent as Logo} from '../../../public/icon.svg'
import BackgroundRight from '../svg/full-right';

const Styles = css`
  background-color: #16171b;
  padding: 100px 0 100px;
  position: relative;

  .container {
    .background {
      position: absolute;
      overflow: visible;
    }
  }

  .flex {
    display: flex;
    align-items: center;

    .list-icon {
      height: 2em;
      margin-right: 10px;
      width: 10%;
    }

    h4 {
      width: 90%;
    }
  }

  h2 {
    margin-left: 40px;
    font-size: 2.5rem;
    line-height: 3.3rem;
    color: #F9FAFF;
    font-weight: 100;
    text-align: left;
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
  }

  .item-box {
    width: 30%;
    border-top: 1px solid #FFF;
    margin-top: 20px;
    margin-right: 20px;

    &:last-of-type {
      margin-bottom: 2rem;
    }

    .wrap {
      color: #959CB1;
      font-size: 1.5rem;
      line-height: 1.8rem;
      transition: all 1s;
      padding-bottom: 20px;

      p {
        padding-bottom: 20px;
      }
    }

    .title-container {
      display: flex;
      padding: 20px 0;

      .text-container {
        display: block;

        h3 {
          color: #F9FAFF;
          font-size: 2.5rem;
          font-weight: 600;
          padding-bottom: 0.5em;
        }

        h4 {
          font-size: 1.4rem;
          color: #959CB1;
          font-weight: 400;
          padding: 0;
          font-style: italic;
          padding-bottom: 0.5em;
        }

        h5 {
          font-size: 1.2rem;
          color: #959CB1;
          font-weight: 300;
          line-height: 1.8rem!important;
          padding: 0;
        }
      }
    }
  }

  .blank {
    width: 30%;
    margin-right: 20px;
    display:flex;
  }

  ${media.medium} {
    padding: 40px;

    .container {
      .background {
        right: -55em;
        top: 0;
      }
    }

    .flex {
      .list-icon {
        width: 12%;
      }

      h4 {
        width: 88%;
      }
    }

    .highlight {
      width: 100%;
    }

    h2 {
      margin-left: 20px;
      text-align: center;
    }

    .item-list {
      flex-direction: column;

      .item-box {
        width: 100%;
        margin: 0;

        .wrap {
          padding: 0;
        }

        &.open {
          .title-container:before {
            transform: rotate(225deg) translateY(-10px) translateX(-10px);
          }

          .wrap {
            padding-bottom: 20px;
            max-height:2000px;
          }
        }

        .title-container {
          position: relative;
          flex-direction: row-reverse;
          justify-content: flex-end;

          .text-container {
            width: 95%;
            h3, h4 {
              padding-bottom: 0.5em;
            }

            h3 {
              font-size: 1.9rem;
            }
          }

          &:before {
            content: '';
            right: 0;
            min-width: 10px;
            min-height: 10px;
            width: 10px;
            height: 10px;
            transform: rotate(45deg);
            border-bottom: 2px solid #959cb1;
            transition: all 0.4s;
            border-right: 2px solid #959cb1;
            position:absolute;
            top: 25px;
          }
        }

        .wrap {
          max-height:0;
          overflow: hidden;
        }
      }
    }

    .blank {
      display:none;
    }
  }
`;

const services = [
  {
    title: "software-dev",
    subtitle: "mercado-libre",
    date: "2022",
    text: "mercado-libre-desc",
    items: {
      first: "api-rest",
      second: "middleend",
      third: "react-js",
    },
  },
  {
    title: "software-dev-analyst",
    subtitle: "minister",
    date: "2021",
    text: "minister-desc",
    items: {
      first: "services-dev",
      second: "middlewares",
      third: "controllers",
    },
  },
  {
  },
  {
  },
  {
    title: "freelance-dev",
    subtitle: "minister",
    date: "2020",
    text: "freelance-desc",
    items: {
      first: "full-stack",
      second: "middleend",
      third: "react-js",
    },
  },
  {
    title: "igee-web-design",
    subtitle: "company",
    date: "2019",
    text: "igee-desc",
    items: {
      first: "php",
      second: "jquery",
      third: "controllers",
    },
  },
];

const Service = ({title, text, subtitle, date, items = {}}) => {
  let { locale } = useParams();
  locale = locale || 'us';

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (e) => { setIsOpen(!isOpen); }

  let className = `item-box ${isOpen ? 'open' : ''}`;

  useEffect(() => {
    className =  `tem-box ${isOpen ? 'open' : ''}`;
  }, [isOpen]);


  return title ? (
    <div onClick={handleOpen} className={className}>
      <div className="title-container">
        <div className="text-container">
          <h3 dangerouslySetInnerHTML={i18n(locale, title)} />
          <h4 dangerouslySetInnerHTML={i18n(locale, subtitle ? subtitle : '')} />
          <h5 dangerouslySetInnerHTML={i18n(locale, date )} />
        </div>
      </div>
        <div className="wrap" >
          <p dangerouslySetInnerHTML={i18n(locale, text)} />
          <ol>
            <li className="flex" >
              <Logo className="list-icon" />
              <h4 dangerouslySetInnerHTML={i18n(locale, items.first )} />
            </li>
            <li className="flex" >
              <Logo className="list-icon" />
              <h4 dangerouslySetInnerHTML={i18n(locale, items.second )} />
            </li>
            <li className="flex" >
              <Logo className="list-icon" />
              <h4 dangerouslySetInnerHTML={i18n(locale, items.third )} />
            </li>
          </ol>
        </div>
    </div> ) : (
    <div className="blank"></div>
    )
};

const WorkExperience = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  return (
    <div id="work-exp" css={[Styles]}>
      <div className="container">
        <BackgroundRight />
        <div>
          <div className="highlight" data-aos="fade-right">
            <h2 dangerouslySetInnerHTML={i18n(locale, 'work-experience')} />
          </div>
          <div className="item-list" data-aos="fade-right" >
            { services.map((service, index) => <Service key={index} {...service} />) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
