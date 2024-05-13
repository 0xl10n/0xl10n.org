import Header from "./LandingHeader";
import ProfileCard from "./ProfileCard";
import NavBar from "./NavBar";
import RepositoryList from "./RepositoryList";
import { Attestor } from "./domain/attestor";
import { ATTESTORS_DATA } from "./data/attestors";
import AttestorList from "./AttestorList";

export const AttestorPage = () => {
  const attestors = ATTESTORS_DATA;
  return (
    <div className="container">
      <div className="flex content-center items-center">
        <div className="mt-12">
          <h1 className="text-2xl font-sans">Meet the attestors</h1>
          <div>
            <AttestorList attestors={attestors} />
          </div>
        </div>
      </div>
    </div>
  );
};
