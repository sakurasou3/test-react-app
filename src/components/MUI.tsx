import { Stack, Typography, Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const MUI = () => {
  const navigate = useNavigate();
  const handleClickHighlight = useCallback(() => {
    navigate("highlight");
  }, [navigate]);
  return (
    <Stack gap={5} padding={5}>
      <Stack alignItems="center" marginTop={4}>
        <Typography fontSize="30px" fontWeight="bold">
          MUI
        </Typography>
      </Stack>
      <Stack direction="row">
        <Button variant="contained" size="large" onClick={handleClickHighlight}>
          ハイライト付き文字列
        </Button>
      </Stack>
    </Stack>
  );
};
