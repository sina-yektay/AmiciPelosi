import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export const useHoverableMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const router = useRouter();
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    console.log("in");
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    console.log("out");
  };
  return { handleOpenMenu, handleCloseMenu, router, anchorEl };
};
