import { Product } from "./product.model";

// Create Product
const createProduct = async (payload: any) => {
  const { title, description, price, stock, category, images, isActive } =
    payload;

  const product = await Product.create({
    title,
    description,
    price,
    stock,
    category,
    images,
    isActive,
  });

  return product;
};

// Get all products
const products = async () => {
  const allProducts = await Product.find();
  return allProducts;
};

// Get single product
const product = async (id: string) => {
  const singleProduct = await Product.findOne({ _id: id } as any);

  if (!singleProduct) {
    throw new Error("Product not found");
  }

  return singleProduct;
};

// Update product
const updateProduct = async (id: string, payload: any) => {
  const { title, description, price, stock, category, images, isActive } =
    payload;

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      title,
      description,
      price,
      stock,
      category,
      images,
      isActive,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  return updatedProduct;
};

// Delete product
const deleteProduct = async (id: string) => {
  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    throw new Error("Product not found");
  }

  return deletedProduct;
};

export const ProductService = {
  createProduct,
  products,
  product,
  updateProduct,
  deleteProduct,
};