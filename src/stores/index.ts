import { defineStore } from "pinia";

export const mainStore = defineStore('main',{
    state:()=>{
        return {
            helloPinia:"holy shit!",
            storeMap:new Map()
        }
    },
    getters:{},
    actions:{}
})




