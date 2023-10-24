import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const ContactInfoSec = () => {
  return (
    <>
      <div>
        <div className="pl-12 pt-20">
          <h1 className="text-3xl font-semibold ">
            Looking Forward to Hear From You
          </h1>
          <p className="font-sans w-[450px] text-base text-slate-500 mt-4 leading-7">
            Contact sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="pl-10 pt-6 flex flex-wrap space-x-6">
          <div>
            <LocationOnOutlinedIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-semibold">Address</h2>
            <p className=" font-sans mt-3">
              195 Broaddus Maple Court Avenue, United States of America
            </p>
          </div>
        </div>

        <div className="pl-10 pt-6 flex flex-wrap space-x-6">
          <div>
            <PhoneInTalkOutlinedIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className=" font-sans mt-3">+146-4567890</p>
          </div>
        </div>

        <div className="pl-10 pt-6 flex flex-wrap space-x-6">
          <div>
            <MailOutlineOutlinedIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="mt-1">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className=" font-sans mt-3">info@example.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfoSec;
