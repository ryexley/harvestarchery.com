export const isEmpty = (target: string | Array<any> | null | undefined) => {
  if (Array.isArray(target)) {
    return target.length === 0
  }

  return typeof target === "undefined" ||
    target === null ||
    target === ""
}

export const isNotEmpty = (target: string | Array<any> | null | undefined) => (!isEmpty(target))

export function withWindow<T>(fn: (arg: typeof window) => T): T | undefined {
  if (
    typeof window !== "undefined" &&
    typeof fn !== "undefined" &&
    typeof fn === "function"
  ) {
    return fn(window)
  }
}
