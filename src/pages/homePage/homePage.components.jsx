import React from 'react';
import '../../App.css';
import  { PortfolioWeb, PortfolioPython, ContactForm, Header } from '../../components/homeDIrectory/home.components';
import { Spinner } from 'react-bootstrap';

const HomePage = ({state, ...props}) => {
    console.log(props);
    const { projects, link, loading } = state;
    const pythonProjects = projects.slice((projects.length -1, projects.length -3)); 
    return(
        <div>
        <Header />
        {loading ?
            
        (   <div>
            <PortfolioWeb projects={projects} link={ link }/> 
            <PortfolioPython projects= {pythonProjects} link={link}/> 
            </div>)
            : (<Spinner animation='border' variant='danger'/>) 
        }
        <ContactForm />
        </div>

    );
};


export default HomePage;