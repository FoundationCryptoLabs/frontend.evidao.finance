import {
  Box,
  Button,
  Card,
  CardProps,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { AiOutlineSwapRight } from "react-icons/ai";
import React, { ChangeEvent, useState } from "react";

interface Props extends CardProps {
  title: string;
  data: string;
  unit?: React.ReactNode;
  bgColor: string;
  actionText?: React.ReactNode;
  onActionClick?: (value: string) => void;
}

const InfoCard = ({
  title,
  data,
  unit,
  bgColor,
  actionText,
  onActionClick,
  ...rest
}: Props) => {
  const [firstClick, setFirstClick] = useState(true);
  const [value, setValue] = useState("");

  return (
    <Card
      {...rest}
      sx={{
        backgroundColor: bgColor,
        borderRadius: "12px",
        transition: "height 0.5s ease",
        ...rest.sx,
      }}
    >
      <Box paddingX={2} paddingY={2}>
        <Typography fontWeight="bold" sx={{}}>
          {title}
        </Typography>
        <Box display="flex" alignItems="baseline" gap={1} marginBottom={2}>
          <Tooltip title={`${data} ${unit}`}>
            <Typography fontSize="2rem" fontWeight="bold">
              {data.slice(0, 8)}
            </Typography>
          </Tooltip>
          <Typography fontSize="0.75rem" fontWeight="bold">
            {unit}
          </Typography>
        </Box>
      </Box>
      {actionText && (
        <>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="baseline"
            gap={2}
          >
            <Button
              sx={{
                color: "text.primary",
                textTransform: "capitalize",
              }}
              size="small"
              variant="text"
              onClick={
                firstClick
                  ? () => setFirstClick(false)
                  : async () => {
                      if (!value) return;
                      try {
                        await onActionClick?.(value);
                      } catch (err) {
                        throw err;
                      } finally {
                        setValue("");
                        setFirstClick(true);
                      }
                    }
              }
              endIcon={<AiOutlineSwapRight />}
            >
              {actionText}
            </Button>
          </Box>
          {!firstClick && (
            <TextField
              type="number"
              sx={{
                marginBottom: 1,
              }}
              InputProps={
                unit
                  ? {
                      endAdornment: (
                        <InputAdornment position="end">{unit}</InputAdornment>
                      ),
                    }
                  : undefined
              }
              value={value}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setValue(event.currentTarget.value);
              }}
              placeholder="Amount"
              fullWidth
            />
          )}
        </>
      )}
    </Card>
  );
};

export default InfoCard;
