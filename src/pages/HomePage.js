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
          <Hero color={"grey"} />

          <StyledSection classNames="nopadding-bot-mobile" color={"grey"} >
            <About />
          </StyledSection>

          <WorkExperience />

          <StyledSection color={"grey"} >
            <ProgrammingLanguages />
          </StyledSection>

          <StyledSection classNames="nopadding-bot-mobile" color={"grey"} >
            <Education />
          </StyledSection>

        </>
      </AppLayout>
    </ThemeProvider>
  );
};

export default HomePage;
