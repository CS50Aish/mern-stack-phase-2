import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile(){
    const { userId } = useParams();
    return (
        <div>
            <div>
                <h2>User profile</h2>
                <p>UserId: {userId}</p>
            </div>
        </div>
    );
}

export default UserProfile;