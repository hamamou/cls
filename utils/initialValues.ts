import {
  CustomLoginSequenceElementFindType,
  CustomLoginSequenceElementType,
  CustomLoginSequenceStep,
  CustomLoginSequenceStepAction,
  CustomLoginSequenceTypeOfAction,
} from "./types.ts";

export const newAction: CustomLoginSequenceStepAction = {
  type: CustomLoginSequenceTypeOfAction.Click,
  elementIdentifier: {
    findType: CustomLoginSequenceElementFindType.Id,
    identifier: "",
    type: CustomLoginSequenceElementType.Default,
  },
};
export const newStep: CustomLoginSequenceStep = {
  name: "Name1",
  pageContainsValue: "",
  urlContainsValue: "",
  url: "",
  actions: [newAction],
};
