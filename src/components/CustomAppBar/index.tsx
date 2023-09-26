import { memo } from "react";
import { useAppBar } from "./index.hooks";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  AppBar,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import amiciPelosi from "../../../public/assets/AmiciPelosi.jpg";
import { HoverableMenu } from "../HoverableMenu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type CustomAppBarProps = {};

export const CustomAppBar = memo(({}: CustomAppBarProps) => {
  const {} = useAppBar();
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ backgroundColor: "#FFF", borderBottom: "2px black solid" }}
        >
          <Stack direction={"row"} style={{ width: "100%" }}>
            <Image src={amiciPelosi} alt="My Image" width={200} height={70} />
            {isBelowMd ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, marginLeft: "auto" }}
              >
                <MenuIcon style={{ color: "#17B169" }} />
              </IconButton>
            ) : (
              <Stack
                direction="row"
                spacing={3}
                sx={{ alignItems: "center", marginLeft: "auto" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#17B169",
                    color: "white",
                    height: "40px",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#17B169",
                    color: "white",
                    height: "40px",
                  }}
                >
                  Signup
                </Button>
              </Stack>
            )}
          </Stack>
        </Toolbar>

        <Stack
          direction={"row"}
          spacing={4}
          sx={{
            height: "70px",
            backgroundColor: "#17B169",
            justifyContent: "flex-start",
            paddingX: isBelowMd ? 1 : 3,
          }}
        >
          {!isBelowMd ? (
            <>
              <HoverableMenu
                ButtonText="ADOPT OR GET INVOLVED"
                items={[
                  { item: "About AmiciPelosi", link: "/" },
                  { item: "Adopting Pets", link: "/" },
                  { item: "Animal Shelters", link: "/" },
                  { item: "AmiciPelosi Foundation", link: "/" },
                ]}
              />
              <HoverableMenu
                ButtonText="DOGS & PUPPIES"
                items={[
                  { item: "Dog Adoption", link: "/" },
                  { item: "Dog Breeds", link: "/" },
                  { item: "Feeding Your Dog", link: "/" },
                  { item: "Dog Behavior", link: "/" },
                  { item: "Dog Health & Wellness", link: "/" },
                  { item: "Dog Training", link: "/" },
                  { item: "Other Dog Information", link: "/" },
                ]}
              />
              <HoverableMenu
                ButtonText="CATS & KITTENS"
                items={[
                  { item: "Cat Adoption", link: "/" },
                  { item: "Cat Breeds", link: "/" },
                  { item: "Feeding Your Cat", link: "/" },
                  { item: "Cat Behavior", link: "/" },
                  { item: "Cat Health & Wellness", link: "/" },
                  { item: "Cat Training", link: "/" },
                  { item: "Other Cat Information", link: "/" },
                ]}
              />
              <HoverableMenu
                ButtonText="OTHER TYPES OF PETS"
                items={[
                  { item: "Birds", link: "/" },
                  { item: "Exotic Pets", link: "/" },
                  { item: "Guinea Pigs", link: "/" },
                  { item: "Horses", link: "/" },
                  { item: "Rabbits", link: "/" },
                  { item: "Reptiles", link: "/" },
                  { item: "Small & Furry Pets", link: "/" },
                ]}
              />
            </>
          ) : (
            <Box
              style={{
                backgroundColor: "#17B169",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <ListItem>
                  <ListItemText>
                    <Typography style={{ fontSize: "18px", fontWeight:" bold" }}>
                      ALL ABOUT PETS
                    </Typography>
                  </ListItemText>
                  <ListItemIcon>
                    <ArrowDropDownIcon style={{color:"#FFF"}} fontSize="large" color="primary" />
                  </ListItemIcon>
                </ListItem>
              </Box>
            </Box>
          )}
        </Stack>
      </AppBar>
    </Box>
  );
});

CustomAppBar.displayName = "CustomAppBar";
