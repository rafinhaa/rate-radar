import { render, resources, screen } from "@/utils/tests"

import App from "../../App"

describe("App", () => {
  it("should be to able to render correctly", () => {
    render(<App />)

    screen.debug()

    expect(screen.getByText(resources.startingMessage)).toBeTruthy()
  })
})
