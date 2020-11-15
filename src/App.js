import React from 'react';
import { Route } from 'react-router-dom'; 
import HomePage  from './pages/homePage/homePage.components.jsx';
import {Portfolio} from './pages/portfolioPage/portfolio.components';
import { ContactForm } from './components/homeDIrectory/home.components.jsx';
import Resume from './pages/resumePage/resume.components.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
      link: "https://adityakhatwaapi.herokuapp.com/portfolio",
      resume: [],
      loading: false,
    }
  }

  componentDidMount(){
    fetch("https://adityakhatwaapi.herokuapp.com/api/projects/",{
      method:"GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({projects: data}, () => {
      })
    })
    .then(this.setState({loading:true}))
    .catch(err=>{
      console.log('error: ', err)
    });

    fetch("https://adityakhatwaapi.herokuapp.com/api/resume/",{
      method:"GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({resume: data}, () => {
      })
    })
    .catch(err=>{
      console.log('error: ', err)
    })
  }

  render() {
    console.log(this.state.projects);
    return (
      <div>
        <Route exact path='/' render= {(props)=> (<HomePage {...props} state={this.state}/>)} />
        <Route  path='/resume' render={(props) => (<Resume {...props} resume={this.state.resume}/>)} />
        <Route path='/portfolio' render={(props) =>(<Portfolio 
            {...props} projects= {this.state.projects}/>)} />
        <Route path= '/contactForm' component={ContactForm} />
      </div>
    )
  }

}



export default App;


// App = () => {

