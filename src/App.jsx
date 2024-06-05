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
import ProductContainer from "./Component/Product Item Container/Product Container/ProductContainer";
import { Honey } from "./Component/Product Item Container/Product Items/Honey";
import { Oil } from "./Component/Product Item Container/Product Items/Oil";
import { Ghee } from "./Component/Product Item Container/Product Items/Ghee";

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
      <ProductContainer
        title={"Pure Honey"}
        subtitle={
          "Bee-produced, unprocessed honey from a farm, pure and natural"
        }
        product={Honey}
      />
      <ProductContainer
        title={"Cold Pressed Cooking Oils"}
        subtitle={
          "Cold-pressed, natural cooking oils sourced from farm ingredients for healthier cuisine."
        }
        product={Oil}
      />
      <ProductContainer
        title={"Bilona A2 Ghee"}
        subtitle={"Pure, farm-sourced, made through traditional method."}
        product={Ghee}
      />
    </>
  );
}

export default App;
