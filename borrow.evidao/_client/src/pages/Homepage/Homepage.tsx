import React from "react";
import TakeDebt from "components/TakeDebt/TakeDebt";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import Lend from "components/Lend/Lend";

type Props = {};

const Homepage = (props: Props) => {
  const [checked, setChecked] = React.useState(true);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        marginBottom="2rem"
      >
        <Typography variant="h5">Borrow</Typography>
        <Switch
          sx={{
            "& .Mui-checked": {
              color: "inherit",
            },
          }}
          checked={checked}
          onChange={handleSwitch}
        />
        <Typography variant="h5">Lend</Typography>
      </Box>
      {checked ? <TakeDebt /> : <Lend />}
    </>
  );
};

export default Homepage;
