import { useEffect } from "react";
import "./about.css";

function About() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden-about");

    const observer = new IntersectionObserver((entries) => {
      // console.log(entries)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-about");
          entry.target.classList.remove("hidden-about");
        } else {
          entry.target.classList.remove("show-about");
          entry.target.classList.add("hidden-about");
        }
      });
    });
    // console.log(hiddenElements)
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const clickToContact = () => {
    location.href = '#contact';
  }

  const list = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GitHub",
    "SQL",
    "MYSQL",
    "Laravel",
    "PHP",
    "Native Android",
    "XML",
    "JAVA",
    "KOTLIN",
  ];

  return (
    <>
      <div id="about">
        <div className="section">
          <span className="text-lg mb hidden-about">About Me</span>
          <span className="sm hidden-about min-screen">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </div>
        <div className="container-skill">
          <div className="col-1">
            <span className="text-md start">Get to know Me</span>
            <span className="text-sm start-1 min-screen">
              I'm a <strong>Software developer </strong>
              who learn to develop my skill of
              <strong> Web development </strong> 
              and <strong>Mobile development </strong>.
              Moreover, You can check out some of my 
              <strong> Projects</strong> section.
            </span>

            <span className="text-sm start-1 mt-2">
                I like to share my <strong>knowledge</strong> and help other people 
                to grow. Moreover, I am willing to <strong>learn</strong> something 
                in order to improve my skills to help your <strong>company</strong>.
            </span>
            <span className="text-sm start-1 mt-2">
              I'm open to <strong>Job</strong> opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to <strong>contact</strong> me.
            </span>

            <button className="button" onClick={clickToContact}>
              Contact
            </button>
          </div>
          <div className="col">
            <span className="text-md start">My Skills</span>

            <div className="skills">

            </div>
            <div className="skills">
              {list.map((ls, key) => {
                return (
                  <span key={key} className="text-sm skill">
                    {ls}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
