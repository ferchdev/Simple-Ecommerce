import { Layout } from "@/components/Layout";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgAbout from "@/assets/images/about-us/about.png";
import imgVision from "@/assets/images/about-us/vision.png";
import Link from "next/link";
import { BannerAbout } from "@/components/BannerAbout";

const AboutUs = () => {
  return (
    <Layout
      title="Simple Ecommerce | About Us"
      description={
        "Simple eCommerce is a dynamic and forward-thinking online retail company dedicated to providing customers with a seamless and enjoyable shopping experience. As an industry leader, we strive to offer a wide range of high-quality products at competitive prices, catering to the diverse needs and preferences of our valued customers."
      }
    >
      <section className="About-Us mt-[93px]">
        <div className="relative">
          <p className="absolute left-0">
            <Link href="/">
              <FontAwesomeIcon icon={faAngleLeft} className="me-[5px]" />
              Home
            </Link>
          </p>
        </div>
        <div className="pt-[90px] md:pt-8">
          <BannerAbout
            title={"ABOUT US"}
            description={
              "Simple eCommerce is a dynamic and forward-thinking online retail company dedicated to providing customers with a seamless and enjoyable shopping experience. As an industry leader, we strive to offer a wide range of high-quality products at competitive prices, catering to the diverse needs and preferences of our valued customers."
            }
            src={imgAbout}
            btnTitle={"CONTACT US"}
          />
          <BannerAbout
            title={"OUR VISION"}
            description={`Our vision at Simple eCommerce is to redefine the online shopping experience by continuously enhancing our platform, expanding our product offerings, and delivering exceptional service. We strive to be the go-to destination for customers seeking convenience, value, and a personalized approach to online retail.
                Join us on our journey as we shape the future of eCommerce, embracing innovation and customer-centricity to create a shopping experience that is simple, enjoyable, and rewarding for everyone.`}
            src={imgVision}
            btnTitle={"GO TO SHOP"}
            orderLast={true}
          />
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
