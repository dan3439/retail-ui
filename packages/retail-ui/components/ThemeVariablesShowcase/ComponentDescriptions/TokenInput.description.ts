export default {
  warning: {
    contents: "css`\n  .${styles.root} .${styles.label}& {\n    border: 1px solid ${t.borderColorWarning};\n    box-shadow: 0 0 0 1px ${t.borderColorWarning};\n  }\n`",
    variables: [
      "borderColorWarning"
    ]
  },
  error: {
    contents: "css`\n  .${styles.root} .${styles.label}& {\n    border: 1px solid ${t.borderColorError};\n    box-shadow: 0 0 0 1px ${t.borderColorError};\n  }\n`",
    variables: [
      "borderColorError"
    ]
  },
  label: {
    contents: "css`\n  .${styles.root} & {\n    background: ${t.bgDefault};\n    border: 1px solid ${t.borderColorGrayLight};\n    border-top-color: ${t.borderColorGrayDark};\n  }\n`",
    variables: [
      "bgDefault",
      "borderColorGrayLight",
      "borderColorGrayDark"
    ]
  },
  labelFocused: {
    contents: "css`\n  .${styles.root} & {\n    border: 1px solid ${t.borderColorFocus};\n    box-shadow: 0 0 0 1px ${t.borderColorFocus};\n  }\n`",
    variables: [
      "borderColorFocus"
    ]
  },
  input: {
    contents: "css`\n  .${styles.root} &::placeholder {\n    color: ${t.placeholderColor};\n  }\n  .${styles.root} &:focus::placeholder {\n    color: ${t.placeholderColorLight};\n  }\n`",
    variables: [
      "placeholderColor",
      "placeholderColorLight"
    ]
  }
};