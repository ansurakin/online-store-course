import {makeAutoObservable} from "mobx";

export default class DeviceStore {

  constructor() {
    this._types = [
      {
        "id": 1,
        "name": "Холодильники"
      },
      {
        "id": 2,
        "name": "Смартфоны"
      }
    ]
    this._brands = [
      {
        "id": 1,
        "name": "Samsung"
      },
      {
        "id": 2,
        "name": "Apple"
      }
    ]
    this._devices = [
      {
        "id": 1,
        "name": "12 pro",
        "price": 10000,
        "rating": 0,
        "img": "a86155c0-0089-4366-a769-5a8680e8f6b9.jpg",
        "typeId": 2,
        "brandId": 2
      },
      {
        "id": 2,
        "name": "Atlant",
        "price": 10000,
        "rating": 0,
        "img": "d984c7ec-3c1c-46f5-b0f6-7ee9c458bde4.jpg",
        "typeId": 1,
        "brandId": 1
      }
    ]
    makeAutoObservable(this)
  }

  get types() {
    return this._types;
  }

  set types(value) {
    this._types = value;
  }

  get brands() {
    return this._brands;
  }

  set brands(value) {
    this._brands = value;
  }

  get devices() {
    return this._devices;
  }

  set devices(value) {
    this._devices = value;
  }

}