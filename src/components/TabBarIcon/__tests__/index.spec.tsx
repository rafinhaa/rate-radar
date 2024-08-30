import { render, screen } from "@/utils/tests"

import TabBarIcon from ".."

describe("TabBarIcon", () => {
  describe("should to be able to render correctly with focus:", () => {
    it("true", () => {
      render(<TabBarIcon name="cog" focused />)

      expect(screen.getByTestId("tab-bar-icon-cog-border-true")).toBeTruthy()

      expect(screen.getByTestId("icon-cog-36")).toBeTruthy()
      expect(screen.getByTestId("icon-cog-36")).toHaveProp("color", "white")
      expect(screen.getByTestId("icon-cog-36")).toHaveProp("size", 36)
    })

    it("false", () => {
      render(<TabBarIcon name="cog" focused={false} />)

      expect(screen.getByTestId("tab-bar-icon-cog-border-false")).toBeTruthy()

      expect(screen.getByTestId("icon-cog-36")).toBeTruthy()
      expect(screen.getByTestId("icon-cog-36")).toHaveProp("color", "white")
      expect(screen.getByTestId("icon-cog-36")).toHaveProp("size", 36)
    })
  })
})
