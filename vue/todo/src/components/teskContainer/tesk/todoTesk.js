import barramento from "@/barramento";
import "@/css/todoTesk.css";

export default {
  name: "todoTesk",
  props: {
    teskTitle: String,
  },
  data() {
    return {
      isTeskFinished: false,
      isTeskDeleted: false
    };
  },
  methods: {
    teskComplited() {
      barramento.$emit("addTeskFinished");
      this.isTeskFinished = !this.isTeskFinished;
    },
    undoTesk() {
      barramento.$emit("teskUnfinished")
      this.isTeskFinished = !this.isTeskFinished;
    },
    deleteTesk() {
      barramento.$emit("teskDeleted")
      this.isTeskDeleted = !this.isTeskDeleted
    }
  },
};
