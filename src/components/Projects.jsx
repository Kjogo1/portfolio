import "./projects.css";
import todo from '../assets/todos_project.png'
import shopping from '../assets/shopping.png'

function Projects() {
  return (
    <>
      <div id="projects" className="container">
        <div className="col">
          <div className="project">
            <span className="text-md mt-10 hidden-about">Projects</span>
            <span className="text-sm w-30 hidden-about">
              Here you will find some of the personal projects that I created
              with each project containing its own case study.
            </span>
          </div>
        </div>
      </div>

      <div className="row">
          <span className="container-image">
            <img src={todo} className="image"/>
          </span>
          <span className="col">
            <span className="text-md start mb-10">Todo List</span>
            <span className="text-sm start w-20">
              This is a simple project that I created with next js and firebase.
              I create a simple api in next js and connect data base with firestore.
            </span>
          </span>
        </div>

        <div className="row">
          <span className="container-image">
            <img src={todo} className="image"/>
          </span>
          <span className="col">
            <span className="text-md start mb-10">Home Pet</span>
            <span className="text-sm start w-20 mb-10">
              It is my team project that build help pet owner to know 
              more about pet and easy to find doctor.
            </span>
          </span>
        </div>

        <div className="row">
          <span className="container-image">
            <img src={shopping} className="image"/>
          </span>
          <span className="col">
            <span className="text-md start mb-10">E Commerce</span>
            <span className="text-sm start w-20">
              Shopping is website to help shop owner to manage the project
              and sell projects.
            </span>
          </span>
        </div>
    </>
  );
}

export default Projects;
