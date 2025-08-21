import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Clapperboard, Heart, House, Search } from "lucide-react";

import headerEmblem from "../../shared/assets/header-images/LOGOTYPE – BILETICK.svg";

const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between items-center h-[80px]">
        <div>
          <NavLink to={"/"}>
            <img src={headerEmblem} alt="Biletick logo" />
          </NavLink>
        </div>

        <div className="flex gap-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex flex-col gap-[2px] items-center ${
                isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
              }`
            }
          >
            <House />
            <h2 className="text-[15px]">Home</h2>
          </NavLink>

          <NavLink
            to={"/movie"}
            className={({ isActive }) =>
              `flex flex-col gap-[2px] items-center ${
                isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
              }`
            }
          >
            <Clapperboard />
            <h2 className="text-[15px]">Movie</h2>
          </NavLink>

          <NavLink
            to={"/like"}
            className={({ isActive }) =>
              `flex flex-col gap-[2px] items-center ${
                isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
              }`
            }
          >
            <Heart />
            <h2 className="text-[15px]">Like</h2>
          </NavLink>

          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              `flex flex-col gap-[2px] items-center ${
                isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
              }`
            }
          >
            <Search />
            <h2 className="text-[15px]">Search</h2>
          </NavLink>
        </div>

        <div className="flex items-center gap-[20px]">
          <div className="w-[92px] h-[48px] bg-[#1D1D1D80] rounded-[12px] text-white flex justify-center items-center">
            <select>
              <option value="rus">🇷🇺 Ру</option>
              <option value="uz">🇺🇿 Uz</option>
              <option value="eng">🇺🇸 En</option>
            </select>
          </div>
          <div>
            <button className="w-[180px] h-[56px] rounded-[12px] bg-[#C61F1F] font-medium text-[16px] text-white cursor-pointer">
              Войти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
