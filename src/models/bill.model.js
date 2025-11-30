import { Schema, model } from "mongoose";

const billSchema = new Schema(
  {
    clientId: { type: Schema.Types.Int32, required: true },
    serviceType: {
      type: Schema.Types.String,
      enum: [
        "Water",
        "Natural Gas",
        "Sewer",
        "Electricity",
        "Internet",
        "Rent",
        "Phone",
      ],
      required: true,
    },
    billingPeriod: { type: Schema.Types.String, required: true },
    amount: { type: Schema.Types.Double, required: true },
    status: {
      type: Schema.Types.String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default model("Bill", billSchema);
