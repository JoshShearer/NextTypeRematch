import { store, dispatch } from "#src/models/store";
require('chai')
    .use(require('chai-as-promised'))
    .should()
const expect = require('chai').expect

const get_models_MyModel = () => store.getState().models_MyModel;

describe("models_MyModel", () => {
  // beforeEach(() => dispatch({ type: "RESET" }));

  // it("should return the initial state correctly", () => {
  //  expect( get_models_MyModel()).toEqual({ defaultState });
  // });
  // it("test each reducer", () => {
  //   dispatch.models_MyModel.reducerfunction({ stateKey: "expectedvalue" });
  //   expect(get_models_MyModel()).toEqual({
     
  //   });
  // });
})