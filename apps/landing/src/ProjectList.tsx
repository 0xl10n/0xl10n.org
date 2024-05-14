import { Link } from "react-router-dom";
import { PROJECT_DATA } from "./data/project";
import { NAME_BY_LOCALE } from "./domain/locale-mapper";
import { Project } from "./domain/project";

// acoordion / features

const ProjectCard = ({
  project,
  isChecked,
}: {
  project: Project;
  isChecked: boolean;
}) => {
  const { title, description, locales = [], thumbnailUrl } = project;
  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" defaultChecked={false} />
      <div className="collapse-title">
        <div className="pb-2 font-medium grid grid-cols-4 gap-4">
          <div className="col-span-1 w-[50] h-[50]">
            <img src={thumbnailUrl} />
          </div>
          <div className="col-span-3">
            <h2 className="text-xl">
              🌐
              {title}
            </h2>
            <div className="font-medium! text-sm text-neutral-content p-2">
              {description}
            </div>
            <div className="flex flex-row items-start justify-start p-2">
              <div className="z-50">
                <Link to={`/portal/projects/${project.id}`}>
                  <button className="btn btn-primary">Translate</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="collapse-content">
        <div className="flex flex-col">
          {locales.map((locale) => (
            <div className="mr-4">
              <progress
                className="progress progress-primary w-56"
                value="10"
                max="100"
              ></progress>
              {NAME_BY_LOCALE[locale]}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

const ProjectList = () => {
  return (
    <div>
      {PROJECT_DATA.map((project, i) => (
        <div className="mb-4">
          <ProjectCard project={project} isChecked={i === 0} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
