import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const DataTable = ({ items, columns, isClickable = true, hasDelete = true, tableName }) => {
    const [deleteItem, setDeleteItem] = useState(null);
    const [data, setData] = useState(items);
    const navigate = useNavigate();

    const handleDeleteClick = (item) => {
        setDeleteItem(item);
    };

    const handleConfirmDelete = () => {
        const updatedData = data.map((item) =>
            item.id === deleteItem.id ? { ...item, isDeleted: true } : item
        );
        setData(updatedData);
        setDeleteItem(null);
    };

    const handleRowClick = (itemId) => {
        navigate(`/products/${itemId}`);
    };

    const filteredData = data.filter((item) => !item.isDeleted);

    return (
        <div>
            <table>
                <thead>
                    <tr className='headTableReal'>
                        {columns.map((column) => (
                            <th key={column}>{column}</th>
                        ))}
                        {hasDelete && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr
                            key={item.id}
                            onClick={isClickable ? () => handleRowClick(item.id) : null}
                        >
                            {columns.map((column) => (
                                <td key={column}>{item[column]}</td>
                            ))}
                            {hasDelete && (
                                <td>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteClick(item);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            {deleteItem && (
                <div className='popup'>
                    <div className='popup-content'>
                        {tableName === 'products' ? (
                            <h3 className='itemDelete'>Delete item {deleteItem.name}?</h3>
                        ) : tableName === 'users' ? (
                            <h3 className='itemDelete'>Delete item {deleteItem.username}?</h3>
                        ) : null}
                        <button onClick={handleConfirmDelete}>Delete</button>
                        <button onClick={() => setDeleteItem(null)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;
