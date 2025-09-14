interface TechUsed {
  name: string,
  icon: string,
}

interface Project {
  name: string,
  overview: string,
  my_accomplishments: string[],
  challenges: string[],
  future_improvements: string[],
  images: string[],
  tech_used: TechUsed[],
}

interface ProjectProps {
  project: Project,
}

function ProjectCard({ project }: ProjectProps) {
  return (
    <div>
      <h1>{project.name}</h1>
      <img className="project-image" src={project.images[0]} />
    </div>
  );
}

export default ProjectCard;