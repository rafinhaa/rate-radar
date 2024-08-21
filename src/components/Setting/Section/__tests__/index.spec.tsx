import { Text } from "react-native"

import { render, screen } from "@/utils/tests"

import Section from ".."

describe("Setting Section", () => {
  it("should to be able to render default component correctly", () => {
    render(
      <Section title="title">
        <Text>children</Text>
      </Section>,
    )

    expect(screen.getByText("title")).toBeTruthy()
    expect(screen.getByText("children")).toBeTruthy()
  })
})
