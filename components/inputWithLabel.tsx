export const InputWithLabel = (
  { label, id, value, ...props }: {
    label: string;
    id: string;
    value?: string;
    onChange: (e: Event) => void;
  },
) => {
  return (
    <div class="flex flex-col flex-auto">
      <label for="label">{label}</label>
      <input
        type="text"
        id={id}
        className="border border-gray-300 p-1 pl-2 rounded-md w-full"
        value={value}
        {...props}
      />
    </div>
  );
};
