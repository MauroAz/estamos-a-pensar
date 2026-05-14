'use client';

import Navbar from './components/navbar';
import ScrollDots from './components/scrolldots';
import Hero from './components/hero';
import ProjectSection from './components/projectsection';
import SkillsExperience from './components/skillsexperience';
import Recommendations from './components/recommendations';
import Contact from './components/contact';
import Footer from './components/footer';
import ThemeProvider from './context/ThemeProvider';

export default function Home() {
    return (
        <ThemeProvider>
            <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
                <Navbar />
                <ScrollDots />
                <div id="home"><Hero /></div>
                <div id="projects"><ProjectSection /></div>
                <div id="skills"><SkillsExperience /></div>
                <div id="recommendations"><Recommendations /></div>
                <div id="contact"><Contact /></div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}