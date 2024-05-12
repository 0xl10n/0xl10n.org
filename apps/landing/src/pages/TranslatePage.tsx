import ProjectList from "../ProjectList";

export const TranslatePage = () => {
  return (
    <div className="flex content-center items-center">
      <div className="mt-12">
        <h2 className="pb-5 text-2xl">Projects to Translate</h2>
        <div>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};
