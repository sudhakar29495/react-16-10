
export default class ApiError extends Error {
  constructor(error, message = null) {
    super();
    this.name = error.name;
    this.message = message || error.message;
    this.stack = Error().stack;
  }
}
