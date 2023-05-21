import React from 'react';
import DataTable from '../components/DataTable';
import usersData from '../Data/users.json';

const Users = () => {
    const columns = ['username', 'email'];
    const tableName = 'users';

    return (
        <div className='tablePages'>
            <h3 className='headTable'>Users</h3>
            <DataTable items={usersData} columns={columns} isClickable={false} tableName={tableName} />
        </div>
    );
};

export default Users;
