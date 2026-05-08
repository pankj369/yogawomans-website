import apiClient from "./apiClient";

export const productService = {
  listProducts(params) {
    return apiClient.get("/products", { params });
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },
  createOrder(payload) {
    return apiClient.post("/orders", payload);
  },
};
