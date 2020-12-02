const monStore = {
    state: {
        count: 0,
        message: "Message dans me store",
    },
    getters: {},
    mutations: {
        increment: state => state.count++
    },
    actions: {}
}

export default monStore;