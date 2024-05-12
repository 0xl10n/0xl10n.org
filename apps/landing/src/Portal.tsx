import React from 'react';

import { usePrivy, getAccessToken } from '@privy-io/react-auth';

import NavBar from './NavBar';
import RepositoryList from './RepositoryList';
import DrawerLayout from './DrawerLayout';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Profile() {
    const { ready, authenticated, login, user } = usePrivy();

    // const authToken = await getAccessToken();
    // Disable login when Privy is not ready or the user is already authenticated
    const isLoginDisabled = !ready || (ready && authenticated);

    // send txns
    // https://docs.pimlico.io/permissionless/how-to/accounts/use-safe-account

    return (
        <>
            {
                !isLoginDisabled && (
                    <button disabled={isLoginDisabled} onClick={login}>
                        Log in
                    </button>)
            }
            {
                user &&
                <div>
                    <div>{user.id}</div>
                </div>
            }
        </>
    )

}

function Portal() {
    return (
        <DrawerLayout menu={<Menu />}>
            <div>
                <NavBar />
                <div className="container mx-auto">
                    <Outlet />


                </div>
                <Footer />
            </div>
        </DrawerLayout>
    )
}


export default Portal;
