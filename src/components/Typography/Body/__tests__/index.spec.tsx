import { render, screen } from "@/utils/tests"

import Body from ".."

describe("Typography", () => {
  describe("Body", () => {
    it("should to be able to render default component correctly", () => {
      render(<Body testID="typography">Body</Body>)

      expect(screen.getByText("Body")).toBeTruthy()
      expect(screen.getByTestId("typography")).toHaveProp(
        "className",
        "text-base font-regular leading-[1.2] text-white",
      )
    })

    describe("variant", () => {
      it("should to be able to render variant text correctly", () => {
        render(
          <Body testID="typography" variant="text">
            Body
          </Body>,
        )

        expect(screen.getByText("Body")).toBeTruthy()
        expect(screen.getByTestId("typography")).toHaveProp(
          "className",
          "text-base font-regular leading-[1.2] text-white",
        )
      })

      it("should to be able to render variant caption correctly", () => {
        render(
          <Body testID="typography" variant="caption">
            Body
          </Body>,
        )

        expect(screen.getByText("Body")).toBeTruthy()
        expect(screen.getByTestId("typography")).toHaveProp(
          "className",
          "text-sm font-light leading-[1.1] text-white",
        )
      })

      it("should to be able to render variant title correctly", () => {
        render(
          <Body testID="typography" variant="title">
            Body
          </Body>,
        )

        expect(screen.getByText("Body")).toBeTruthy()
        expect(screen.getByTestId("typography")).toHaveProp(
          "className",
          "text-lg font-semi leading-[1.4] text-white",
        )
      })
    })
  })
})
