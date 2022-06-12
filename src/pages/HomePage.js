import React from 'react';

import AppLayout from '../layouts/AppLayout';
import ThemeProvider from '../contexts/ThemeContext';
import Hero from '../components/hero';
import StyledSection from '../components/styled-section';
import About from '../components/about';
import ProgrammingLanguages from '../components/programmingLanguages';
import WorkExperience from '../components/work-experience';
import Education from '../components/education';

const HomePage = () => {
  return (
    <ThemeProvider>
      <AppLayout>
        <>
          <Hero color={"gradient-light"} classNames="noise" />

          <StyledSection classNames="nopadding-bot-mobile border-white" color={"gradient-light"} >
            <About />
          </StyledSection>

          <StyledSection color={"gradient-up"} >
            <WorkExperience />
          </StyledSection>

          <StyledSection color={"gradient-down"} >
            <ProgrammingLanguages />
          </StyledSection>

          <StyledSection color={"gradient-up"} >
            <Education />
          </StyledSection>

        </>
      </AppLayout>
    </ThemeProvider>
  );
};

export default HomePage;
