import '@/css/todoTeskList.css'
import todoTesk from './tesk/todoTesk.vue'
import barramento from '@/barramento'

export default {
    name: 'todoTeskList',
    data(){
        return {
            tesks:[]
        }
    },
    components: { todoTesk },
    created() { 
        barramento.$on('newTeskTitle', (newTeskTitle) => {
            this.tesks = [...this.tesks, newTeskTitle]
        })
    }
}