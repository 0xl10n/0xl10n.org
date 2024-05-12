import RepositoryList from "../RepositoryList";

export const ProjectPage = () => {
  // TODO loader

  return (
    <div className="flex flex-col content-center items-center">
      <div className="mt-12">Project Name</div>
      <div className="mt-12">
        <div className="p-4">
          <h2 className="text-2xl">Repositories</h2>
        </div>
        <div>{/* <Profile /> */}</div>

        <div>
          <RepositoryList />
        </div>
      </div>
    </div>
  );
};
