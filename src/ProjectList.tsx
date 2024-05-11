import { PROJECT_DATA } from "./data/project"
import { NAME_BY_LOCALE } from "./domain/locale-mapper"
import { Project } from "./domain/project"


// acoordion / features


const ProjectCard = ({ project, isChecked }: { project: Project, isChecked: boolean }) => {
    const { locales = [] } = project;
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked={false} />
            <div className="collapse-title">
                <div className="text-xl! font-medium">
                    {project.title}
                </div>
                <div className="text-sm font-medium!">
                    {project.description}
                </div>
            </div>

            <div className="collapse-content">
                <div className="flex flex-col">
                    {
                        locales.map(
                            locale => (
                                <div className="mr-4">
                                    <progress className="progress progress-primary w-56" value="10" max="100"></progress>
                                    {NAME_BY_LOCALE[locale]}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>

    )
}


const ProjectList = () => {
    return (
        <div>
            {
                PROJECT_DATA.map(
                    (project, i) => (
                        <div className="mb-4">
                            <ProjectCard project={project} isChecked={i == 0} />
                        </div>
                    )
                )
            }

        </div>)
}




export default ProjectList