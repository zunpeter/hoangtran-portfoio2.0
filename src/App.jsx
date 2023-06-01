import { BrowserRouter } from "react-router-dom";
import Sound from 'react-sound';
import { About, Contact, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <Sound url="src/assets/sinnesloschen-beam.mp3"
    />
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
          <Navbar />
          <Hero />
        {/* </div> */}
        <About />
        <Education />
        {/* <Tech /> */}
        <Works />
        <Feedbacks />
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;