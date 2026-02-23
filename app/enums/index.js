import { isEmpty } from "~/util"

const MILLISECOND = 1
const SECOND = 1000 * MILLISECOND
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
export const TIME = {
  QUARTER_SECOND: MILLISECOND * 250,
  HALF_SECOND: MILLISECOND * 500,
  ONE_SECOND: SECOND,
  TWO_POINT_FIVE_SECONDS: MILLISECOND * 2500,
  FIVE_SECONDS: SECOND * 5,
  TEN_SECONDS: SECOND * 10,
  TWENTY_SECONDS: SECOND * 20,
  ONE_MINUTE: MINUTE,
  TWO_MINUTES: MINUTE * 2,
  THREE_MINUTES: MINUTE * 3,
  FOUR_MINUTES: MINUTE * 4,
  FIVE_MINUTES: MINUTE * 5,
  TEN_MINUTES: MINUTE * 10,
  TWENTY_MINUTES: MINUTE * 20,
  THIRTY_MINUTES: MINUTE * 30,
  FORTY_MINUTES: MINUTE * 40,
  FIFTY_MINUTES: MINUTE * 50,
  ONE_HOUR: HOUR,
}

export const HttpStatus = {
	OK: 200,
	Created: 201,
	NoContent: 204,
	BadRequest: 400,
	MethodNotAllowed: 405,
	InternalServerError: 500,

	class: {
		"1xx": "INFORMATIONAL",
		"2xx": "SUCCESSFUL",
		"3xx": "REDIRECTION",
		"4xx": "CLIENT_ERROR",
		"5xx": "SERVER_ERROR",

		"INFORMATIONAL": "INFORMATIONAL",
		"SUCCESSFUL": "SUCCESSFUL",
		"REDIRECTION": "REDIRECTION",
		"CLIENT_ERROR": "CLIENT_ERROR",
		"SERVER_ERROR": "SERVER_ERROR",
	},

	statusClass: status => {
		if (isEmpty(status)) {
			return null
		}

		// default to CLIENT_ERROR status class prefix (4) here if/when this fails
		const statusPrefix = String(status).split("")[0] || 4
		const statusClassCode = `${statusPrefix}xx`

		return HttpStatus.class[statusClassCode]
	},

	isSuccessStatus: status => {
		return HttpStatus.statusClass(status) === HttpStatus.class.SUCCESSFUL
	}
}

export const EVENT_REGISTRATION_TYPE = {
	ONLINE: "Online",
	MANUAL: "Manual"
}
