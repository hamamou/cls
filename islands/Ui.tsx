import { StateUpdater } from "preact/hooks";
import { InputWithLabel } from "../components/inputWithLabel.tsx";
import { newAction, newStep } from "../utils/initialValues.ts";
import { CustomLoginSequence } from "../utils/types.ts";

export const Ui = (
  { loginSequence, setLoginSequence }: {
    loginSequence: CustomLoginSequence;
    setLoginSequence: StateUpdater<CustomLoginSequence>;
  },
) => {
  const addStep = () => {
    setLoginSequence({
      ...loginSequence,
      steps: [...loginSequence.steps, newStep],
    });
  };

  const addAction = (index: number) => {
    const newSequence = {
      ...loginSequence,
      steps: [
        ...loginSequence.steps.slice(0, index),
        {
          ...loginSequence.steps[index],
          actions: [...loginSequence.steps[index].actions, newAction],
        },
        ...loginSequence.steps.slice(index + 1),
      ],
    };

    setLoginSequence(newSequence);
  };

  const handleSequenceChange = (e: Event) => {
    const { id, value } = e.target as HTMLInputElement;
    setLoginSequence({ ...loginSequence, [id]: value });
  };

  const handleStepChange = (e: Event, stepIndex: number) => {
    const { id, value } = e.target as HTMLInputElement;

    setLoginSequence((currentLoginSequence: CustomLoginSequence) => {
      currentLoginSequence.steps[stepIndex] = {
        ...currentLoginSequence.steps[stepIndex],
        [id]: id == "waitDealyInMilliseconds" ? Number(value) : value,
      };
      return currentLoginSequence;
    });
  };

  const handleActionChange = (
    e: Event,
    stepIndex: number,
    actionIndex: number,
  ) => {
    const { id, value } = e.target as HTMLInputElement;
    setLoginSequence((currentLoginSequence: CustomLoginSequence) => {
      currentLoginSequence.steps[stepIndex].actions[actionIndex] = {
        ...currentLoginSequence.steps[stepIndex].actions[actionIndex],
        [id]: id == "waitDealyInMilliseconds" ? Number(value) : value,
      };
      return currentLoginSequence;
    });
  };

  return (
    <div class="p-4 w-full">
      <div class="pb-2">UI</div>
      <div class="bg-gray-200 min-h-full">
        <div class="p-2">
          <form>
            <InputWithLabel
              label="Name"
              id="name"
              value={loginSequence.name}
              onChange={handleSequenceChange}
            />
            <h2 class="text-lg font-semibold mb-2">Conditions</h2>
            <div class="pl-4">
              <InputWithLabel
                label="URL"
                id="URL"
                value={loginSequence.url}
                onChange={handleSequenceChange}
              />
              <div class="flex gap-2">
                <InputWithLabel
                  label="Page contains value"
                  id="pageContainsValue"
                  value={loginSequence.pageContainsValue}
                  onChange={handleSequenceChange}
                />
                <InputWithLabel
                  label="Url contains value"
                  id="urlContainsValue"
                  value={loginSequence.urlContainsValue}
                  onChange={handleSequenceChange}
                />
              </div>
            </div>
            <h2 class="text-lg font-semibold">Steps</h2>
            <div class="pl-4">
              {loginSequence.steps.map((step, index) => (
                <div key={index}>
                  <h3 class="font-semibold mb-2">Step {index + 1}</h3>
                  <InputWithLabel
                    label="Name"
                    id="name"
                    value={step.name}
                    onChange={(e) => handleStepChange(e, index)}
                  />
                  <div class="flex gap-2">
                    <InputWithLabel
                      label="URL"
                      id="url"
                      value={step.url}
                      onChange={(e) => handleStepChange(e, index)}
                    />
                    <InputWithLabel
                      label="Wait delay in milliseconds"
                      id="waitDealyInMilliseconds"
                      value={step.waitDelayInMilliseconds?.toString()}
                      onChange={(e) => handleStepChange(e, index)}
                    />
                  </div>
                  <div class="flex gap-2">
                    <InputWithLabel
                      label="page contains value"
                      id="pageContainsValue"
                      value={step.pageContainsValue}
                      onChange={(e) => handleStepChange(e, index)}
                    />
                    <InputWithLabel
                      label="URL contains value"
                      id="urlContainsValue"
                      value={step.urlContainsValue}
                      onChange={(e) => handleStepChange(e, index)}
                    />
                  </div>

                  <div class="pl-4">
                    <h3 class="text-lg font-semibold">Actions</h3>
                    {step.actions.map((action, actionIndex) => (
                      <div key={actionIndex}>
                        <h5 class="font-semibold">
                          Action {actionIndex + 1}
                        </h5>
                        <div class="flex gap-2">
                          <InputWithLabel
                            label="Type"
                            id="type"
                            value={action.type}
                            onChange={(e) =>
                              handleActionChange(e, index, actionIndex)}
                          />
                          <InputWithLabel
                            label="find Type"
                            id="findType"
                            value={action.elementIdentifier?.findType}
                            onChange={(e) =>
                              handleActionChange(e, index, actionIndex)}
                          />
                          <InputWithLabel
                            label="identifier"
                            id="identifier"
                            value={action.elementIdentifier?.identifier}
                            onChange={(e) =>
                              handleActionChange(e, index, actionIndex)}
                          />
                        </div>
                        <div class="flex gap-2">
                          <InputWithLabel
                            label="Element id type"
                            id="elementIdentifierType"
                            value={action.elementIdentifier?.type}
                            onChange={(e) =>
                              handleActionChange(e, index, actionIndex)}
                          />
                          <InputWithLabel
                            label="value"
                            id="value"
                            value={action.value}
                            onChange={(e) =>
                              handleActionChange(e, index, actionIndex)}
                          />
                          <InputWithLabel
                            label="wait delay"
                            id="waitDealyInMilliseconds"
                            value={action.waitDelayInMilliseconds?.toString()}
                            onChange={(e) =>
                              handleActionChange(e, index, actionIndex)}
                          />
                        </div>
                      </div>
                    ))}
                    <div class="py-2 ">
                      <button
                        class="bg-red-500 text-white px-4 py-2 rounded-lg"
                        type="button"
                        onClick={() => addAction(index)}
                      >
                        +Add Action
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div class="py-2">
                <button
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  type="button"
                  onClick={addStep}
                >
                  + Add Step
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
