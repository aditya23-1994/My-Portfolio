import React from 'react';
import {Link} from 'react-router-dom';

export const Header = (props) => (
    <header class="header">
    <div class="navigation">
      <div class="navigation__title">
        <h2 class="title-author">Aditya Khatwa</h2>
      </div>
      <div class="navigation__tab">
        <ul>
        <li><h2><a href="#" class="navigation__tab-1">Home</a></h2></li>
        <li><h2><a href="#" class="navigation__tab-2">Biography</a></h2></li>
        <li><h2><a href="#" class="navigation__tab-3">Contact</a></h2></li>
        </ul>
      </div>
    </div>
    
    <div class="heading">
        <h2>
            <p class="heading_primary-main"><span>Hie!</span></p>
            <p class="heading_primary-sub">I am a <span>Web dev | Python dev</span></p>
        </h2>
          <a href="/portfolio/test-case" class="btn btn-header">Portfolio</a>
          <a href="#" class="btn btn-header">Resume</a>
      <div class="stack"><p>My stack</p>
          <ul>
    
              <li><span><ion-icon name="logo-nodejs" class="icon" alt="nodeJS logo"></ion-icon></span></li>
              <li><span><ion-icon name="logo-python" class="icon"></ion-icon></span></li>
              <li><span><ion-icon name="logo-react" class="icon"></ion-icon></span></li>
              <li><span><ion-icon name="logo-html5" class="icon"></ion-icon></span></li>
              <li><span><ion-icon name="logo-sass" class="icon"></ion-icon></span></li>
              <li><span><ion-icon name="logo-css3" class="icon"></ion-icon></span></li>
    
          </ul>
      </div> 
    </div>
    </header>
)

export  const PortfolioWeb = ({ projects, link }) =>{ return(
  <div>
  <section className="portfolio">
    <h1 class="portfolio__header">Spotlight</h1>
  </section>
  <section className="portfolio__web">
    <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">Web development Portfolio</h2>
    </div>          
    <div className="row">
    {projects ? (projects.map(project => (

        <div key={project.id} >
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__title">
                    <h3 className="heading-tertiary">{project.title}</h3>
                    </div>
                </div>
                <div className="card__side card__side--back">
                    <div className="card__description">
                        <p className="card_detail">"{project.sub_discription}"</p>
                    </div>
                    <div className="card__buttons">
                        
                        <a href={project.github} className="btn btn-page">github</a>
                        <Link to={`/portfolio/${project.slug}`} className="btn btn-page">Description</Link>
                    </div>
                </div>
        </div>        
        </div>
    ))) : (<div><h1>Loading...</h1></div>)}
    </div>

    <a href={link} className="btn btn-portfolio-1">Learn more</a>
    
  </section>
  </div>
)};

export const PortfolioPython = ({projects, link}) => {
    return (
        <section class="portfolio__python">
            <div class="u-center-text u-margin-bottom-8">
                <h2 class="heading-secondary">Python projects Portfolio</h2>
            </div>
            
            <div className="row">
            {projects.map(project => (
        
                <div key={project.id} >
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__title">
                            <h3 className="heading-tertiary">{project.title}</h3>
                            </div>
                        </div>
                        <div className="card__side card__side--back">
                            <div className="card__description">
                                <p className="card_detail">"{project.sub_discription}"</p>
                            </div>
                            <div className="card__buttons">
                                
                                <a href={project.github} className="btn btn-page">github</a>
                                <Link to={`/portfolio/${project.slug}`} className="btn btn-page">Description</Link>
                            </div>
                        </div>
                </div>        
                </div>
            ))}
            </div>            

            <a href={link} class="btn btn-portfolio-1">Learn more</a>
            
        </section>
    )
}

export const ContactForm = (props) => {
    return (
        <section className="main-form">
            <div className="row-form">
                <div className="form_row">
                <div className="form_container">
                    <form action="#" className="form">
                        <div className="u-margin-bottom-medium">
                            <h3 className="heading-secondary">Contact form</h3>
                        </div>     
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                            <label for="name" className="form_label">Full Name</label>
                        </div>
                        <div className="form__group">
                            <input type="email" className="form__input" placeholder="e-mail" id="e-mail" required />
                            <label for="email" className="form_label">e-mail</label>
                        </div>
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Purpose of visit" id="purpose" required />
                            <label for="purpose" className="form_label">Purpose</label>
                        </div>
                    </form>
                    <a href="#" className="btn btn-portfolio-2">Submit</a>
                </div>
            </div>
            </div>
        </section>
    )
}


/* To create a seprate header component as this one is not rendering....(Just for reference)
<header class="header">
<div class="navigation">
  <div class="navigation__title">
    <h2 class="title-author">Aditya Khatwa</h2>
  </div>
  <div class="navigation__tab">
    <ul>
    <li><h2><a href="#" class="navigation__tab-1">Home</a></h2></li>
    <li><h2><a href="#" class="navigation__tab-2">Biography</a></h2></li>
    <li><h2><a href="#" class="navigation__tab-3">Contact</a></h2></li>
    </ul>
  </div>
</div>

<div class="heading">
    <h2>
        <p class="heading_primary-main"><span>Hie!</span></p>
        <p class="heading_primary-sub">I am a <span>Web dev | Python dev</span></p>
    </h2>
      <a href="#" class="btn btn-header">Portfolio</a>
      <a href="#" class="btn btn-header">Resume</a>
  <div class="stack"><p>My stack</p>
      <ul>

          <li><span><ion-icon name="logo-nodejs" class="icon" alt="nodeJS logo"></ion-icon></span></li>
          <li><span><ion-icon name="logo-python" class="icon"></ion-icon></span></li>
          <li><span><ion-icon name="logo-react" class="icon"></ion-icon></span></li>
          <li><span><ion-icon name="logo-html5" class="icon"></ion-icon></span></li>
          <li><span><ion-icon name="logo-sass" class="icon"></ion-icon></span></li>
          <li><span><ion-icon name="logo-css3" class="icon"></ion-icon></span></li>

      </ul>
  </div> 
</div>
</header>

    <footer class="footer"/>
*/