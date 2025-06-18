import useKeyboard from "@/hooks/useKeyboard";
import useClickOutside from "@/hooks/useClickOutside";
import FilterIcon from "@/assets/icons/filter.svg?react";
import LogoutIcon from "@/assets/icons/logout.svg?react";
import ThemedIcon from "@/components/ThemedIcon";
import {ReactElement} from "react";
import StyledContainer from "@/components/StyledContainer";
import HoverEffectBox from "@/components/HoverEffectBox";
import {useNavigate} from "react-router";
import RouteNames from "@/routes/routes-names";
import useAuth from "@/hooks/useAuth";

type UserMenuPopuprops = {
    onClose: () => void; className?: string;
};

function UserMenuPopup({
                           className, onClose,
                       }: UserMenuPopuprops): ReactElement {
    useKeyboard(onClose, "Escape");
    const navigate = useNavigate();
    const {logout} = useAuth()
    const ref = useClickOutside(() => {
        onClose();
    });
    const handleLogOut = (): void => {
        logout()
        navigate(RouteNames.SIGN_IN, {replace: true});
    };
    return (<div ref={ref} className={`${className} w-full px-4 rounded-2`}>
        <StyledContainer
            className='className="flex flex-col gap-0 rounded-2 border border-gray-200 shadow-drop w-full '>
            <HoverEffectBox className="w-full h-full p-3 rounded-2">
                <button className="flex flex-row py-1 w-full gap-2">
                    <ThemedIcon icon={<FilterIcon/>}/>
                    <p>Filter presets</p>
                </button>
            </HoverEffectBox>
            <div className="px-2 w-full">
                <div className={"border-t h-[1px] w-full"}/>
            </div>
            <HoverEffectBox className="w-full h-full p-3  rounded-2">
                <button
                    className="flex flex-row py-1 w-full gap-2"
                    onClick={handleLogOut}
                >
                    <ThemedIcon icon={<LogoutIcon/>}/>
                    <p>Logout</p>
                </button>
            </HoverEffectBox>
        </StyledContainer>
    </div>);
}

export default UserMenuPopup;
