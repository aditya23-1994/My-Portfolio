import React from 'react';
import {Link, Route} from 'react-router-dom';
import {MainContent} from '../../components/portfolio/portfolio.components';
import './portfolio.styles.scss';

export const Portfolio = ({projects, active}) => {
  return (
    <div className="container">
    <div className= "portfolio-render">
    <div className="sidebar">
    <ul className="side-nav">
      {projects.map(project => (
        <div className= "side-nav__item" key={project.id}>
          <li><Link  className="side-nav__link" to={`/portfolio/${project.slug}`}>          
            <h3 className="project-title">{project.title}</h3>
          </Link></li>
        </div>
      ))}
    </ul>
    </div>
    <div className="portfolio-main">
      <Route exact path= "/portfolio" render ={() => (
        <h1>Welcome</h1>
      )}/>  
      <Route path="/portfolio/:slug" render={({match}) => (<MainContent
        className="Container-main" project={projects.find(p => p.slug === match.params.slug)} />)} /> 
    </div>    
  </div>
    </div>
  )
}






