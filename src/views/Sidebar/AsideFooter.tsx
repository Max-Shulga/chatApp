import {ReactElement, ReactNode, useState} from "react";
import RouteNames from "@/routes/routes-names";
import RssIcon from "@/assets/icons/rss.svg?react";
import ThemedIcon from "@/components/ThemedIcon";
import HoverEffectBox from "@/components/HoverEffectBox";
import UserIcon from "@/assets/icons/user.svg?react";
import {Link} from "react-router-dom";
import IconArrow from "@/assets/icons/arrowDown.svg?react";
import UserMenuPopup from "@/views/Sidebar/UserMenuPopup";
import {Box, styled} from "@mui/material";
import colors from "@/styles/colors.module.scss";
import {userStore} from "@/store/sockets/user.store";

type CustomBoxProps = {
  children: ReactNode;
  className?: string;
};

const CustomBox = styled(Box)<CustomBoxProps>(({ theme }) => ({
  borderColor:
    theme.palette.mode === "light"
      ? colors.lightBackgroundAnswerBackground
      : colors.darkBackgroundAnswerBackground,
}));

function AsideFooter(): ReactElement {
  const [isUserPopupVisible, setIsUserPopupVisible] = useState(false);
  const ToggleUserPopup = (): void => {
    setIsUserPopupVisible((prevState) => !prevState);
  };
  const {user} = userStore.value
  const firstName = user?.firstName ?? "username";



  return (
    <CustomBox className="py-3 border-t border-gray-900 px-4 relative ">
      <HoverEffectBox>
        <Link
          to={RouteNames.UPWORK_FEED}
          className="flex flex-row items-center gap-3 p-3"
        >
          <ThemedIcon icon={<RssIcon />} />
          <p>Upwork feed</p>
        </Link>
      </HoverEffectBox>

      <HoverEffectBox>
        <button
          className="flex flex-row items-center justify-between p-3 w-full"
          onClick={ToggleUserPopup}
        >
          <div className="flex flex-row gap-3">
            <ThemedIcon icon={<UserIcon />} />
            <p>{firstName}</p>
          </div>
          <ThemedIcon icon={<IconArrow />} className="-rotate-90 mr-4" />
        </button>
      </HoverEffectBox>
      {isUserPopupVisible && (
        <UserMenuPopup
          className="absolute top-0 right-0 -translate-y-1/2 "
          onClose={() => setIsUserPopupVisible(false)}
        />
      )}
    </CustomBox>
  );
}
export default AsideFooter;
