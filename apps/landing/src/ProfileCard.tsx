import { Attestor } from "./domain/attestor";
import { NAME_BY_LOCALE } from "./domain/locale-mapper";

const Avatar = ({ profileUrl }: { profileUrl?: string }) => {
  const src = profileUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={src} />
      </div>
    </div>
  );
};
const ProfileCard = ({ profile }: { profile: Attestor }) => {
  const { name, locales, score, profileUrl, wordCount } = profile;
  // avatar
  return (
    <div className="card m-4 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <Avatar profileUrl={profileUrl} /> <div className="badge badge-secondary">{score}</div>
        <h2 className="card-title">{name}</h2>
        Languages: &nbsp;
        {locales.map((locale) => NAME_BY_LOCALE[locale]).join(", ")}
        <p>Words Translated: {wordCount}</p>
        <p>View all Translations</p>
        {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
      </div>
    </div>
  );
};
export default ProfileCard;
