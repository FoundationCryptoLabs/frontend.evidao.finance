import {
  Box,
  Button,
  Card,
  CardProps,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSwapRight } from "react-icons/ai";
import { MdInfoOutline, MdRefresh } from "react-icons/md";

interface Props extends CardProps {
  title: string;
  data: string;
  unit?: React.ReactNode;
  bgColor: string;
  actionText?: React.ReactNode;
  onActionClick?: (value: string) => void;
  info?: string;
  refreshLabel?: string;
  onRefresh?: (evt: MouseEvent<HTMLButtonElement>) => void;
}

const InfoCard = ({
  title,
  data,
  unit,
  bgColor,
  info,
  actionText,
  onActionClick,
  refreshLabel,
  onRefresh,
  ...rest
}: Props) => {
  const [firstClick, setFirstClick] = useState(true);
  const [value, setValue] = useState("");

  return (
    <Card
      {...rest}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
        <Box display="flex" alignItems="baseline" gap={1}>
          <Tooltip title={`${data} ${unit}`}>
            <Typography fontSize="2rem" fontWeight="bold">
              {data.slice(0, 8)}
            </Typography>
          </Tooltip>
          <Typography fontSize="0.75rem" fontWeight="bold">
            {unit}
          </Typography>
        </Box>
        {refreshLabel && (
          <Button
            sx={{
              color: "text.primary",
              textTransform: "capitalize",
              fontSize: "0.75rem",
              padding: 0,
            }}
            endIcon={<MdRefresh />}
            onClick={onRefresh}
          >
            {refreshLabel}
          </Button>
        )}
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
            <>
              <TextField
                type="number"
                sx={{
                  marginBottom: 1,
                }}
                InputProps={{
                  endAdornment: unit ? (
                    <InputAdornment position="end">{unit}</InputAdornment>
                  ) : undefined,
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        onClick={() => setFirstClick(true)}
                        sx={{ margin: 0, padding: 0, fontSize: "1.25rem" }}
                      >
                        <AiOutlineCloseCircle />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setValue(event.currentTarget.value);
                }}
                placeholder="Amount"
                fullWidth
              />
              {info && (
                <Box display="flex" alignItems="center" gap={1}>
                  <MdInfoOutline />
                  <Typography fontSize="0.75rem">{info}</Typography>
                </Box>
              )}
            </>
          )}
        </>
      )}
    </Card>
  );
};

export default InfoCard;
