import { ReactElement } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { IconButton } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import HideSideBarIcon from "@/assets/icons/backArrow.svg?react";
import MenuIcon from "@/assets/icons/menu.svg?react";

type HeaderProps = {
  isOpen: boolean;
  onClick: () => void;
};
function Header({ isOpen, onClick }: HeaderProps): ReactElement {
  return (
    <header className="flex flex-row justify-between px-5 py-6 flex-shrink-0">
      <IconButton onClick={onClick}>
        <ThemedIcon icon={isOpen ? <HideSideBarIcon /> : <MenuIcon />} />
      </IconButton>
      <ThemeToggle />
    </header>
  );
}
export default Header;
