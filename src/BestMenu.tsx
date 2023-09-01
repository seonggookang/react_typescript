import React from "react";
import { Menu } from "./model/restaurant";

// 이걸 아까 만들었자나 거기서 extends로 확장해 오자
// type에서 extends를 쓸 경우 -->> type OwnProps = Menu & {

interface OwnProps extends Omit<Menu, "price"> {
  // name: string;
  // ca tegory: string;
  // price: number;
  showBestMenuName(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({
  name,
  // price,
  category,
  showBestMenuName,
}) => {
  return <div>{name}</div>;
};

export default BestMenu;
