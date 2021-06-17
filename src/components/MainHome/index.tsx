import React from 'react'
import { Table } from 'react-bootstrap'
import './styles.scss'

const stores = [
  {
    key: 1,
    uf: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'pampulha',
  },
  {
    key: 2,
    uf: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'Savassi',
  },
  {
    key: 3,
    uf: 'BR',
    state: 'MG',
    city: 'BH',
    district: 'Horto',
  },
]

const MainHome: React.FC = () => {
  return (
    <Table bordered hover className='table-list-stores'>
      <thead>
        <tr>
          <th>Key</th>
          <th>UF</th>
          <th>State</th>
          <th>City</th>
          <th>District</th>
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
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default MainHome
