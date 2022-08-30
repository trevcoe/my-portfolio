import React from 'react';
import './resume.css';
import {FaHtml5, FaPython, FaReact, FaCss3, FaFlask} from 'react-icons/fa';

function resume() {
  return (
    <>
    <div className='title'><b>More about me</b></div>

    <div className='container'>
        <div className='text'>
        Well-rounded IT technician and Programmer. I’m great at breaking down technical instructions to make it as easy for end users to understand.  I'm passionate about problem solving and helping others, and I'm hoping to join a collaborative organization to support others and build on my skill set. 
        </div>
    </div>
        <div className='title'><b>Some of my skills</b></div>
        <div className='frameworks'>
            <FaHtml5 className='icon'/>
            <FaCss3 className='icon' />
            <FaReact className='icon-2'/>
        </div>
        <div className='frameworks-2'>
            <FaFlask className='icon-2'/>
            <FaPython className='icon'/>
        </div>

    <div className='title'><b>Experience</b></div>

        <div className='text-2'>Feb 2020 -  March 2020</div>

    <div className='text-2'><b>Micro Center, D.C. - PC Build Technician</b></div>

    <div className='text-2'>Set up and installed hardware for PC’s. Repaired malfunctioning systems.</div>
    <div className='text-2'>July 2018 - August 2018, July 2019 - August 2019</div>

    <div className='text-2'><b>Franklin-Essex-Hamilton Board of Cooperative Educational Services, Malone, NY - IT Internship</b></div>
    <div className='text-2'>Supported and worked with the IT staff  in day to day activities. This included setting up computers for employees, troubleshooting issues, and repairing malfunctioning systems. 
    Labeled assets and organized inventory. Created spreadsheets with the asset number and description.  
    Saved the schools budget by recovering, restoring and recording untracked units.</div>

    <div className='title'><b>Education</b></div>
        <>
        <div className='text-2'>September 2019 - Present</div>
        <div className='text-2'><b>Regent University - Information Systems A.S. - in progress</b></div>
        <div className='text-2'>Relevant courses: Discrete Mathematics, Computer Science Ethics, Information Systems Security.</div>
        <div className='text-2'>August 2021 - June 2022 </div>
        <div className='text-2'><b>Springboard - Coding Bootcamp Certification</b></div>
        <div className='text-2'>9-month intensive course in Software Engineering methodologies and technologies. 700+ hours of hands-on course material, with 1:1 industry expert mentor oversight. Mastered skills in front-end web development, back-end web development, databases, data structures and algorithms.</div>

        <div className='text-2'>Graduated June 2017</div>
        <div className='text-2'><b>Chateaugay Central School - High school Diploma</b></div>

        </>
    </>
  )
}

export default resume;