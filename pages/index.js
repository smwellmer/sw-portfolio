import projects from "../data/projects.json";
import Link from "next/link";
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <div>
      <Nav />
      <h1 className='name'>Samantha</h1>
      <h1 className='name2'>Wellmer</h1>
      <img className='photo' src='me.jpg' alt='me'/>
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