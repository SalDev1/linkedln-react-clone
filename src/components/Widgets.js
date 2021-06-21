import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import "./styles/Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2 className="widgets__headertitle">LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Salman is Back", "Top News - 12089 readers")}
      {newsArticle("Job interviews getting deferred", "2d - 7685 readers")}
      {newsArticle("Google's coming for TikTok", "1d - 6785 readers")}
      {newsArticle("We're running out of chips", "3d - 9876 readers")}
      {newsArticle("Pfizer vaccine approved for 12-15yo", "1w - 76856 readers")}
    </div>
  );
}

export default Widgets;
