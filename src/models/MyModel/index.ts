import { createModel, init, RematchDispatch } from '@rematch/core';
import type { RootModel } from '#src/stores/model';

const defaultState = {
  name: '',
};

export const models_MyModel = createModel<RootModel>()({
  state: defaultState,
  reducers: {
    rename(state, payload: string): typeof defaultState {
      return {
        ...state,
        name: payload,
      };
    },
  },
  selectors: (slice, createSelector, hasProps) => ({

  }),
  effects: (dispatch: RematchDispatch) => ({
    // async renameAsync(payload: string, state) {
    //   dispatch.models_MyModel.rename(payload);
    // },
  }),
});
