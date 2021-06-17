import React, { MouseEventHandler, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import { findOneStore, insertStore } from '../../api'
import { IStore, IAddress } from '../../models'
import './styles.scss'

interface FormStoreProps {
  id: string | undefined
  type: 'new' | 'edit'
  handleCloseModalEditStore?: MouseEventHandler<HTMLElement>
  handleCloseModalNewStore?: MouseEventHandler<HTMLElement>
}

interface IFormPropsPost {
  key: string
  country: string
  state: string
  city: string
  district: string
}

const FormStore: React.FC<FormStoreProps> = ({
  type,
  id,
  handleCloseModalEditStore,
  handleCloseModalNewStore,
}) => {
  const [store, setStore] = useState<IStore | undefined>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const findAndSetStoreFromApi = async (id: string) => {
    try {
      const respStore = await findOneStore(id)
      setStore(respStore)
    } catch (error) {
      console.error('Error when try to get the Stores', error)
    }
  }

  const insertStoreInApi = async (store: IStore) => {
    try {
      await insertStore(store)
    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect(() => {
    if (id) {
      findAndSetStoreFromApi(id)
    }
  }, [])

  useEffect(() => {
    if (store) {
      console.log('Setou o objeto store::')
      console.log(store)
    }
  }, [store])

  const returnFindOneList: IStore | undefined =
    type === 'new' ? undefined : store

  const objectOfStore = returnFindOneList && returnFindOneList[0]

  const onSubmit = (data: IFormPropsPost) => {
    const newStore: IStore = {}
    newStore.key = data.key

    const address: IAddress = {}
    address.city = data.city
    address.country = data.country
    address.district = data.district
    address.state = data.state

    newStore.address = address

    insertStoreInApi(newStore)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='form-group'>
        <Form.Group controlId='form-key'>
          <Form.Label>Key</Form.Label>
          <Form.Control
            type='text'
            defaultValue={objectOfStore?.key}
            {...register('key')}
          />
          {errors.key && (
            <span className='error-validation'>This field key is required</span>
          )}
        </Form.Group>

        <Form.Group controlId='form-country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            defaultValue={objectOfStore?.address?.country.toString()}
            {...register('country')}
          />
          {errors.country && (
            <span className='error-validation'>
              This field country is required
            </span>
          )}
        </Form.Group>
        <Form.Group controlId='form-state'>
          <Form.Label>State</Form.Label>
          <Form.Control
            as='select'
            defaultValue={objectOfStore?.address?.state}
            {...register('state')}
          >
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
          {errors.state && (
            <span className='error-validation'>
              This field state is required
            </span>
          )}
        </Form.Group>
        <Form.Group controlId='form-city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            defaultValue={objectOfStore?.address?.city}
            {...register('city')}
          />
          {errors.city && (
            <span className='error-validation'>
              This field city is required
            </span>
          )}
        </Form.Group>
        <Form.Group controlId='form-district'>
          <Form.Label>District</Form.Label>
          <Form.Control
            type='text'
            defaultValue={objectOfStore?.address?.district}
            {...register('district')}
          />
          {errors.district && (
            <span className='error-validation'>
              This field district is required
            </span>
          )}
        </Form.Group>

        <Button
          variant='danger'
          onClick={
            type === 'new'
              ? handleCloseModalNewStore
              : handleCloseModalEditStore
          }
        >
          {type !== 'new' ? 'Close' : 'Cancel'}
        </Button>

        <Button type='submit' variant='success'>
          {type === 'new' ? 'Create' : 'Update'}
        </Button>
      </form>
    </>
  )
}

export default FormStore
