export type CustomLoginSequence = {
  url?: string;
  name: string;
  steps: Array<CustomLoginSequenceStep>;
} & ConditionsType;

export type CustomLoginSequenceStep = {
  name: string;
  url?: string;
  actions: Array<CustomLoginSequenceStepAction>;
  waitDelayInMilliseconds?: number;
} & ConditionsType;

export type CustomLoginSequenceStepAction = {
  type: CustomLoginSequenceTypeOfAction;
  waitDelayInMilliseconds?: number;
  value?: string;
  elementIdentifier?: {
    identifier: string;
    type: CustomLoginSequenceElementType;
    findType: CustomLoginSequenceElementFindType;
  };
};

type ConditionsType = {
  pageContainsValue?: string;
  urlContainsValue?: string;
};

export enum CustomLoginSequenceTypeOfAction {
  Click = "Click",
  JavaScriptClick = "JavaScriptClick",
  Clear = "Clear",
  SendKeys = "SendKeys",
  PressTab = "PressTab",
  PressSpace = "PressSpace",
  PressEnter = "PressEnter",
  Submit = "Submit",
  PressKey = "PressKey",
}

export enum CustomLoginSequenceElementType {
  Default = "Default",
  Username = "Username",
  Password = "Password",
}

export enum CustomLoginSequenceElementFindType {
  Name = "Name",
  Id = "Id",
  TagName = "TagName",
  ClassName = "ClassName",
  CssSelector = "CssSelector",
  XPath = "XPath",
}
