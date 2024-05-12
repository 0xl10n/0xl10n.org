import Header from './LandingHeader';
import ProfileCard from './ProfileCard';
import NavBar from './NavBar';
import RepositoryList from './RepositoryList';

export const RepositoryPage = () => {


    return (
        <div className="flex items-center content-center">
            <div className="mt-12">
                <h1>Portal</h1>
                <div>
                    {/* <Profile /> */}
                </div>

                <div>
                    <RepositoryList />
                </div>
            </div>
        </div>
    )
}