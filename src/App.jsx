import BannerContainer from "./Component/Banner/Banner Container/BannerContainer";
import HeaderContainer from "./Component/Header/Header Container/HeaderContainer";
import IconStrip from "./Component/Icon Strip/IconStrip";
import { ConcernCard } from "./Component/Product Category/Concern/ConcernCard";
import { productItem } from "./Component/Product Category/Product/ProductCard";
import concernLogo from "./assets/Product Cateogry/Concern/logo.avif";
import productLogo from "./assets/Product Cateogry/Product/logo.avif";

import {
  firstStrip,
  secondStrip,
} from "./Component/Icon Strip/IconStripDetails";
import ProductCategory from "./Component/Product Category/ProductCategory";
import Needed from "./Component/Needed/Needed";

function App() {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <IconStrip firstStrip={firstStrip} />
      <ProductCategory
        card={ConcernCard}
        name="Shob by Concern"
        logo={concernLogo}
      />
      <Needed />
      <ProductCategory
        card={productItem}
        name="Shob by Products"
        logo={productLogo}
      />
    </>
  );
}

export default App;
