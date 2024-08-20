import { render, resources, screen } from "@/utils/tests"

import Loading from ".."

describe("Loading", () => {
  it("should to be able to render default component correctly", () => {
    render(<Loading />)

    expect(screen.getByText(resources.common.loading + "...")).toBeTruthy()
  })

  it("should to be able to render correctly with custom message", () => {
    const customMessage = "custom message"

    render(<Loading message={customMessage} />)

    expect(screen.getByText(customMessage)).toBeTruthy()
  })
})
