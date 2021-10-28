import faker from 'faker';

export default class Factory {

    static gerarUsuarioInfo() {
        return {
            "firstName": `${faker.name.firstName()} `,
            "lastName": `${faker.name.lastName()}`,
            "zipCode": `${faker.address.zipCode()}`
        }
    }

}