import projects from "../data/projects.json";
import Link from "next/link";
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <div>
      <Hero />
      <h1>Samantha Wellmer</h1>
      <h2>accountant turned developer</h2>
      </div>
      <p>
        
      </p>
      <h3>My Projects</h3>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </div>
        );
      })}
    </div>
  );
}