export class StripeError extends Error {
  constructor(...args) {
    super(...args)
    this.name = "StripeError"

    if (Error.captureStackTrace && typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, StripeError)
    }
  }
}
