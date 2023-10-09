import { StateUpdater } from "preact/hooks";
import { CustomLoginSequence } from "../utils/types.ts";

export const JsonToUiButton = (
  { setLoginSequence, json }: {
    setLoginSequence: StateUpdater<CustomLoginSequence>;
    json: string;
  },
) => {
  const trans = async () => {
    const res = await fetch("/api/jsonToUi", {
      method: "POST",
      body: json,
    });

    const data = await res.json();

    setLoginSequence(data);
  };
  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-lg mb-2 text-lg"
      onClick={() => {
        trans();
      }}
    >
      ←
    </button>
  );
};
