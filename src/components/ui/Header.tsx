import { Typography, TypographyProps } from "@mui/material";

type Props = {
  type: "h1" | "h2" | "h3";
} & TypographyProps;

export const Header = ({ children, type, ...otherProps }: Props) => {
  switch (type) {
    case "h1":
      return (
        <Typography
          fontSize="32px"
          fontWeight="bold"
          sx={{ textDecoration: "underline", textDecorationStyle: "double" }}
          {...otherProps}
        >
          {children}
        </Typography>
      );
    case "h2":
      return (
        <Typography
          fontSize="24px"
          fontWeight="bold"
          sx={{ textDecoration: "underline" }}
          {...otherProps}
        >
          {children}
        </Typography>
      );
    case "h3":
      return (
        <Typography fontSize="16px" fontWeight="bold" {...otherProps}>
          {children}
        </Typography>
      );
    default:
      return <></>;
  }
};
