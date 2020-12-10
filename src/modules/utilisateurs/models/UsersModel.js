export default class UsersModel {
    id;
    nom;
    prenom;
    age;
    date;

    constructor(nom = null, prenom = null, age = null, id = null) {
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.date = Date()
    }
}