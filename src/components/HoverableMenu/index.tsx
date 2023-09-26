import { memo } from "react";
import { useHoverableMenu } from "./index.hooks";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Menu,
  MenuItem,
  Paper,
  Popper,
  Typography,
} from "@mui/material";

export type itemType = {
  item: string;
  link: string;
};

type HoverableMenuProps = { ButtonText: string; items: itemType[] };

export const HoverableMenu = memo(
  ({ ButtonText, items }: HoverableMenuProps) => {
    const { handleOpenMenu, handleCloseMenu, router, anchorEl } =
      useHoverableMenu();

    return (
      <Box onMouseLeave={handleCloseMenu}>
        <Box
          onMouseEnter={handleOpenMenu}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: "70px",
          }}
        >
          <Box>
            <Button
              aria-controls="hover-menu"
              aria-haspopup="true"
              style={{ color: "white", fontWeight: "bold", height: "70px" }}
            >
              {ButtonText}
            </Button>
          </Box>

          <Popper
            open={true}
            anchorEl={anchorEl}
            placement="bottom-start"
            style={{
              transition: "opacity 0.6s",
              opacity: anchorEl ? 1 : 0,
              pointerEvents: anchorEl ? "auto" : "none",
              zIndex: 2222,
            }}
          >
            <ClickAwayListener onClickAway={handleCloseMenu}>
              <Paper
                style={{
                  backgroundColor: "#006A4E",
                  color: "#FFF",
                  width: "250px",
                }}
              >
                {items.map((item, index) => {
                  return (
                    <>
                      <MenuItem
                        key={index}
                        style={{ zIndex: 1000 }}
                        onClick={() => router.push(item.link)}
                      >
                        {item.item}
                      </MenuItem>
                      <Divider />
                    </>
                  );
                })}
              </Paper>
            </ClickAwayListener>
          </Popper>
        </Box>
      </Box>
    );
  }
);

HoverableMenu.displayName = "HoverableMenu";
