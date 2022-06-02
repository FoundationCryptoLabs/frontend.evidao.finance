import React from "react";
import TakeDebt from "components/TakeDebt/TakeDebt";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import Lend from "components/Lend/Lend";
import InfoCard from "components/InfoCard/InfoCard";

type Props = {};

const Homepage = (props: Props) => {
  const [checked, setChecked] = React.useState(true);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box marginY="2rem">
        <InfoCard title="Lorem Ipsum" data="1.156" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Lend</Typography>
        <Switch
          sx={{
            "& .Mui-checked": {
              color: "inherit",
            },
          }}
          checked={checked}
          onChange={handleSwitch}
        />
        <Typography variant="h5">Borrow</Typography>
      </Box>
      {checked ? <TakeDebt /> : <Lend />}
    </>
  );
};

export default Homepage;
