export type Colors<Color> = {
  background: {
    primary: Color;
    secondary: Color;
    neutral: Color;
  };
  error: ColorVariant<Color>;
  info: ColorVariant<Color>;
  primary: ColorVariant<Color>;
  primaryAction: ColorVariantAction<Color>;
  secondary: ColorVariant<Color>;
  secondaryAction: ColorVariantAction<Color>;
  success: ColorVariant<Color>;
  warning: ColorVariant<Color>;
};

type ColorVariant<Color> = {
  contrastText: Color;
  dark: Color;
  light: Color;
  main: Color;
  outlinedText: Color;
};

type ColorVariantAction<Color> = {
  main: Color;
  hover: Color;
  focus: Color;
  press: {
    main: Color;
    text: Color;
  };
  text: Color;
};
