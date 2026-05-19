import mongoose from "mongoose";

interface IOrderProduct {
  product: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}

interface IOrder {
  user: mongoose.Types.ObjectId;
  products: IOrderProduct[];
  totalPrice: number;
  status?: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  shippingAddress?: string;
  paymentMethod?: string;
}

const orderProductSchema = new mongoose.Schema<IOrderProduct>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema<IOrder>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    products: {
      type: [orderProductSchema],
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    shippingAddress: {
      type: String,
      trim: true,
    },

    paymentMethod: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);