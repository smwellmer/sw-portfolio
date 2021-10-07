import projects from "../data/projects.json";
import Link from "next/link";
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className='container'>
        <Nav />
      <div className='home'>
        <div>
          <h1 className='name'>Samantha</h1>
          <h1 className='name2'>Wellmer</h1>
        </div>
          <img className='photo' src='me.jpg' alt='me'/>
            <div className='text'>
            <h2>accountant</h2>
            <h2 className='turned'> turned</h2>
            <h2> developer</h2>
            </div>
      </div>
      <h3 className='myprojects'>My Projects</h3>
      <div className='projectContainer'>
      {projects.slice(0, 4).map((project, index) => {
        return (
          <div key={index} className='projects'>
            <Link href={`/projects/${project.slug}`}>
              {project.name}
            </Link>
            <img src={project.image} />
          </div>
        );
      })}
       </div>
    </div>
  );
}