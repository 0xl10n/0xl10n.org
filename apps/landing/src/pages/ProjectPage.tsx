import { useLoaderData } from "react-router-dom";
import RepositoryList from "../RepositoryList";
import { Project } from "../domain/project";

export const ProjectPage = () => {
  // TODO loader

  const { project, repos } = useLoaderData() as any;
  const { title, description } = project

  return (
    <div className="flex flex-col content-center items-center">
      <div className="mt-12 flex flex-row">
        <h2 className="text-4xl flex flex-row justify-center items-center pb-4">
          🌐{title}
        </h2></div>
      <div className="mx-auto text-neutral-content max-w-4xl">
        {description}
      </div>
      <div className="mt-12">
        <div className="p-4">
          <h2 className="text-2xl">Repositories</h2>
        </div>
        <div>{/* <Profile /> */}</div>

        <div>
          <RepositoryList repos={repos} />
        </div>
      </div>
    </div>
  );
};
