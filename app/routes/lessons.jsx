import { MainLayout } from "~/layouts/main"
import { windowTitle } from "~/util"
import { styled } from "~/styles"

export const meta = () => ({
	title: windowTitle("Lessons")
})

export default function Lessons() {
  return (
    <MainLayout>
      <h1>Lessons and Classes</h1>
			<h2>Lessons</h2>
			<p>
				1-on-1 individual lessons are $75.00 - $100.00 per hour, depending on what your individual needs are.
			</p>
			<h2>Classes</h2>
			<p>
				Classes are all setup on a custom, per-request basis. We don't have regularly scheduled classes, but can accomodate whatever needs you have. Call us and we can discuss the needs that you have, and can make arrangements to meet you where you're at. Schools, organizations, date-night out, whatever.
			</p>
    </MainLayout>
  )
}
