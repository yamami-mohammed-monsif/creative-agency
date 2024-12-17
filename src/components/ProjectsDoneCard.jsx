import starIicon from "../assets/star.png";

function ProjectsDone({ className }) {
  return (
    <div className={className}>
      <div className="projects-done">
        <div>
          <img src={starIicon} alt="star-icon" />
          <span>Great Project</span>
        </div>
        <div>
          <span>800+</span>
          <span>Done</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsDone;
