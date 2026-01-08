export class ProductsApiClient {
    constructor(request) {
      this.request = request;
    }
  
    getProducts = () => this.request.get('/products');
  
    addProduct = (data) => this.request.post('/products', { data });
  
    getProductById = (id) => this.request.get(`/products/${id}`);
  
    updateProduct = (id, data) => this.request.put(`/products/${id}`, { data });
  
    deleteProduct = (id) => this.request.delete(`/products/${id}`);
  }