export class DataError extends Error {
  constructor(...args) {
    super(...args)
    this.name = "DataError"

    if (Error.captureStackTrace && typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, DataError)
    }
  }
}
