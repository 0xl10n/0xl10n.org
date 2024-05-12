import { useState } from "react"
import LogoBrand from "./LogoBrand"
import { usePrivy } from "@privy-io/react-auth";

const ProfileButton = () => {
    const { ready: isUserReady, authenticated, login, user } = usePrivy();

    // const authToken = await getAccessToken();
    // Disable login when Privy is not ready or the user is already authenticated

    const SignUpButton = () => (
        <button className="btn">Log in / Sign Up</button>
    )

    const Avatar = () => (
        <div className="avatar">
            <div className="w-8 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
    )
    return (
        isUserReady ? <Avatar /> : <SignUpButton />
    )
}

const MenuButton = () => {
    return (
        <>
            <label htmlFor="my-drawer" className="btn drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label></>
    )
}



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
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <ProfileButton />

                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        {/* <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li> */}
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;