import  {defineStore} from 'pinia'
const useStore = defineStore('store',{
  state: ()=>{
    return{
      token:'123'
    }
  }
})

export default useStore;