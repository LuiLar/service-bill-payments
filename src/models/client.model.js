import { Schema, model } from "mongoose";

const clientShema = new Schema(
  {
    id: { type: Schema.Types.Int32, required: true, unique: true },
    name: { type: Schema.Types.String, required: true },
  },
  { timestamps: true }
);

export default model("Client", clientShema);
