import React, {useState, useEffect} from 'react'
import './Projects.scss'
import cardImg from '../../assets/img-card.jfif'
import {GoMarkGithub} from 'react-icons/go'
import {urlFor, client} from '../../client'

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      const query = '*[_type == "react-projects"]'

      client.fetch(query)
        .then((data)=> {
            setProjects(data)
        })
    }, [])
    
  return (
    <div className="container__projects container">

        

        

        <div className="eight">
            <h1 className='projects__title'>React Projects</h1>
        </div>

        <div className="projects__images__container">
            {projects.map((project, index)=> (
                <div class="card" key={index}>
                    <div class="card-header">
                        <a href={project.projectLink}>
                            <img src={urlFor(project.imgUrl)} alt={project.title} />
                        </a>
                    </div>
                    <div class="card-body">
                        <div className='card__code'>
                            <a href={project.codeLink}> <i className='card__icon'><GoMarkGithub/></i> </a>
                            <span class="tag tag-teal">{project.tags}</span>
                        </div>
                       
                        <h2>
                            {project.title}
                        </h2>
                        <p>
                            {project.description}
                        </p>
                    </div>
                </div>

            ))}
            
        </div>
    </div>
   


    
  )
}

export default Projects