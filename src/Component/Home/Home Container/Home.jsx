import BannerContainer from "../Home Components/Banner/Banner Container/BannerContainer";
import IconStrip from "../Home Components/Icon Strip/IconStrip";
import {
  firstStrip,
  secondStrip,
} from "../Home Components/Icon Strip/IconStripDetails";
import Needed from "../Home Components/Needed/Needed";
import { ConcernCard } from "../Home Components/Product Category/Concern/ConcernCard";
import ProductCategory from "../Home Components/Product Category/ProductCategory";
import concernLogo from "../../../assets/Product Cateogry/Concern/logo.avif";
import productLogo from "../../../assets/Product Cateogry/Product/logo.avif";
import { productItem } from "../Home Components/Product Category/Product/ProductCard";
import ProductContainer from "../Home Components/Product Item Container/Product Container/ProductContainer";
import { Honey } from "../Home Components/Product Item Container/Product Items/Honey";
import { Oil } from "../Home Components/Product Item Container/Product Items/Oil";
import { Ghee } from "../Home Components/Product Item Container/Product Items/Ghee";
import WhyFarmNaturelle from "../Home Components/Why Farm Naturelle/WhyFarmNaturelle";
import { Juice } from "../Home Components/Product Item Container/Product Items/Juice";
import Gift from "../Home Components/Gift Container/Gift";
import Review from "../Home Components/Review/Review";
import WelcomeSection from "../Home Components/Welcome Section/WelcomeSection";
import AmazonReview from "../Home Components/Amazon Review/AmazonReview";
import { CardDetails } from "../Home Components/Happy Customers/CustomerCard";
import Instagram from "../Home Components/InstagramSection/Instagram";
import {
  firstSection,
  secondSection,
} from "../Home Components/InstagramSection/InstagramCard";
import HappyCustomer from "../Home Components/Happy Customers/HappyCustomer";

function Home() {
  return (
    <>
      <BannerContainer />;
      <IconStrip Strip={firstStrip} />
      <ProductCategory
        card={ConcernCard}
        name="Shob by Concern"
        logo={concernLogo}
      />
      <Needed />
      <ProductCategory
        card={productItem}
        name="Shop by Product"
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

export default Home;
