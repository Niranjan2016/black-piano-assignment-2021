import React from "react";
import classes from "./SingleReview.module.css";
import Aux from "../../../../hoc/Aux/Aux";

const SingleReview = (props) => { 
  let data = props.movieData;
  return (
    <Aux>
      <div className={classes["single-review"]}>
        <div className={classes.title}>
          <h2>{data["display_title"]}</h2>
          <h3>{data.headline}</h3>
        </div>
        {data.multimedia && data.multimedia.src ? (
          <div className={classes.picture}>
            <img src={data.multimedia.src} alt="Movie Poster" />
          </div>
        ) : null}
        {data.byline ? (
          <div className={classes.summary}>Review By : {data.byline}</div>
        ) : null}
        {data.summary_short ? (
          <div className={classes.summary}>{data.summary_short}</div>
        ) : null}
        {data.link && data.link.url ? (
          <div className={classes.summary}>
            Read Full Review :{" "}
            <a
              href={data.link.url}
              rel="noreferrer"
              alt="review link"
              target="_blank"
            >
              Click Here
            </a>
          </div>
        ) : null}
        {data.date_updated ? (
          <div className={classes.normal}>
            Review Date :
            {data.date_updated
              ? new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(data.date_updated))
              : "NA"}
          </div>
        ) : null}
        {data.opening_date ? (
          <div className={classes.normal}>
            Opening Date :
            {data.date_updated
              ? new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(data.opening_date))
              : "NA"}
          </div>
        ) : null}
        {data.publication_date ? (
          <div className={classes.normal}>
            Publication Date :
            {data.date_updated
              ? new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(data.publication_date))
              : "NA"}
          </div>
        ) : null}
      </div>
    </Aux>
  );
};

export default SingleReview;
