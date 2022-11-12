import React from 'react';

const UsersList = ({usersList, selectUser, deleteUser}) => {
    return (
        <ul>
            {
                usersList.map(user => (
                    <li key={user.id}>
                        <div className="info">
                            <h3> {user.first_name}{" "}{user.last_name}</h3>
                            <div>
                                {user.email}
                            </div>
                            <div>
                            <i className="fa-solid fa-cake-candles"></i> {" "}
                            {user.birthday}
                            </div>
                        </div>
                        <div className='buttons'>
                            <button className='edit' onClick={() => selectUser(user)}>
                                <i className="fa-solid fa-pencil"></i>
                            </button>
                            <button className='trash' onClick={() => deleteUser(user.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;