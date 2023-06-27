import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Spec, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      {/* <PlaySound/> */}
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
        <Navbar />
        <Hero />
        <iframe width="0" height="0" frameborder="0" src="src/assets/sinnesloschen-beam.mp3" allow="autoplay" id="audio"></iframe>
        {/* </div> */}
        <About />
        <Education />
        <Spec />
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