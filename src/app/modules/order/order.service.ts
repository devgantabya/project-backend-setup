import { Order } from "./order.model";

// Using Mongoose
const createOrder = async (payload: any) => {
  const {
    user,
    products,
    totalPrice,
    status,
    shippingAddress,
    paymentMethod,
  } = payload;

  const order = await Order.create({
    user,
    products,
    totalPrice,
    status,
    shippingAddress,
    paymentMethod,
  });

  return order;
};

const getOrders = async () => {
  const orders = await Order.find()
    .populate("user")
    .populate("products.product");

  return orders;
};

const getOrder = async (id: string) => {
  const order = await Order.findById(id)
    .populate("user")
    .populate("products.product");

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
};

const updateOrder = async (id: string, payload: any) => {
  const {
    user,
    products,
    totalPrice,
    status,
    shippingAddress,
    paymentMethod,
  } = payload;

  const updatedOrder = await Order.findByIdAndUpdate(
    id,
    {
      user,
      products,
      totalPrice,
      status,
      shippingAddress,
      paymentMethod,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedOrder) {
    throw new Error("Order not found");
  }

  return updatedOrder;
};

const deleteOrder = async (id: string) => {
  const deletedOrder = await Order.findByIdAndDelete(id);

  if (!deletedOrder) {
    throw new Error("Order not found");
  }

  return deletedOrder;
};

export const OrderService = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};