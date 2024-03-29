import './App.css';
import NavBar from './Components/NavBar';
import Work from './Components/Work';
import Resume from './Components/resume';
import {GrMail} from 'react-icons/gr';
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub, BsFillChatLeftTextFill} from 'react-icons/bs';

function App() {
  return (
    <>
    <NavBar />
    <div className="App">
      <div className='underline top'>__________________</div>
        <div className="about-me-text">
          <p>Hello. I'm Trevor Coe - a software developer that enjoys building front-end applications. I'm currently living and working in Ohio.</p>
        </div>
          <div className='social-icons'>
            <a href='mailto: trevcoe12@gmail.com'>
              <GrMail className='social-icon-spacing'/>
            </a>
            <a href='tel:+16145313988'>
              <BsFillChatLeftTextFill className='social-icon-spacing'/>
            </a>
            <a href='//www.linkedin.com/in/trevor-coe12/'>
              <FaLinkedin className='social-icon-spacing'/>
            </a>
            <a href='//github.com/trevcoe'>
              <BsGithub className='social-icon-spacing'/>
            </a>
          </div>
        <div className='underline'>__________________</div>
    </div>
    <Work />
    <Resume />
    </>
  );
}

export default App;
