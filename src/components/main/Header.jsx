import React from "react";
import {
  XLogo,
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
} from "@phosphor-icons/react";
import { Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <div className="bg-blue text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <p className="hidden md:block text-body-small">
          Welcome to the climson e-coommrce site
        </p>

        <div className="px-2 md:px-0 flex items-center gap-5">
          <div className="flex items-center gap-2">
            <p>Follow us on</p>
            <a href="">
              <XLogo size={16} />
            </a>
            <a href="">
              <FacebookLogo size={16} />
            </a>
            <a href="">
              <InstagramLogo size={16} />
            </a>
            <a href="">
              <PinterestLogo size={16} />
            </a>
          </div>
          <hr />
          <div className="flex items-center gap-4">
            <div className="relative inline-block text-left">
              <Dropdown
                label="ENG"
                inline
                className="bg-white border-none rounded-none mb-10"
              >
                <Dropdown.Item className="bg-gray text-blue">SPN</Dropdown.Item>
                <Dropdown.Item className="bg-gray text-blue">JPN</Dropdown.Item>
              </Dropdown>
            </div>
            <div className="relative inline-block text-left">
              <Dropdown
                label="USD"
                inline
                className="bg-white border-none rounded-none mb-10"
              >
                <Dropdown.Item className="bg-gray text-blue">INR</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
