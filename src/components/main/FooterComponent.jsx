import React from "react";
import { Footer } from "flowbite-react";
import { Heart } from "@phosphor-icons/react";
import { Tager } from "../common/SmallHelperFunctions";

const FooterComponent = () => {
  const tags = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptop",
    "Mackbook",
    "SSD",
    "Power Bank",
    "Smart TV",
  ];
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto">
        <Footer className="bg-transparent shadow-none">
          <div className="w-full">
            <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
              <div>
                <Footer.LinkGroup col>
                  <h1 className="text-orange text-heading-02">CLICON</h1>
                  <div className="flex flex-col gap-1">
                    <p className="text-body-sm text-gray/50">Customer Supprt</p>
                    <p className="text-body-large">+91 6397544812</p>
                  </div>
                  <p className="text-body-sm text-gray/50">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                  <p className="text-body-sm text-gray/50">
                    shriyanshlohia0@gmail.com
                  </p>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className="text-orange" title="TOP CATEGORY" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Computer & Language</Footer.Link>
                  <Footer.Link href="#">SmartPhone</Footer.Link>
                  <Footer.Link href="#">HeadPhones</Footer.Link>
                  <Footer.Link href="#">Camera and Photo</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Quick Links" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Shop Product</Footer.Link>
                  <Footer.Link href="#">Shooping Cart</Footer.Link>
                  <Footer.Link href="#">WishList</Footer.Link>
                  <Footer.Link href="#">Compare</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="POPULAR TAGS" />
                <Footer.LinkGroup className="gap-2" row>
                  {tags.map((tag, index) => (
                    <Tager name={tag} key={index} />
                  ))}
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </Footer>
      </div>
      <div className="w-full py-3 border-t-2 border-gray/50">
        <p className="text-body-xs text-center text-gray/50 flex items-center justify-center gap-2">
          Made with by{" "}
          <span>
            <Heart size={16} color="#fd3030" weight="fill" />
          </span>
          Shriyansh
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
