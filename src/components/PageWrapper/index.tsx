import { FC, PropsWithChildren, memo } from "react";
import { usePageWrapper } from "./index.hooks";
import { Box, Stack } from "@mui/material";
import { CustomAppBar } from "../CustomAppBar";

type PageWrapperProps = { withSideBar?: boolean };

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = memo(
  ({ withSideBar = false, children }) => {
    const {} = usePageWrapper();
    return (
      <Box>
        <Stack>
          <CustomAppBar />
        </Stack>
        <Stack>{children}</Stack>
      </Box>
    );
  }
);

PageWrapper.displayName = "PageWrapper";
