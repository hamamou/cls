import { StateUpdater } from "preact/hooks";
import { CustomLoginSequence } from "../utils/types.ts";

export const UiToJsonButton = (
  { setJson, loginSequence }: {
    setJson: StateUpdater<string>;
    loginSequence: CustomLoginSequence;
  },
) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2 text-lg"
      onClick={() => {
        const data = JSON.stringify(cleanUp(loginSequence), null, 2);

        setJson(data);
      }}
    >
      →
    </button>
  );
};

function cleanUp(cls: CustomLoginSequence) {
  if (cls.name == "") {
    cls.name = "Custom Login Sequence";
  }

  if (cls.urlContainsValue == "") {
    delete cls.urlContainsValue;
  }

  if (cls.pageContainsValue == "") {
    delete cls.pageContainsValue;
  }

  cls.steps.forEach((step) => {
    if (step.waitDelayInMilliseconds == 0) {
      delete step.waitDelayInMilliseconds;
    }
    if (step.url == "") {
      delete step.url;
    }

    if (step.pageContainsValue == "") {
      delete step.pageContainsValue;
    }

    if (step.urlContainsValue == "") {
      delete step.urlContainsValue;
    }

    step.actions.forEach((action) => {
      if (action.waitDelayInMilliseconds == 0) {
        delete action.waitDelayInMilliseconds;
      }
      if (action.value == "") {
        delete action.value;
      }
    });
  });

  return cls;
}
