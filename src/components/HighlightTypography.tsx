import { Stack, Typography } from "@mui/material";
import { Header } from "./ui/Header";

export const HighlightTypography = () => {
  return (
    <Stack gap={5} padding={5} alignItems="center" marginTop={4}>
      <Header type="h1">ハイライト付き文字列</Header>
      <Typography
        sx={{
          textDecoration: "underline",
          textDecorationColor: "pink",
          textUnderlineOffset: "-0.2em",
          textDecorationSkipInk: "none",
          textDecorationThickness: "0.5em",
        }}
      >
        HighlightTypography
      </Typography>

      <Header type="h2">underline, color</Header>
      <Typography
        sx={{ textDecoration: "underline", textDecorationColor: "pink" }}
      >
        HighlightTypography
      </Typography>

      <Header type="h2">offset：表示位置</Header>
      <Typography
        sx={{
          textDecoration: "underline",
          textDecorationColor: "pink",
          textUnderlineOffset: "-0.2em",
        }}
      >
        HighlightTypography
      </Typography>

      <Header type="h2">SkipInk：文字の上に表示</Header>
      <Typography
        sx={{
          textDecoration: "underline",
          textDecorationColor: "pink",
          textUnderlineOffset: "-0.2em",
          textDecorationSkipInk: "none",
        }}
      >
        HighlightTypography
      </Typography>

      <Header type="h2">Finish</Header>
      <Typography
        sx={{
          textDecoration: "underline",
          textDecorationColor: "pink",
          textUnderlineOffset: "-0.2em",
          textDecorationSkipInk: "none",
          textDecorationThickness: "0.5em",
        }}
      >
        HighlightTypography
      </Typography>
    </Stack>
  );
};
