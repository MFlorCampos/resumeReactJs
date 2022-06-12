import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';

import sparkle from '../../../public/sparkle.png';
import spark from '../../../public/spark.png';
import { css } from '@emotion/react';
import media from '../../styles/media';

const Styles = css`
  .flex {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    .list-icon {
      height: 15px;
      margin-right: 10px;
      width: 15px;
    }
  }
  z-index: 3;
  position: relative;

  h2 {
    font-size: 2.5rem;
    line-height: 3.3rem;
    color: #000;
    z-index: 3;
    font-weight: 100;
    text-align: left;
    padding-bottom: 0;
  }
  .highlight {
    border:1px solid #000;
    border-radius: 30px;
    padding: 5px 15px;
    align-items: center;
    display: flex;
    width: 45%;
    .star-icon {
      height: 50px;
      width: 50px;
      margin-right: 20px;
    }
  }
  .services-list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
  }
  .service-box {
    width: 30%;
    border-top: 3px solid #FFF;
    margin-top: 20px;
    margin-right: 20px;

    &:last-of-type {
      margin-bottom: 2rem;
    }

    p {
      color: #000;
      font-size: 1.5rem;
      line-height: 1.8rem;
      transition: all 1s;
      padding-bottom: 20px;
    }
    h3 {
      font-size: 2.5rem;
      color: #000;
      font-weight: 600;
      padding: 0;
    }
    h4 {
      font-size: 1.4rem;
      color: #000;
      font-weight: 400;
      line-height: 1.8rem!important;
      padding: 0;
      font-style: italic;
    }
    h5 {
      font-size: 1.2rem;
      color: #000;
      font-weight: 300;
      line-height: 1.8rem!important;
      padding: 0;
    }
    .title-container {
      .text-conteiner {
        display: block;
      }
      display: flex;
      padding: 20px 0;
    }
  }
  .blank {
    width: 30%;
    margin-right: 20px;
    display:flex;
  }
  ${media.medium} {
    padding: 40px;
    .highlight {
      width: 100%;
      .star-icon {
        margin-right: 0px;
      }
    }
    h2 {
      text-align: center;
    }
    .services-list {
      flex-direction: column;
      .service-box {
        width: 100%;
        p {
          padding: 0;
        }
        &.open {
          .title-container:before {
            transform: rotate(225deg) translateY(-10px) translateX(-10px);
          }
          p {
            padding-bottom: 20px;
            max-height:2000px;
          }
        }
        .title-container {
          position: relative;
          flex-direction: row-reverse;
          justify-content: flex-end;
          h3 {
            font-size: 1.9rem;
          }
          .title-icon {
            margin-right: 10px;
          }
          &:before {
            content: '';
            right: 0;
            min-width: 10px;
            min-height: 10px;
            width: 10px;
            height: 10px;
            transform: rotate(45deg);
            border-bottom: 2px solid #000;
            transition: all 0.4s;
            border-right: 2px solid #000;
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

  let className = `service-box ${isOpen ? 'open' : ''}`;

  useEffect(() => {
    className =  `service-box ${isOpen ? 'open' : ''}`;
  }, [isOpen]);


  return title ? (
    <div onClick={handleOpen} className={className}>
      <div className="title-container">
        <div className="text-conteiner">
          <h3 dangerouslySetInnerHTML={i18n(locale, title)} />
          <h4 dangerouslySetInnerHTML={i18n(locale, subtitle ? subtitle : '')} />
          <h5 dangerouslySetInnerHTML={i18n(locale, date )} />
        </div>
      </div>
        <p className="wrap" >
          <p dangerouslySetInnerHTML={i18n(locale, text)} />
          <ol>
            <li className="flex" >
              <img className="list-icon" src={spark} />
              <h4 dangerouslySetInnerHTML={i18n(locale, items.first )} />
            </li>
            <li className="flex" >
              <img className="list-icon" src={spark} />
              <h4 dangerouslySetInnerHTML={i18n(locale, items.second )} />
            </li>
            <li className="flex" >
              <img className="list-icon" src={spark} />
              <h4 dangerouslySetInnerHTML={i18n(locale, items.third )} />
            </li>
          </ol>
        </p>
    </div> ) : (
    <div className="blank"></div>
    )
};

const WorkExperience = () => {
  let { locale } = useParams();
  locale = locale || 'us';

  return (
    <div id="services" css={[Styles]}>
      <div className="container">
        <div>
          <div className="highlight">
            <img className="star-icon" src={sparkle} />
            <h2 dangerouslySetInnerHTML={i18n(locale, 'work-experience')} />
          </div>
          <div className="services-list">
            { services.map((service, index) => <Service key={index} {...service} />) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
