import './App.css';
import NavBar from './Components/NavBar';
import {HiOutlineMail} from 'react-icons/hi';
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';

function App() {
  return (
    <>
    <NavBar />
    <div className="App">
      <div className='underline top'>__________________</div>
        <div className="about-me-text">
          <p>Hello. I'm Trevor Coe - a software engineer that enjoys building front-end applications. I'm currently living and working in Ohio.</p>
        </div>
          <div className='social-icons'>
            <a href='//gmail.com'>
              <HiOutlineMail className='social-icon-spacing'/>
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
    </>
  );
}

export default App;
