import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "CodeCapturer",
    description: "An automated tool that extracts source code from programming video tutorials by analyzing frames, capturing folder structures, and enabling direct downloads.",
    github: "https://github.com/SifatSikder/codecapture"
  },
  {
    title: "A2F (Access to Fund)",
    description: "A community-based lending app built with Flutter and ExpressJS, enabling students to access short-term loans for academic and medical needs.",
    github: "https://github.com/SifatSikder/A2F"
  },
  {
    title: "Code-Whisperer",
    description: "A Python and OpenAI-powered tool that converts voice commands into executable programming code.",
    github: "https://github.com/SifatSikder/CodeWhisperer-AI-Project"
  },
  {
    title: "Wumpus-AI",
    description: "An AI agent built using ExpressJS and AngularJS to solve the Wumpus World problem, navigating a maze-like environment.",
    github: "https://github.com/SifatSikder/Wumpus-AI-Project"
  },
  {
    title: "Gomoku-AI",
    description: "An AI-powered strategy board game implemented with Minimax and Alpha-Beta Pruning algorithms.",
    github: "https://github.com/SifatSikder/Gomuko-AI-Project-1"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              github={project.github}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
