import { Attestor } from "./domain/attestor";
import { NAME_BY_LOCALE } from "./domain/locale-mapper";

const Avatar = () => {
    return (
        <div className="avatar">
            <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
    )
}
const ProfileCard = ({ profile }: { profile: Attestor }) => {
    const { name, locales, score } = profile
    // avatar 
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
            <div className="card-body">
                <Avatar />   <div className="badge badge-secondary">{score}</div>
                <h2 className="card-title">{name}</h2>
                Languages:
                {
                    locales.map(locale => NAME_BY_LOCALE[locale]).join(", ")
                }
                <p>View all Translations</p>

                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    )
}
export default ProfileCard;