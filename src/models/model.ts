/* CREDITOR_GENERATED */
import { Models } from '@rematch/core';

import { models_MyModel } from '#src/models/MyModel';

export interface RootModel extends Models<RootModel> {
  models_MyModel: typeof models_MyModel;
}

export const models: RootModel = {
  models_MyModel,
}
