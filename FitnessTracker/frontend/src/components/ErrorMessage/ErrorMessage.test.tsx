import { describe, it } from "vitest";
import ErrorMessage from "./ErrorMessage";
import { render, screen } from "@testing-library/react";


describe('ErrorMessage', () => {
    it('renders default error state', () => {
        render(<ErrorMessage />);
        screen.debug();
    })
})