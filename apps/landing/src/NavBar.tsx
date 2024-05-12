import { Link } from "react-router-dom";
import LogoBrand from "./LogoBrand";
import { usePrivy } from "@privy-io/react-auth";

const ProfileButton = () => {
  const { ready, authenticated, login, user } = usePrivy();

  const isUserReady = ready && authenticated;

  // Disable login when Privy is not ready or the user is already authenticated

  const SignUpButton = () => <button className="btn">Log in / Sign Up</button>;

  const Avatar = () => (
    <div className="avatar">
      <div className="w-8 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  );
  return isUserReady ? <Avatar /> : <SignUpButton />;
};

const MenuButton = () => {
  return (
    <>
      <label htmlFor="my-drawer" className="btn drawer-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </label>
    </>
  );
};

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 px-10">
      <MenuButton />
      <div className="flex-1">
        <LogoBrand />
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div> */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <ProfileButton />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/docs/intro" className="justify-between">
                Docs
              </Link>
            </li>
            {/* <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li> */}
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
