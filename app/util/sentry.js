import * as Sentry from "@sentry/remix"
import { isNotEmpty } from "~/util"

export function sentryEnabled({ inBrowser = true } = {}) {
	const SENTRY_DSN = process?.env?.SENTRY_DSN || SENTRY_DSN
	const SENTRY_ORG = process?.env?.SENTRY_ORG
	const SENTRY_PROJECT = process?.env?.SENTRY_PROJECT
	const SENTRY_AUTH_TOKEN = process?.env?.SENTRY_AUTH_TOKEN
	const VERCEL_GIT_COMMIT_SHA = process?.env?.VERCEL_GIT_COMMIT_SHA

	return inBrowser
		? isNotEmpty(SENTRY_DSN)
		: isNotEmpty(SENTRY_DSN) &&
			isNotEmpty(SENTRY_ORG) &&
			isNotEmpty(SENTRY_PROJECT) &&
			isNotEmpty(SENTRY_AUTH_TOKEN) &&
			isNotEmpty(VERCEL_GIT_COMMIT_SHA)
}

export function initSentry({ inBrowser = true } = {}) {
	const sentryDSN = process?.env?.SENTRY_DSN || SENTRY_DSN
	const vercelGitCommitSHA = process?.env?.VERCEL_GIT_COMMIT_SHA

	if (sentryEnabled({ inBrowser })) {
		Sentry.init({
			dsn: sentryDSN,
			release: vercelGitCommitSHA,
		})
	}
}
