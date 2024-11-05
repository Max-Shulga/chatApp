import { FixedSizeList as List } from "react-window";
import { MenuListProps } from "react-select";
import React, { ReactElement, ReactNode } from "react";

type VirtualizedMenuListProps<Option, IsMulti extends boolean> = MenuListProps<
  Option,
  IsMulti
> & {
  children: ReactNode;
};

function VirtualizedMenuList<Option, IsMulti extends boolean>(
  props: VirtualizedMenuListProps<Option, IsMulti>,
): ReactElement {
  const { options, children, maxHeight, getValue } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * 48;

  const childrenArray = React.Children.toArray(children);

  return (
    <List
      height={maxHeight}
      itemCount={childrenArray.length}
      itemSize={35}
      initialScrollOffset={initialOffset}
      width="100%"
      className="menu-container first:h-[350px]"
    >
      {({ index }) => (
        <div className="relative text-sm font-medium">
          {childrenArray[index]}
        </div>
      )}
    </List>
  );
}
export default VirtualizedMenuList;
