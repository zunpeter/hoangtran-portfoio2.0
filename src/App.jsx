import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import PlaySound from "./bgSound";

const App = () => {
  return (
    <BrowserRouter>
      {/* <PlaySound/> */}
      {/* <iframe src="src/assets/sinnesloschen-beam.mp3" allow="autoplay" id="audio"></iframe> */}
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