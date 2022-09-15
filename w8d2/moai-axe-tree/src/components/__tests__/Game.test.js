import Game from "../Game";
import { fireEvent, render, waitForElement } from "@testing-library/react";

describe("Player clicking functionality", () => {
  it("should not have any elements selected by default", () => {
    const { queryByTestId } = render(<Game />);

    // const element1 = queryByTestId("🌳");
    // const element2 = queryByTestId("🪓");
    // const element3 = queryByTestId("🗿");
    const elements = [queryByTestId("🌳"), queryByTestId("🪓"), queryByTestId("🗿")];

    for (const element of elements) {
      expect(element).toBeInTheDocument();
      expect(element).not.toHaveClass("selected");
    }

    // expect(element1).toBeInTheDocument();
    // expect(element2).toBeInTheDocument();
    // expect(element3).toBeInTheDocument();

    // expect(element1).not.toHaveClass("selected");
    // expect(element2).not.toHaveClass("selected");
    // expect(element3).not.toHaveClass("selected");
  });
  it("should change classes when an element is clicked", () => {
    const { queryByTestId, debug } = render(<Game />);
    // debug();

    const element = queryByTestId("🌳");

    fireEvent.click(element);

    expect(element).toHaveClass("selected");
  });
});

describe("Player / Computer game functionality", () => {
  it("Should show the game result when we click on a player choice", async () => {
    const { queryByTestId, queryByText, debug, findByText } = render(<Game />);
    // Check initial message
    const initialResult = queryByText("Waiting for your choice !");
    expect(initialResult).toBeInTheDocument();

    // Click on a player choice
    const playerChoice = queryByTestId("🗿");
    fireEvent.click(playerChoice);

    // BTS: computer chooses the opposite
    // Result in the footer

    // waitForElement(() => {
    //   const finalResult = queryByText("Skynet has won.");
    //   expect(finalResult).toBeInTheDocument();
    // });
    const finalResult = await findByText("Skynet has won.");
    expect(finalResult).toBeInTheDocument();
  });
});
