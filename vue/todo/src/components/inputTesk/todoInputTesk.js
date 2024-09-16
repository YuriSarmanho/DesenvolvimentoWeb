import "@/css/todoInputTesk.css";
import barramento from "@/barramento";   

export default {
  name: "todoInputTesk",
  data() {
    return {  
      teskTitle: '',
    };
  },
  methods: {
    addNewTesk() {
      barramento.$emit('addNewTesk', this.teskTitle)
      barramento.$emit('addTesk')
      this.teskTitle = ''
    }
  }
};
