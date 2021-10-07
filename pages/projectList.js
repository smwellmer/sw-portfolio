import projects from "../data/projects.json";
import Link from "next/link";
import Nav from '../components/Nav'

export default function Home() {
  return (
     <div>
         <Nav />
        <h3 className='myprojects'>My Projects</h3>
            <div className='projectContainer'>
            {projects.map((project, index) => {
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