export interface IStore {
  id?: string
  key?: string
  address?: IAddress
}

export interface IAddress {
  country?: string
  state?: string
  city?: string
  district?: string
}
