import { Button, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Top = () => {
  const navigate = useNavigate();

  const handleClickMUI = useCallback(() => {
    navigate("Mui");
  }, [navigate]);

  return (
    <Stack gap={5} padding={5}>
      <Stack alignItems="center" marginTop={4}>
        <Typography fontSize="30px" fontWeight="bold">
          Let's Play!
        </Typography>
      </Stack>
      <Stack direction="row">
        <Button variant="contained" size="large" onClick={handleClickMUI}>
          MUI
        </Button>
      </Stack>
    </Stack>
  );
};
