export class AuthApiClient {
  constructor(request) {
    this.request = request;
  }

  login = (username, password) =>
    this.request.post('/auth/login', {
      data: { username, password },
    });
}