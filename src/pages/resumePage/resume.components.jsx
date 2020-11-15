import React from 'react';


const Resume = ({resume}) => {
    console.log(resume);
return (
    <h1>{resume.map(res => (
        res.experience
    ))}</h1>
)
}

export default Resume;