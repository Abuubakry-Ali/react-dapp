

const Phones =[

{
Id:1,
name:"Apple iPhone  12",
ImgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRi9UH_X6A5bYTwcLMffmafAB0PDEnP9oALwuGwe1oYwyR4XqnxJBDvcjJML8cew-bS98v_3PX&usqp=CAc',
Price:'899.99'
},

{
  Id:2,
  name:"Huawei P30 Pro",
  ImgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmAWajaBhS0CRnSCm9K58p6BbP_LHhCyFqcQrkSN9wONrOPnFx65Y7M8mGwBPT4j1id7CbVtZ&usqp=CAc',
  Price:'899.99'
  },
  {
    Id:3,
    name:"Nokia 7.2",
    ImgUrl:"data:image/jpeg;base64,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",
    Price:'899.99'
    },
    {
      Id:4,
      name:"Samsung Galaxy S21",
      ImgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsoKMkJrRkPVhxXnPHXwioTFvjkuPVC9k2olPhb3rJn1O84x7Aw_XPV_A3KqDDPnD7KjVNwcG&usqp=CAc",
      Price:'899.99'
      }

]

export default Phones;
