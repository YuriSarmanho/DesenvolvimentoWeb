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
    setTeskTitle() {
      barramento.$emit('newTeskTitle', this.teskTitle)
      this.teskTitle = ''
    }
  }
};
