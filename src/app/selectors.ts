import { RootState } from "./store";
import { createSelector } from 'reselect'

export const selectProduct = (id: string) => (state: RootState) => {
    return {
      isLoading: state.products.isLoading,
      error: state.products.error,
      product: state.products.products.find((prod) => prod.id == id),
    }
};