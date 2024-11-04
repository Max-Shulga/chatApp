import { useThemeContext } from "@/theme/ThemeContextProvider";
import { ReactElement } from "react";

function TableBodySkeleton(): ReactElement {
  const { mode } = useThemeContext();
  return (
    <tr
      className={`absolute inset-0 flex items-center justify-center
                bg-opacity-50 backdrop-blur-sm z-10 `}
    >
      <td className="flex space-x-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <span
            key={index}
            className={`h-[50px] w-full border-b py-4 px-2 pr-3 ${
              mode === "light" ? "border-[#D5D7DB]" : "border-[#414752]"
            } animate-pulse`}
          ></span>
        ))}
      </td>
    </tr>
  );
}
export default TableBodySkeleton;
