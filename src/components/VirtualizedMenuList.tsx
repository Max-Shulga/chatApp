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
  const { options, children, maxHeight = 350, getValue } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * 35;
  const childrenArray = React.Children.toArray(children);

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }): ReactNode => <div style={style}>{childrenArray[index]}</div>;

  return (
    <List
      height={maxHeight}
      itemCount={childrenArray.length}
      itemSize={52}
      initialScrollOffset={initialOffset}
      width="100%"
      className="menu-container first:h-[350px]"
    >
      {Row}
    </List>
  );
}
export default VirtualizedMenuList;
