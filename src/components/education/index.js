import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import spark from '../../../public/spark.png';
import sparkle from '../../../public/sparkle.png';

import { css } from '@emotion/react';
import media from '../../styles/media';

const Styles = css`
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
  .sparkle-icon {
    height: 30px;
    width: 30px;
    margin-right: 20px;
  }
  .services-list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
  }
  .service-box {
    width: 30%;
    margin-top: 20px;
    margin-right: 20px;
    border-top: 3px solid #fff;

    &:last-of-type {
      margin-bottom: 2rem;
    }

    p {
      color: #000;
      font-size: 1.5rem;
      line-height: 1.8rem;
      transition: all 1s;
    }
    h3 {
      font-size: 2.5rem;
      color: #000;
      font-weight: 600;
      padding: 0;
      padding-bottom: 15px;
    }
    h4 {
      font-size: 1.4rem;
      color: #000;
      font-weight: 400;
      line-height: 1.8rem!important;
      padding: 0;
      font-style: italic;
      padding-bottom: 15px;
    }
    h5 {
      font-size: 1.2rem;
      color: #000;
      font-weight: 300;
      line-height: 1.8rem!important;
      padding: 0;
    }

    .title-container {
      .text-container {
        .flex {
          display: flex;

          .star-icon {
            height: 50px;
            width: 50px;
            margin-right: 20px;
          }
        }
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
    }
    h2 {
      text-align: center;
    }
    .services-list {
      flex-direction: column;
      .service-box {
        width: 100%;

        .title-container {
          position: relative;
          flex-direction: row-reverse;
          justify-content: flex-end;
          h3 {
            font-size: 2rem;
          }
          .title-icon {
            margin-right: 10px;
          }
        }
        p {
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
    <div className="service-box" >
      <div className="title-container">
        <div className="text-container">
          <div className="flex">
            <img src={spark} className="sparkle-icon" />
            <div className="text-container">
              <h3 dangerouslySetInnerHTML={i18n(locale, title)} />
              <h4 dangerouslySetInnerHTML={i18n(locale,  subtitle)} />
              <h5 dangerouslySetInnerHTML={i18n(locale, date )} />
            </div>
          </div>
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
            <img className="star-icon" src={sparkle} />
            <h2 dangerouslySetInnerHTML={i18n(locale, 'education')} />
          </div>
          <div className="services-list" data-aos="fade-right">
            { services.map((service, index) => <Service key={index} {...service} />) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
