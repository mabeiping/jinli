import {createStore} from "vuex";

export default createStore({
    state() {
       return{
            nameChecked: []
       }
    },
    mutations: {
        setNameChecked(state,list) {
            this.state.nameChecked = list
        }
    },
    getters: {
        getNameChecked(state) {
            return state.nameChecked
        }
    }

});
