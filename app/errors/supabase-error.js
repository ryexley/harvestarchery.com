export class SupabaseError extends Error {
  constructor(...args) {
    super(...args)
    this.name = "SupabaseError"

    if (Error.captureStackTrace && typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, SupabaseError)
    }
  }
}
