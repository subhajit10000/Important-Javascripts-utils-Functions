
class ApiResponse {
  constructor(statusCode, message = "Success", data = null) {
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;

    this.timestamp = new Date().toLocaleString('en-IN');
  }
}

export default ApiResponse;
