import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import PaymentsFields from "./PaymentsFields";

describe("PaymentsFields", () => {
  it("renders without crashing", () => {
    render(<PaymentsFields />);
    expect(screen.getByTestId("payments-fields")).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    render(<PaymentsFields />);

    userEvent.type(
      screen.getByPlaceholderText("0000 0000 0000 0000"),
      "4111111111111111"
    );
    userEvent.type(screen.getByPlaceholderText("MM/AA"), "12/24");
    userEvent.type(screen.getByPlaceholderText("000"), "123");
    userEvent.type(screen.getByPlaceholderText("Seu nome"), "John Doe");
    userEvent.type(
      screen.getByPlaceholderText("000.000.000-00"),
      "123.456.789-10"
    );
    userEvent.click(screen.getByText(/selecionar/i));
    const option = await screen.findByRole("option", { name: "2" });
    userEvent.click(option);

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    userEvent.click(screen.getByTestId("button-submit"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription",
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            couponCode: null,
            creditCardCPF: "123.456.789-10",
            creditCardCVV: "123",
            creditCardExpirationDate: "12/24",
            creditCardHolder: "John Doe",
            creditCardNumber: "4111111111111111",
            gateway: "iugu",
            installments: 2,
            offerId: 18,
            userId: 1,
          }),
        })
      );
    });
  });
});
