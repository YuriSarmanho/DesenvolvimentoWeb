import '@/css/todoTesk.css'

export default {
    name: 'todoTesk',
    props: {
        teskTitle: String
    },
    data() {
        return {
            isTeskFinished: false,
        }
    },
}