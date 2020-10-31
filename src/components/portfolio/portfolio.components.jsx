import React from 'react';
import './portfolio.sytles.scss';
import {Link} from 'react-router-dom';

export const MainContent = ({project}) => (
  project ? 
    (<div className='head'>
    <h1 className='head__title'>{project.title}</h1>
    <h3 className='head__discription'>description</h3>
    <p class='head__paragraph'>{project.discription}</p>
    <h3 className='head__language'>Language : {project.language}</h3>
    <h3 className='head__link'>github : <Link className="link" to={project.github}>{project.github}</Link></h3>
    <h3 className='head__link'>website :<Link className="link" to={project.website}>{project.website}</Link></h3>
    <h3 className='head__discription'>Summary</h3>
    <p className='head__paragraph'>{project.summary}</p>
    </div>): <div><h1>Loading...</h1></div>)
