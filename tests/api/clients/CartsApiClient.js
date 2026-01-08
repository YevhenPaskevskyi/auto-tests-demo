export class CartsApiClient {
  constructor(request) {
    this.request = request;
  }

  getCarts = () => this.request.get('/carts');

  getCartById = (id) => this.request.get(`/carts/${id}`);

  createCart = (data) => this.request.post('/carts', { data });

  updateCart = (id, data) => this.request.put(`/carts/${id}`, { data });

  deleteCart = (id) => this.request.delete(`/carts/${id}`);
}