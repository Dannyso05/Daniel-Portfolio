import './App.css'
import Hero from './sections/Hero/Hero';
import Nav from './sections/Nav/Nav';
import Education from './sections/Education/Education';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Contacts  from './sections/Contacts/Contacts';

function App() {
  console.log("yippie");
  return (
    <>
    <div className="background">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
      </div>
    <section id="Home" className='element'>
      <Hero/>
    </section>
    <section id="Education" className='element'>
      <Education/>
    </section>
    <section id="Experience" className='element'>
      <Experience/>
    </section>
    <section id="Projects" className='element'>
      <Projects/>
    </section>
    <section id="Contacts" className='element'>
      <Contacts/>
    </section>
    <Nav/>
    </>
  );
}

export default App;
