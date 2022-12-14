import store from '@/store'
import axios from 'axios'

store.subscribe((mutation) => {
    // console.log(mutation)
    switch(mutation.type){
        case 'auth/SET_TOKEN':
            if (mutation.payload){
                axios.defaults.headers.common['Authorization'] = 'Bearer ${mutation.payload}'
                localStorage.setItem("access", mutation.payload);
            }else{
                 axios.defaults.headers.common["Authorization"] = null
                 localStorage.removeItem("access");
                   
            }
            break;
    }
})