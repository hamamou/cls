import { StateUpdater } from "preact/hooks";

export const Json = (
  { json, setJson }: { json: string; setJson: StateUpdater<string> },
) => {
  return (
    <div class="w-full h-full p-4 mr-4">
      <div class="pb-2">json</div>
      <textarea
        class="w-full h-full resize-none border border-gray-300"
        value={json}
        onChange={(e) => {
          const { value } = e.target as HTMLTextAreaElement;
          setJson(value);
        }}
      >
      </textarea>
    </div>
  );
};
