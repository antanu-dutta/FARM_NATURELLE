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
import { Juice } from "./Component/Product Item Container/Product Items/Juice";
import WhyFarmNaturelle from "./Component/Why Farm Naturelle/WhyFarmNaturelle";
import Gift from "./Component/Gift Container/Gift";
import Review from "./Component/Review/Review";
import WelcomeSection from "./Component/Welcome Section/WelcomeSection";
import AmazonReview from "./Component/Amazon Review/AmazonReview";
import HappyCustomer from "./Component/Happy Customers/HappyCustomer";
import { CardDetails } from "./Component/Happy Customers/CustomerCard";
import Instagram from "./Component/InstagramSection/Instagram";
import {
  firstSection,
  secondSection,
} from "./Component/InstagramSection/InstagramCard";

function App() {
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <IconStrip Strip={firstStrip} />
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
      <WhyFarmNaturelle />
      <ProductContainer
        title={"Herbal Juice"}
        subtitle={
          "Pure, Organic herbal juices sourced from farm ingredients has no added sugar."
        }
        product={Juice}
      />
      <Gift />
      <Review />
      <WelcomeSection />
      <AmazonReview />
      <IconStrip Strip={secondStrip} />
      <HappyCustomer CardDetails={CardDetails} />
      <Instagram firstSection={firstSection} secondSection={secondSection} />
    </>
  );
}

export default App;
