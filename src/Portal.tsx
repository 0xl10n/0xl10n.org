import React from 'react';

import { usePrivy, getAccessToken } from '@privy-io/react-auth';
import Header from './Header';

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
        <div>
            <Header />
            <div className="flex items-center content-center">
                <div className="mt-12">
                    <h1>Portal</h1>
                    <div>
                        <Profile />
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Portal;
