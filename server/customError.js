export default class ApiError extends Error {
  // status;

  constructor(status, message) {
    super(message);
    this.status = status;
  }

  static UnauthorizedError() {
    return new ApiError(401, "User not authorized.");
  }

  static noAccessError() {
    return new ApiError(
      403,
      "User doesn`t have access to this route."
    );
  }

  static BadRequest(message) {
    return new ApiError(404, message);
  }
}
