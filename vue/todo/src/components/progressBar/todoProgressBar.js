import barramento from '@/barramento'
import '@/css/todoProgressBar.css'

export default {
    name: 'todoProgressBar',
    data() {
        return {
            tesksFinished:0,
            tesksAmount: 0,
            teskBarFill:  0,
        }
    },
    created() { 
        barramento.$on('addTeskFinished', () => {
            this.tesksFinished = this.tesksFinished + 100
            this.refresheBarFill()
        })
        barramento.$on('teskUnfinished', () => {
            this.tesksFinished = this.tesksFinished - 100
            this.refresheBarFill()
        })
        barramento.$on('addTesk', () => {
            this.tesksAmount = this.tesksAmount + 1
            this.refresheBarFill()
        })
        barramento.$on('teskDeleted', () => {
            this.tesksAmount = this.tesksAmount - 1
            this.tesksFinished = this.tesksFinished - 100
            this.refresheBarFill()
        })
    },
    methods: {
        refresheBarFill() {
            this.teskBarFill = this.tesksFinished / this.tesksAmount
        }
    }
}