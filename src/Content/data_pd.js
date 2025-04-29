function data_pd(dataName) {
    switch (dataName) {
      case "products":
        const products = [
          {
            id: "1",
            name: "Awesome Soft Hat",
            name_category: "Thời trang nam",
            code: "19381-4141",
            image: "https://down-vn.img.susercontent.com/file/08af1dced957a91934d9f96947dccf9c",
            price: "788.00",
            old_price: "829.00",
          },
          {
            id: "2",
            name: "Ergonomic Concrete Computer",
            name_category: "Thời trang nam",
            code: "52634-1797",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xSP-5hVr-jB_sDqdJvFel1CQrXOIVBkBCw&s",
            price: "698.00",
            old_price: "0.00",
          },
          {
            id: "3",
            name: "Ergonomic Fresh Salad",
            name_category: "Thời trang nam",
            code: "39873-7574",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xSP-5hVr-jB_sDqdJvFel1CQrXOIVBkBCw&s",
            price: "685.00",
            old_price: "740.00",
          },
          {
            id: "4",
            name: "Intelligent Granite Pants",
            name_category: "Thời trang nam",
            code: "81541",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xSP-5hVr-jB_sDqdJvFel1CQrXOIVBkBCw&s",
            price: "13.00",
            old_price: "729.00",
          },
          {
            id: "5",
            name: "Generic Metal Salad",
            name_category: "Thời trang nữ",
            code: "23481",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAZEJkNGG0rIe2IIKMdfS2vDJ5nGqYii9xw&s",
            price: "322.00",
            old_price: "475.00",
          },
          {
            id: "6",
            name: "Sleek Concrete Car",
            name_category: "Thời trang nữ",
            code: "86114-2477",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAZEJkNGG0rIe2IIKMdfS2vDJ5nGqYii9xw&s",
            price: "691.00",
            old_price: "0.00",
          },
          {
            id: "7",
            name: "Unbranded Rubber Tuna",
            name_category: "Thời trang nữ",
            code: "33486",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAZEJkNGG0rIe2IIKMdfS2vDJ5nGqYii9xw&s",
            price: "856.00",
            old_price: "2200.00",
          },
          {
            id: "8",
            name: "Handmade Metal Towels",
            name_category: "Thời trang nữ",
            code: "49368",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAZEJkNGG0rIe2IIKMdfS2vDJ5nGqYii9xw&s",
            price: "90.00",
            old_price: "0.00",
          },
          {
            id: "9",
            name: "Unbranded Fresh Chicken",
            name_category: "Thời trang nữ",
            code: "56232-8101",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAZEJkNGG0rIe2IIKMdfS2vDJ5nGqYii9xw&s",
            price: "760.00",
            old_price: "900.00",
          },
          {
            id: "10",
            name: "Generic Wooden Cheese",
            name_category: "Thời trang nữ",
            code: "69081-5706",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAZEJkNGG0rIe2IIKMdfS2vDJ5nGqYii9xw&s",
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
  