import type { AddressType } from "@/utils/enums"
import { type Instance, type SnapshotIn, type SnapshotOut, types } from "mobx-state-tree"

export const Place = types
  .model("Place", {
    id: types.maybeNull(types.union(types.number, types.string)),
    addressName: types.maybeNull(types.string),
    address: types.maybeNull(types.string),
    lat: types.maybeNull(types.number),
    lng: types.maybeNull(types.number),
  })
  .props({
    provider: types.maybe(types.maybeNull(types.string)),
  })
export interface IPlace extends Instance<typeof Place> {}
export interface IPlaceSnapshotIn extends SnapshotIn<typeof Place> {}
export interface IPlaceSnapshotOut extends SnapshotOut<typeof Place> {}

export const Address = types
  .model("Address", {
    id: types.union(types.number, types.string),
    title: types.maybeNull(types.string),
    address: Place,
    addressType: types.frozen<AddressType>(),
    mapServiceType: types.maybeNull(types.string),
  })
  .props({
    provider: types.maybe(types.maybeNull(types.string)),
  })

export interface IAddress extends Instance<typeof Address> {}
export interface IAddressSnapshotIn extends SnapshotIn<typeof Address> {}
export interface IAddressSnapshotOut extends SnapshotOut<typeof Address> {}
