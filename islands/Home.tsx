import { useState } from "preact/hooks";
import { Json } from "../components/Json.tsx";
import { JsonToUiButton } from "../components/JsonToUiButton.tsx";
import { UiToJsonButton } from "../components/UiToJsonButton.tsx";
import { newStep } from "../utils/initialValues.ts";
import { CustomLoginSequence } from "../utils/types.ts";
import { Ui } from "./Ui.tsx";

export const Home = () => {
  const [loginSequence, setLoginSequence] = useState<CustomLoginSequence>({
    url: "URL",
    name: "",
    pageContainsValue: "",
    steps: [newStep],
  });

  const [json, setJson] = useState<string>("");

  return (
    <div className="flex h-screen pb-8 px-16">
      <Ui loginSequence={loginSequence} setLoginSequence={setLoginSequence} />
      <div className="flex flex-col justify-center items-center">
        <UiToJsonButton setJson={setJson} loginSequence={loginSequence} />
        <JsonToUiButton setLoginSequence={setLoginSequence} json={json} />
      </div>
      <Json json={json} setJson={setJson} />
    </div>
  );
};
