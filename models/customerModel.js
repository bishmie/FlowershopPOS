export default class CustomerModel {
    constructor(id,name, address, contact) {
        this._id=id;
        this._name=name;
        this._address=address;
        this._contact=contact;
       
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id=id;
    }


    get name() {
        return this._name;
    }

    set first_name(value) {
        this._first_name = value;
    }

    
    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get contact() {
        return this._contact;
    }

    set contact(value) {
        this._contact = value;
    }

   
}