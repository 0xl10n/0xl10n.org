import { Link } from "react-router-dom";
import LogoBrand from "./LogoBrand";
import { usePrivy } from "@privy-io/react-auth";
import { Address, Avatar, Badge, Identity, Name } from "@coinbase/onchainkit/identity";




const UserButton = ({ address, schemaId }: { address: string, schemaId: string }) => (
  <div className="avatar">
    <Identity
      address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
      schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
    >
      <Avatar>
        <Badge />
      </Avatar>
      <Name />
      <Address />
    </Identity>

  </div>
);





const ProfileButton = () => {
  const { ready, authenticated, login, user } = usePrivy();

  const isUserReady = ready && authenticated;

  // Disable login when Privy is not ready or the user is already authenticated

  const SignUpButton = () => <button className="btn" onClick={() => { login() }}>Log in / Sign Up</button>;

  console.log('user', user);
  return isUserReady ? <UserButton address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
    schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
  /> : <SignUpButton />;
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
  const { ready, logout } = usePrivy();
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
              <Link to="/docs/intro" className="justify-between" reloadDocument>
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
              <a onClick={() => { ready && logout(); }}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
