export const state = () => ({
    username: "Jens",
});

export const mutations = {
    changeUsername(state, name) {
        state.username = name;
    },
    initialiseStore() {
        // Check if the ID exists
        if (localStorage.getItem('userStore')) {
            // Replace the state object with the stored item
            let obj = JSON.parse(localStorage.getItem('userStore'));
            this.commit("UserStore/changeUsername", obj.UserStore.username);
        }
    }
};

export const actions = {
    changeUsername(name) {
        this.$store.commit('changeUsername', name)
    },
    initialiseStore() {
        this.$store.commit('initialiseStore')
    }
};
