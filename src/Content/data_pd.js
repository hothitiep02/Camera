function data_pd(dataName) {
    switch (dataName) {
      case "products":
        const products = [
          {
            id: "1",
            name: "Awesome Soft Hat",
            name_category: "Thời trang nam",
            code: "19381-4141",
            image: "https://lorempixel.com/640/480/cats",
            price: "788.00",
            old_price: "829.00",
          },
          {
            id: "2",
            name: "Ergonomic Concrete Computer",
            name_category: "Thời trang nam",
            code: "52634-1797",
            image: "https://lorempixel.com/640/480/technics",
            price: "698.00",
            old_price: "0.00",
          },
          {
            id: "3",
            name: "Ergonomic Fresh Salad",
            name_category: "Thời trang nam",
            code: "39873-7574",
            image: "https://lorempixel.com/640/480/food",
            price: "685.00",
            old_price: "740.00",
          },
          {
            id: "4",
            name: "Intelligent Granite Pants",
            name_category: "Thời trang nam",
            code: "81541",
            image: "https://lorempixel.com/640/480/abstract",
            price: "13.00",
            old_price: "729.00",
          },
          {
            id: "5",
            name: "Generic Metal Salad",
            name_category: "Thời trang nữ",
            code: "23481",
            image: "https://lorempixel.com/640/480/food",
            price: "322.00",
            old_price: "475.00",
          },
          {
            id: "6",
            name: "Sleek Concrete Car",
            name_category: "Thời trang nữ",
            code: "86114-2477",
            image: "https://lorempixel.com/640/480/transport",
            price: "691.00",
            old_price: "0.00",
          },
          {
            id: "7",
            name: "Unbranded Rubber Tuna",
            name_category: "Thời trang nữ",
            code: "33486",
            image: "https://lorempixel.com/640/480/business",
            price: "856.00",
            old_price: "2200.00",
          },
          {
            id: "8",
            name: "Handmade Metal Towels",
            name_category: "Thời trang nữ",
            code: "49368",
            image: "https://lorempixel.com/640/480/fashion",
            price: "90.00",
            old_price: "0.00",
          },
          {
            id: "9",
            name: "Unbranded Fresh Chicken",
            name_category: "Thời trang nữ",
            code: "56232-8101",
            image: "https://lorempixel.com/640/480/animals",
            price: "760.00",
            old_price: "900.00",
          },
          {
            id: "10",
            name: "Generic Wooden Cheese",
            name_category: "Thời trang nữ",
            code: "69081-5706",
            image: "https://lorempixel.com/640/480/nightlife",
            price: "619.00",
            old_price: "1600.00",
          },
        ];
        return products;
      default:
        return [];
    }
  }
  
  export default data_pd;
  