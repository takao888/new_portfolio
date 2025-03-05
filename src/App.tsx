import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header {...portfolioData.header} />
      <main className="pt-24">
        <About {...portfolioData.about} />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Contact contact={portfolioData.contact} />
      </main>
    </div>
  );
}

export default App;