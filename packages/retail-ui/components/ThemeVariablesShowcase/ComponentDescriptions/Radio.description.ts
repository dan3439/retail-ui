export default {
  radio: {
    contents: "css`\n  width: ${t.radioSize};\n  height: ${t.radioSize};\n  vertical-align: ${t.radioVerticalAlign};\n  background-image: ${t.radioBgImage};\n  box-shadow: ${t.radioBoxShadow};\n  border: ${t.radioBorder};\n\n  .${styles.root}:hover & {\n    background: ${t.radioHoverBg};\n    box-shadow: ${t.radioHoverShadow};\n  }\n  .${styles.root}:active & {\n    background: ${t.radioActiveBg};\n    box-shadow: ${t.radioActiveShadow};\n  }\n  .${styles.input}:focus + &::after {\n    box-shadow: ${t.radioFocusShadow};\n    border-color: ${t.borderColorFocus};\n  }\n`",
    variables: [
      "radioSize",
      "radioVerticalAlign",
      "radioBgImage",
      "radioBoxShadow",
      "radioBorder",
      "radioHoverBg",
      "radioHoverShadow",
      "radioActiveBg",
      "radioActiveShadow",
      "radioFocusShadow",
      "borderColorFocus"
    ]
  },
  focus: {
    contents: "css`\n  &::after {\n    box-shadow: ${t.radioFocusShadow};\n    border-color: ${t.borderColorFocus};\n  }\n`",
    variables: [
      "radioFocusShadow",
      "borderColorFocus"
    ]
  },
  warning: {
    contents: "css`\n  &::after {\n    box-shadow: ${t.radioFocusShadow};\n    border-color: ${t.borderColorWarning};\n  }\n`",
    variables: [
      "radioFocusShadow",
      "borderColorWarning"
    ]
  },
  error: {
    contents: "css`\n  &::after {\n    box-shadow: ${t.radioFocusShadow};\n    border-color: ${t.borderColorError};\n  }\n`",
    variables: [
      "radioFocusShadow",
      "borderColorError"
    ]
  },
  checked: {
    contents: "css`\n  .${styles.root} .${styles.radio}& {\n    background-color: ${t.radioCheckedBgColor};\n  }\n  .${styles.root} .${styles.radio}&::before {\n    background: ${t.radioCheckedBulletColor};\n  }\n`",
    variables: [
      "radioCheckedBgColor",
      "radioCheckedBulletColor"
    ]
  },
  disabled: {
    contents: "css`\n  box-shadow: ${t.radioDisabledShadow} !important;\n`",
    variables: [
      "radioDisabledShadow"
    ]
  },
  label: {
    contents: "css`\n  display: ${t.radioLabelDisplay};\n`",
    variables: [
      "radioLabelDisplay"
    ]
  }
};