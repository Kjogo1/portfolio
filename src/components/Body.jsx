import { useEffect } from "react";
import "./body.css";
import About from './About' 
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function Body() {

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      // console.log(entries)
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add("show")
          entry.target.classList.remove("hidden")
        } else {
          entry.target.classList.remove('show')
          entry.target.classList.add("hidden")
        }
      });
    });
    // console.log(hiddenElements)
    hiddenElements.forEach((el) => observer.observe(el));
  }, [])
  

  return (
    <>
      <div className="body">
        <div className="container m-5">
          <div className="name">
            <span className="hidden none">Hello, I'm Mon David,</span>
            <span className="text-md hidden none">Software Developer</span>
            <span className="text-sm hidden none">I am here to build project perform better and powerful.</span>
          </div>

        </div>

        {/* <section> */}
          <About />
          <Experience />
          <Projects />
          <Contact />
        {/* </section> */}
      </div>
    </>
  );
}

export default Body;
