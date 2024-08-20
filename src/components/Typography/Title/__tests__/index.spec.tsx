import { render, screen } from "@/utils/tests"

import Title from ".."

describe("Typography", () => {
  describe("Title", () => {
    it("should to be able to render default component correctly", () => {
      render(<Title testID="typography">Title</Title>)

      expect(screen.getByText("Title")).toBeTruthy()
      expect(screen.getByTestId("typography")).toHaveProp(
        "className",
        "text-3xl font-black leading-[1.5] text-white",
      )
    })

    describe("variant", () => {
      it("should to be able to render variant h1 correctly", () => {
        render(
          <Title testID="typography" variant="h1">
            Title
          </Title>,
        )

        expect(screen.getByText("Title")).toBeTruthy()
        expect(screen.getByTestId("typography")).toHaveProp(
          "className",
          "text-3xl font-black leading-[1.5] text-white",
        )
      })

      it("should to be able to render variant h2 correctly", () => {
        render(
          <Title testID="typography" variant="h2">
            Title
          </Title>,
        )

        expect(screen.getByText("Title")).toBeTruthy()
        expect(screen.getByTestId("typography")).toHaveProp(
          "className",
          "text-2xl font-bold leading-[1.3] text-white",
        )
      })
    })
  })
})
