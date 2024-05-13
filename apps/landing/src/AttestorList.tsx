import ProfileCard from "./ProfileCard";
import { Attestor } from "./domain/attestor";

const AttestorList = ({ attestors }: { attestors: Attestor[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {attestors.map((attestor: Attestor) => {
        return <ProfileCard profile={attestor} />;
      })}
    </div>
  );
};

export default AttestorList;
