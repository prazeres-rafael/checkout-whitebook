import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom";

import PlansSelect from "./PlansSelect";

fetchMock.enableMocks();

const mockPlans = [
  {
    id: 1,
    title: "Plan 1",
    description: "Description 1",
    fullPrice: 100,
    discountAmmount: 10,
    discountPercentage: 0.1,
    installments: 3,
    storeId: "store1",
  },
  {
    id: 2,
    title: "Plan 2",
    description: "Description 2",
    fullPrice: 200,
    discountAmmount: 20,
    discountPercentage: 0.2,
    installments: 6,
    storeId: "store2",
  },
];

describe("PlansSelect", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders the loading state", () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockPlans), {
      status: 200,
    });

    render(<PlansSelect />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders the plans after fetching data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockPlans), {
      status: 200,
    });

    render(<PlansSelect />);

    await waitFor(() => {
      expect(screen.getByText("Plan 1 | Description 1")).toBeInTheDocument();
      expect(screen.getByText("Plan 2 | Description 2")).toBeInTheDocument();
    });
  });
});
