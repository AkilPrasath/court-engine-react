import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase_config';

function Home() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            Hello {user?.email} !!!!
        </div>
    );
}

export default Home;