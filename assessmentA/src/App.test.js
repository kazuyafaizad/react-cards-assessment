import { getAllByDisplayValue, render, screen, queryByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Button from "./Button";

test("renders enter number player", () => {
  render(<App />);
  expect(screen.getByText(/Please enter number of player/i)).toBeInTheDocument();
});

test("click distribute card", () => {
  render(<App numberOfPlayers={4} />);
  const button = screen.queryByText("DISTRIBUTE CARD");

  const input = screen.getByDisplayValue("");
  userEvent.type(input, "4");
  expect(input).toHaveDisplayValue(4);

  userEvent.click(button);
});
