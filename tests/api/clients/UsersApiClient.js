export class UsersApiClient {
  constructor(request) {
    this.request = request;
  }

  getUsers = () => this.request.get('/users');

  getUserById = (id) => this.request.get(`/users/${id}`);

  createUser = (data) => this.request.post('/users', { data });

  updateUser = (id, data) => this.request.put(`/users/${id}`, { data });

  deleteUser = (id) => this.request.delete(`/users/${id}`);
}