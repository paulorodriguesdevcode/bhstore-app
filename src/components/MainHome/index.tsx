import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

import InputSearchStore from '../InputSearchStore'
import './styles.scss'

const stores = [
  {
    key: '1',
    uf: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'pampulha',
  },
  {
    key: '2',
    uf: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'Savassi',
  },
  {
    key: '3',
    uf: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'Horto',
  },
]

const MainHome: React.FC = () => {
  const handleDelete = (id: string) => {
    alert(`deletou: ${id}`)
  }

  const handleEdit = (id: string) => {
    alert(`editou: ${id}`)
  }

  const handleCreate = () => {
    alert('criou novo')
  }

  return (
    <>
      <div className='items-input-search col-md-12 '>
        <InputSearchStore
          id='input-search'
          name='input-search'
          type='text'
          placeholder='Type to search a store ..'
        />
        <Button className='btn btn-dark'>Search</Button>
      </div>

      {stores ? (
        <Table bordered hover className='table-list-stores col-md-12'>
          <thead>
            <tr>
              <th>Key</th>
              <th>UF</th>
              <th>State</th>
              <th>City</th>
              <th>District</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.key}>
                <td>{store.key}</td>
                <td>{store.uf}</td>
                <td>{store.state}</td>
                <td>{store.city}</td>
                <td>{store.district}</td>
                <td className='action-icons'>
                  <AiFillEdit
                    className='icon-edit'
                    onClick={() => handleEdit(store.key)}
                    size={'20px'}
                    title={`Click to remove the store ${store.key}`}
                  />

                  <AiFillDelete
                    onClick={() => handleDelete(store.key)}
                    size={'20px'}
                    title={`Click to edit the store ${store.key}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className='msg-error-not-found-stores'>
          Sorry, no records match your search
        </p>
      )}

      <Button
        className='btn-dark  btn-new-store col-md-12'
        onClick={handleCreate}
      >
        Click to create a new store
      </Button>
    </>
  )
}

export default MainHome
