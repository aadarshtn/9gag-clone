import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    const { data } = this.props;
    const dark = data.nightMode;
    return (
      <div className="sidebar">
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src={dark ? "https://www.flaticon.com/premium-icon/icons/svg/2550/2550287.svg" : "https://www.flaticon.com/premium-icon/icons/svg/2550/2550418.svg"}
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Hot</h4>
          </div>
          <div className="sidebar-tile-right">
            <a className="more-options-hot-only"></a>
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/44/44499.svg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Trending</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/992/992700.svg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Fresh</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/60/60800.svg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Boards</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/254/254638.svg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Get 9GAG app</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <h5 className="sidebar-headings">POPULAR</h5>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Funny</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557297099.4728_VeSAvU_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">NSFW</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286922.3692_aWySaZ_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Girl</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310702.1267_UgysAp_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">WTF</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310356.2625_y8EVa2_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Anime & Manga</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1481541784.8502_e8ARAR_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Random</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Animals</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557217995.2799_bYQyJU_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Awesome</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557311278.4297_UNEHy6_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Car</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557399125.5971_HYGaTE_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Comic & Webtoon</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216678.2404_U2EHEM_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Cosplay</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1601435242.0864_EhY7Ym_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Cyberpunk 2077</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286928.6604_uTYgug_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Gaming</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216707.0007_ESESyM_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Meme</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286889.2504_mEVy2A_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Politics</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <h5 className="sidebar-headings">SECTIONS</h5>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310356.2625_y8EVa2_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Anime & Manga</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1481541784.8502_e8ARAR_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Random</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Animals</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557217995.2799_bYQyJU_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Awesome</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557311278.4297_UNEHy6_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Car</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
        <div className={dark? "sidebar-tile-dark" : "sidebar-tile"}>
          <div className={dark ? "sidebar-tile-left dark" : "sidebar-tile-left"}>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557399125.5971_HYGaTE_100x100.jpg"
              alt="hot-icon"
              className="small-icon"
            ></img>
            <h4 className="sidebar-tile-label">Comic & Webtoon</h4>
          </div>
          <div className="sidebar-tile-right">
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
