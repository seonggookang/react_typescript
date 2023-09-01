import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "성구 식당",
  category: " western",
  address: {
    city: "seoul",
    detail: "somewhere",
    zipcode: 1234,
  },
  menu: [
    { name: "potato", price: 2000, category: "pizza" },
    { name: "rose", price: 4000, category: "pasta" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  // 타입을 따로 빼서 만드는게 좋은 이유
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu
        name="cheesepizza"
        category="pizaa"
        // price={8900}
        showBestMenuName={showBestMenuName}
        // Type '{ name: string; category: string; price: number; showBestMenuName: (name: string) => string; }' is not assignable to type 'IntrinsicAttributes & OwnProps'.
        // Property 'showBestMenuName' does not exist on type 'IntrinsicAttributes & OwnProps'
        // -->> 함수좀 props에서 잘 받아오라는 에러.
      />
    </div>
  );
};

export default App;
