import { Card, CardProps, Typography } from "@mui/material";
import React from "react";

interface Props extends CardProps {
  title: string;
  data: string;
}

const InfoCard = ({ title, data, ...rest }: Props) => {
  return (
    <Card color="primary" {...rest}>
      <Typography>{title}</Typography>
      <Typography>{data}</Typography>
    </Card>
  );
};

export default InfoCard;
