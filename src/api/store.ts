import { IStore } from 'models'

import api from './api'

export const insertStore = async (store: IStore) => {
  return (await api.post<IStore>('/', store))?.data
}

export const findAllStores = async () => {
  return (await api.get<IStore[]>('/'))?.data
}

export const findOneStore = async (id: string) => {
  return (await api.get<IStore>(`/${id}`))?.data
}

export const deleteStore = async (id: string) => {
  return await api.delete<IStore>(`/${id}`)
}

export const updateStore = async (id: string, store: IStore) => {
  return (await api.put<IStore>(`/${id}`, store))?.data
}
