import { site } from "~/data"

export const isEmpty = target => {
  if (Array.isArray(target)) {
    return target.length === 0
  }

  return typeof target === "undefined" ||
    target === null ||
    target === ""
}

export const isNotEmpty = target => (!isEmpty(target))

export function withWindow(fn) {
  if (
    typeof window !== "undefined" &&
    typeof fn !== "undefined" &&
    typeof fn === "function"
  ) {
    return fn(window)
  }
}

export function canUseDOM() {
	return !!(
		typeof window !== "undefined" &&
		window.document &&
		window.document.createElement
	);
}

export function random(min = 1, max = Number.MAX_SAFE_INTEGER) {
  min = min
  max = max

  return Math.floor(Math.random() * (max - min + 1)) + parseInt(min, 10)
}

export function randomIndex(target) {
	if (!Array.isArray(target)) {
		return 0
	}

	return random(0, target.length)
}

export function windowTitle(pageTitle) {
  const persistentAppTitle = site?.title || "";

  if (isNotEmpty(pageTitle)) {
    return `${pageTitle} | ${persistentAppTitle}`;
  }

  return persistentAppTitle;
}
