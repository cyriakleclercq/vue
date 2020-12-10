import Vue from "vue";
import UsersModel from "../models/UsersModel";

const uri = "http://localhost:3000/users";

export default {
    getUsers() {
        return Vue.http.get(uri)
            .then(resp => resp.json())
            .then(json => json.map(json => Object.assign(new UsersModel(), json)))
    },

    addUser(user) {
        return Vue.http.post(uri, JSON.stringify(user))
            .then(resp => console.log(resp))
    }
}