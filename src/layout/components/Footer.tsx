import { memo } from "react";

import footerEmblem from "../../shared/assets/footer-images/EMBLEM.svg";
import googlePlay from "../../shared/assets/footer-images/playmarket.svg";
import appStore from "../../shared/assets/footer-images/appstore.svg";
import fileList from "../../shared/assets/footer-images/filelist.svg";
import shiningLine from "../../shared/assets/footer-images/shining-line.svg";
import faq from "../../shared/assets/footer-images/fag.svg";
import phoneLine from "../../shared/assets/footer-images/phone-line.svg";
import movieLine from "../../shared/assets/footer-images/movie-line.svg";
import clapperBoard from "../../shared/assets/footer-images/clapperboard-line.svg";
import movieLine2 from "../../shared/assets/footer-images/movie-2-line.svg";
import basketballLine from "../../shared/assets/footer-images/basketball-line.svg";
import instagram from "../../shared/assets/footer-images/instagram-line.svg";
import facebook from "../../shared/assets/footer-images/facebook-circle-line.svg";
import youtube from "../../shared/assets/footer-images/youtube-line.svg";

const Footer = () => {
  return (
    <div className="container p-[30px] flex justify-between bg-[#111111] rounded-[12px] mx-auto mt-[80px] mb-[40px] text-[#A1A1A1]">
      <div>
        <img src={footerEmblem} alt="" />
        <div className="mt-[48px]">
          <img src={googlePlay} alt="" />
          <img src={appStore} alt="" className="mt-[8px]" />
        </div>
      </div>
      <div>
        <h4 className="text-white">О нас</h4>
        <div className="flex gap-2 py-2">
          <img src={fileList} alt="" />
          <p>Публичная оферта</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={shiningLine} alt="" />
          <p className="text-[#C61F1F]">Реклама</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={faq} alt="" />
          <p>F.A.Q</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={phoneLine} alt="" />
          <p>Контакты</p>
        </div>
      </div>
      <div>
        <h4 className="text-white">Категории</h4>
        <div className="flex gap-2 py-2">
          <img src={movieLine} alt="" />
          <p>Кино</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={clapperBoard} alt="" />
          <p>Театр</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={movieLine2} alt="" />
          <p>Концерты</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={basketballLine} alt="" />
          <p>Спорт</p>
        </div>
      </div>
      <div>
        <div className="mb-[40px]">
          <h4 className="text-white pb-[20px]">Связаться с нами</h4>
          <strong className="text-[#C61F1F] font-medium text-[20px] ">
            +998 (95) 897-33-38
          </strong>
        </div>
        <div>
          <p className="text-white">Социальные сети</p>
          <div className="flex gap-5 pt-[10px]">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
