import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

import FormStore from '../FormStore'
import InputSearchStore from '../InputSearchStore'

import './styles.scss'

const stores = [
  {
    key: '1',
    country: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'pampulha',
  },
  {
    key: '2',
    country: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'Savassi',
  },
  {
    key: '3',
    country: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'Horto',
  },
]

const MainHome: React.FC = () => {
  const handleSearchAndRender = () => {
    alert('procurou e atualizou a table')
  }
  const handleDelete = (id: string) => {
    alert(`deletou: ${id}`)
  }

  /// modal create
  const [showModalNewStore, setShowModalNewStore] = useState(false)
  const handleCloseModalNewStore = () => setShowModalNewStore(false)
  const handleShowModalNewStore = () => setShowModalNewStore(true)
  const handleConfirmCreate = () => {
    alert('confirmou criação')
    handleCloseModalNewStore()
  }

  /// modal edit
  const [showModalEditStore, setShowModalEditStore] = useState(false)
  const handleCloseModalEditStore = () => setShowModalEditStore(false)
  const handleShowModalEditStore = (id: string) => {
    // vai carregar o form com o id
    console.log(id)
    setShowModalEditStore(true)
  }
  const handleConfirmUpdate = () => {
    alert('confirmou update')
    handleCloseModalEditStore()
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
        <Button className='btn btn-dark' onClick={handleSearchAndRender}>
          Search
        </Button>
      </div>
      {stores ? (
        <Table
          bordered
          hover
          className='table-list-stores col-md-12 text-center'
        >
          <thead>
            <tr>
              <th>Key</th>
              <th>Country</th>
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
                <td>{store.country}</td>
                <td>{store.state}</td>
                <td>{store.city}</td>
                <td>{store.district}</td>
                <td className='action-icons'>
                  <AiFillEdit
                    className='icon-edit'
                    onClick={() => handleShowModalEditStore(store.key)}
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
        onClick={handleShowModalNewStore}
      >
        Click to create a new store
      </Button>
      {/* new modal */}
      <Modal
        name='new-store'
        show={showModalNewStore}
        onHide={handleCloseModalNewStore}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a new Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormStore type='new' />{' '}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleCloseModalNewStore}>
            Close
          </Button>
          <Button variant='success' onClick={handleConfirmCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      {/* edit modal */}
      <Modal
        name='edit-store'
        show={showModalEditStore}
        onHide={handleCloseModalEditStore}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit a Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormStore type='edit' />
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={handleCloseModalEditStore}>
            Close
          </Button>
          <Button variant='success' onClick={handleConfirmUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MainHome
