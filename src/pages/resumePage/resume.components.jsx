import React from 'react';


const Resume = ({resume}) => {
    console.log(resume);
return (
    <h1>{resume.map(res => (
        res.name
    ))}</h1>
)
}

export default Resume;