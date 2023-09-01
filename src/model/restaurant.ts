//  let data = {
//    name: "성구 식당",
//    category: " western",
//    address: {
//      city: "seoul",
//      detail: "somewhere",
//      zipcode: 1234,
//    },
//    menu: [
//      { name: "potato", price: 2000, category: "pizza" },
//      { name: "rose", price: 4000, category: "pasta" },
//    ],
//  };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipcode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

// 이것만 빼고 사용할래~
export type AddressWithoutZip = Omit<Address, "zipcode">;

// 이것만 사용할래~
export type RestautantOnlyCategory = Pick<Restaurant, "category">;

// T는 RestaurantResponse나 MenuResponse
export type ApiResponse<T> {
	data:T[], // api 호출에 따라 Restaurant Address Menu 뭐가올지 결정됨
  totalPage : number,
  page: number
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
