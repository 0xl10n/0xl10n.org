import { useLoaderData } from "react-router-dom";
import RepositoryList from "../RepositoryList";
import { Project } from "../domain/project";
import { Attestor } from "../domain/attestor";
import { TRANSLATION_UNIT } from "../data/translation-unit";


const AvatarGroup = ({ profiles }: { profiles: Partial<Attestor>[] }) => (
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
        {
            profiles.map(({ name, profileUrl }) => (
                <div className="avatar">
                    <div className="w-12">
                        <img src={profileUrl} />
                    </div>
                </div>
            ))
        }
        <div className="avatar placeholder">
            <div className="w-12 bg-neutral text-neutral-content">
                <span>+23</span>
            </div>
        </div>
    </div>
)

export const RepositoryPage = () => {
    const { repository } = useLoaderData() as any;
    const { title, description } = repository


    const translationUnit = TRANSLATION_UNIT[0]!;
    const { attestedProfiles, suggestions } = translationUnit
    return (
        <div className="p-5 flex flex-col">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Project</a></li>
                    {/* <li><a>Documents</a></li> */}
                    <li>🌐{title}</li>
                </ul>
            </div>
            {/* <div className="mx-auto text-neutral-content max-w-4xl">
                {description}
            </div> */}
            <div className="w-full mt-12">

                <div className="grid grid-cols-8 gap-4">

                    <div className="col-span-2">
                        {
                            [1, 2, 3, 4].map(i => (
                                <div className="border p-2 card w-full m-2 bg-base-100">
                                    <p>Translations</p>
                                    {/* <p>Source</p> */}
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-span-4">
                        <div className="border p-5 card w-full m-2 bg-base-100">
                            <p className="text-neutral-content">Source String</p>
                            <div className="py-5">Lorem Lorem</div>
                            <span className="badge badge-secondary">id</span>
                            {/* <p>Source</p> */}
                        </div>
                        <div className="border p-5 card w-full h-full m-2 bg-base-100">

                            <p className="text-neutral-content">Translation</p>
                            <div className="py-5">Lorem Lorem</div>
                            <span className="badge badge-secondary">id</span>
                            {/* <p>Source</p> */}
                            <div className="z-50 flex justify-end">
                                <button className="btn btn-primary">Submit</button>
                            </div>

                        </div>
                    </div>

                    <div className="col-span-2">
                        Suggestions
                        {
                            suggestions.map((suggestion) => {

                                const { toString, translatedBy } = suggestion;

                                return (
                                    <div className="card border m-2 w-96 bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            {/* <h2 className="card-title">Card title!</h2> */}
                                            <p> {toString}</p>
                                            <p className="text-neutral-content">Translated by   {translatedBy.name}      <span className="badge badge-secondary">{translatedBy.score}</span></p>


                                        </div>
                                    </div>
                                )
                            })

                        }
                        <div>
                            <h5 className="font-ml font-neutral-content">Attested by</h5>
                            <div className="m-2">
                                <AvatarGroup profiles={attestedProfiles} />

                            </div>
                        </div>
                    </div>

                </div>
                <div>{/* <Profile /> */}</div>


            </div>
        </div >
    );
};
