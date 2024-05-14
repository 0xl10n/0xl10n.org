import { Link } from "react-router-dom";
import { REPO_DATA } from "./data/repo";
import { NAME_BY_LOCALE } from "./domain/locale-mapper";
import { Repository } from "./domain/repository";

// acoordion / features

const RepositoryCard = ({
  repo,
  isChecked,
}: {
  repo: Repository;
  isChecked: boolean;
}) => {
  const { id, thumbnailUrl, locales = [] } = repo;
  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" defaultChecked={false} />
      <div className="collapse-title">

        <div className="pb-2 font-medium grid grid-cols-4 gap-4">
          <div className="col-span-1 w-[50] h-[50]">
            <img src={thumbnailUrl} />
          </div>
          <div className="col-span-3">
            <div className="text-xl! font-medium">{repo.title}</div>
            <div className="font-medium! text-sm text-neutral-content">{repo.description}</div>
          </div>
          <div className="flex flex-row items-start justify-start p-2">
            <div className="z-50">
              <Link to={`/portal/repositories/${id}`}>
                <button className="btn btn-primary">Translate</button>
              </Link>
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

const RepositoryList = ({ repos }: { repos: Repository[] }) => {
  return (
    <div>
      {repos.map((repo, i) => (
        <div className="mb-4">
          <RepositoryCard repo={repo} isChecked={i === 0} />
        </div>
      ))}
    </div>
  );
};

export default RepositoryList;
