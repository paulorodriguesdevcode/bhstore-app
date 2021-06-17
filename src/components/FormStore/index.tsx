import React from 'react'
import { Form } from 'react-bootstrap'
import './styles.scss'

interface FormStoreProps {
  type: 'new' | 'edit'
}

interface StoreProps {
  key: string
  uf: string
  state: string
  city: string
  district: string
}

const store = {
  key: '1',
  uf: 'BR',
  state: 'MG',
  city: 'BH',
  district: 'pampulha',
}

const FormStore: React.FC<FormStoreProps> = ({ type }) => {
  const objectOfStore: StoreProps | undefined =
    type === 'new' ? undefined : store

  return (
    <Form>
      <Form.Group controlId='form-key'>
        <Form.Label>Key</Form.Label>
        <Form.Control type='text' defaultValue={objectOfStore?.key} />
      </Form.Group>
      <Form.Group controlId='form-uf'>
        <Form.Label>Uf</Form.Label>
        <Form.Control type='text' defaultValue={objectOfStore?.uf} />
      </Form.Group>
      <Form.Group controlId='form-state'>
        <Form.Label>State</Form.Label>
        <Form.Control as='select' defaultValue={objectOfStore?.state}>
          <option></option>
          <option>AC</option>
          <option>AL</option>
          <option>AP</option>
          <option>AM</option>
          <option>BA</option>
          <option>CE</option>
          <option>DF</option>
          <option>ES</option>
          <option>GO</option>
          <option>MA</option>
          <option>MT</option>
          <option>MS</option>
          <option>MG</option>
          <option>PA</option>
          <option>PB</option>
          <option>PR</option>
          <option>PE</option>
          <option>PI</option>
          <option>RJ</option>
          <option>RN</option>
          <option>RS</option>
          <option>RO</option>
          <option>RR</option>
          <option>SC</option>
          <option>SP</option>
          <option>SE</option>
          <option>TO</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='form-city'>
        <Form.Label>City</Form.Label>
        <Form.Control type='text' defaultValue={objectOfStore?.city} />
      </Form.Group>
      <Form.Group controlId='form-district'>
        <Form.Label>District</Form.Label>
        <Form.Control type='text' defaultValue={objectOfStore?.district} />
      </Form.Group>
    </Form>
  )
}

export default FormStore
