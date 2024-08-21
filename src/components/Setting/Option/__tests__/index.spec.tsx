import { Text } from "react-native"

import { fireEvent, render, screen } from "@/utils/tests"

import Option from ".."

describe("Setting Option", () => {
  it("should to be able to render default component correctly", () => {
    render(<Option icon="cog" label="label" onOptionPress={jest.fn()} />)

    expect(screen.getByTestId("icon-cog-24")).toBeTruthy()
    expect(screen.getByText("label")).toBeTruthy()
    expect(screen.getByTestId("icon-chevron-right-24")).toBeTruthy()
  })

  it("should to be able to call onOptionPress", () => {
    const onOptionPress = jest.fn()

    render(<Option icon="cog" label="label" onOptionPress={onOptionPress} />)

    expect(screen.getByText("label")).toBeTruthy()

    fireEvent.press(screen.getByText("label"))

    expect(onOptionPress).toHaveBeenCalledTimes(1)
  })

  it("should to be able to render children", () => {
    render(
      <Option icon="cog" label="label" onOptionPress={jest.fn()}>
        <Text>children</Text>
      </Option>,
    )

    expect(screen.getByText("children")).toBeTruthy()
  })
})
