
import ProjectList from '../ProjectList';

export const TranslatePage = () => {


    return (
        <div className="flex items-center content-center">
            <div className="mt-12">
                <h2 className="text-2xl pb-5">Projects to Translate</h2>
                <div>
                    <ProjectList />
                </div>
            </div>
        </div>
    )
}