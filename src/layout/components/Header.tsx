import { memo } from "react";
import { NavLink } from "react-router-dom";

import headerEmblem from "../../shared/assets/header-images/LOGOTYPE – BILETICK.svg";
import tvFill from "../../shared/assets/header-images/tv-2-fill.svg";
import tabletLine from "../../shared/assets/header-images/tablet-line.svg";
import couponLine from "../../shared/assets/header-images/coupon-3-line.svg";
import searchLine from "../../shared/assets/header-images/search-line.svg";

const Header = () => {
  return (
    <div>
      <header className="container mx-auto">
        <div className="flex justify-between items-center h-[80px]">
          <div>
            <NavLink to={"/"}>
              <img src={headerEmblem} alt="" />
            </NavLink>
          </div>

          <div className="flex gap-6">
            <NavLink to={""} className={"flex flex-col items-center"}>
              <img src={tvFill} alt="" />
              <h2 className="text-[#C61F1F]">Home</h2>
            </NavLink>
            <NavLink to={"/movie"} className={"flex flex-col items-center"}>
              <img src={tabletLine} alt="" />
              <h2 className="text-[#A1A1A1]">Movie</h2>
            </NavLink>
            <NavLink to={""} className={"flex flex-col items-center"}>
              <img src={couponLine} alt="" />
              <h2 className="text-[#A1A1A1]">Chiptalar</h2>
            </NavLink>
            <NavLink to={""} className={"flex flex-col items-center"}>
              <img src={searchLine} alt="" />
              <h2 className="text-[#A1A1A1]">Search</h2>
            </NavLink>
          </div>

          <div className="flex items-center gap-[20px]">
            <div className="w-[92px] h-[48px] bg-[#1D1D1D80] rounded-[12px] text-white flex justify-center items-center">
              <select name="" id="">
                <option value="rus">🇷🇺 Ру</option>
                <option value="uz">🇺🇿 Uz</option>
                <option value="eng">🇺🇸 En</option>
              </select>
            </div>
            <div>
              <button className="w-[180px] h-[56px] rounded-[12px] bg-[#C61F1F] font-medium text-[16px] space-[1%] text-white cursor-pointer">
                Войти
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default memo(Header);
