export interface IError<T = Any> extends Error {
  code?: T;
  httpCode?: T;
}

export class ClientError extends Error implements IError {
  public readonly name = "ClientError";
  constructor(message: string) {
    super(message);
  }
}

export class NetworkError extends Error implements IError {
  public code: string | number;
  public readonly name = "NetworkError";
  constructor(httpCode: string | number, message: string) {
    super(message);
    this.code = httpCode;
  }
}

export class BusinessError extends Error implements IError {
  public code: string | number;
  public readonly name = "BusinessError";
  constructor(code: string | number, message: string) {
    super(message);
    this.code = code;
  }
}

export default { ClientError, NetworkError, BusinessError };
