import { Schema, model} from "mongoose";

const url = new Schema({
  originalUrl: { type: String, required: true },
  urlCode: { type: String, required: true, index: true, unique: true },
  date: { type: String, default: Date.now },
})

const Url = model('Url', url)
export default Url;