import React from 'react';
import '../../App.css';
import  { PortfolioWeb, PortfolioPython, ContactForm, Header } from '../../components/homeDIrectory/home.components';


const HomePage = ({state, ...props}) => {
    console.log(props);
    const { projects, link } = state;
    const pythonProjects = projects.slice((projects.length -1, projects.length -3)); 
    return(
        <div>
        <Header />
        <PortfolioWeb projects={projects} link={ link }/> 
        <PortfolioPython projects= {pythonProjects} link={link}/>
        <ContactForm />
        </div>

    );
};


export default HomePage;