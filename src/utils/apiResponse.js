class ApiResponse {
  constructor(data, message = 'Success', statusCode = 200) {
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }

  send(res) {
    res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data,
    });
  }
}

module.exports = ApiResponse;