export function useInputValidator() {
  const validateInput = (
    value: string,
    type: "text" | "number",
  ): string | null => {
    if (type === "number") {
      const isNumber = /^[0-9]*$/.test(value);

      return isNumber
        ? null
        : "Only numbers are allowed. Please remove any letters or special characters.";
    } else if (type === "text") {
      const isText = /^[a-zA-Z]*$/.test(value);

      return isText
        ? null
        : "Only letters are allowed. Please remove any numbers or special characters.";
    }

    return null;
  };

  return { validateInput };
}
