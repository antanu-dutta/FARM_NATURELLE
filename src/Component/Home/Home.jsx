import React from "react";
import BannerContainer from "../Banner/Banner Container/BannerContainer";
import IconStrip from "../Icon Strip/IconStrip";
import { firstStrip, secondStrip } from "../Icon Strip/IconStripDetails";
import ProductCategory from "../Product Category/ProductCategory";
import { ConcernCard } from "../Product Category/Concern/ConcernCard";
import { productItem } from "../Product Category/Product/ProductCard";
import concernLogo from "../../assets/Product Cateogry/Concern/logo.avif";
import productLogo from "../../assets/Product Cateogry/Product/logo.avif";
import Needed from "../Needed/Needed";
import ProductContainer from "../Product Item Container/Product Container/ProductContainer";
import { Honey } from "../Product Item Container/Product Items/Honey";
import { Oil } from "../Product Item Container/Product Items/Oil";
import { Ghee } from "../Product Item Container/Product Items/Ghee";
import WhyFarmNaturelle from "../Why Farm Naturelle/WhyFarmNaturelle";
import { Juice } from "../Product Item Container/Product Items/Juice";
import Gift from "../Gift Container/Gift";
import Review from "../Review/Review";
import WelcomeSection from "../Welcome Section/WelcomeSection";
import AmazonReview from "../Amazon Review/AmazonReview";
import { CardDetails } from "../Happy Customers/CustomerCard";
import HappyCustomer from "../Happy Customers/HappyCustomer";
import { firstSection, secondSection } from "../InstagramSection/InstagramCard";
import Instagram from "../InstagramSection/Instagram";
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
