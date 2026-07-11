import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {

  // Array
  const productImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10", "https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA", "https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$", "https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png"]
  const productNames = ["The Frostfire Titan Intel pc", "Galaxy S25 Ultra", "BTG Thunder Gaming Headphone", "Galaxy Watch Ultra (2025) (LTE, 4.7 cm)", "GOVO GOLOUD 1000"]
  const prices = ["₹4,20,000", "₹1,09,999", "₹999", "₹59,999", "₹8,415"]

  // Object
  const productData = [
    {
      id: "p1",
      name: "The Frostfire Titan Intel pc",
      price: "₹4,20,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6PKL_G2V5lQvm1_zQrPpT7KIYn5TDoV3rRXyg2veNw&s=10"
    },
    {
      id: "p2",
      name: "Galaxy S25 Ultra",
      price: "₹1,09,999",
      image: "https://images.samsung.com/is/image/samsung/p6pim/us/sm-s938uzbfxaa/gallery/us-galaxy-s25-s938-536276-sm-s938uzbfxaa-548617513?$PD_GALLERY_PNG$"
    },
    {
      id: "p3",
      name: "BTG Thunder Gaming Headphone",
      price: "₹999",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqi-iVwzbVpkv0QCsbBDTy-AvQPCqhA9Mj0AVMKaNIXqoGSRtrT7VT5H_OeqPs3l7fpYKo1QRwZtcW3HZgppicsS-Hjofb5qTcyndHnS2_qYo8hjKJ2F4EwA"
    },
    {
      id: "p4",
      name: "Galaxy Watch Ultra (2025) (LTE, 4.7 cm)",
      price: "₹59,999",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/f2507/gallery/in-galaxy-watch-ultra-2025-l705-sm-l705fzb1ins-thumb-547659878?$Q90_330_330_F_PNG$"
    },
    {
      id: "p5",
      name: "GOVO GOLOUD 1000",
      price: "₹8,415",
      image: "https://govo.life/wp-content/uploads/2025/08/Main-12-1-1024x1024.png"
    }
  ];

  return (
    <>
      <ProductCard
        images={productImages}
        names={productNames}
        prices={prices}
        products={productData}
      />
    </>
  )
}

export default App
