import React, { useState } from "react";
import classes from "./Search.module.css";
import Aux from "../../hoc/Aux/Aux";
import DatePicker from "react-datepicker";
import Button from "../../Components/UI/Button/Button";
import SearchResults from "./SearchResults/SearchResults";
require("../../Assets/css/react-datepicker.module.css");

const api_key = process.env.REACT_APP_SECRET_CODE;
const base_url = process.env.REACT_APP_API_BASE_URL;

const search = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isDataLoading, setIsDataLoadingState] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openingdate, setOpeningdateState] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openingdate1, setOpeningdate1State] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [publicationdate, setPublicationdateState] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [publicationdate1, setPublicationdate1State] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchquery, setSearchQueryState] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reviewby, setReviewByState] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [moviesList, setMoviesListState] = useState([]);

  const searchClickedHandler = () => {
    setIsDataLoadingState(true);
    setOpeningdateState(null);
    setOpeningdate1State(null);
    setPublicationdateState(null);
    setPublicationdate1State(null);
    setSearchQueryState(null);
    setReviewByState(null);
    setMoviesListState(null);
    let params = "api-key=" + api_key;
    params = params + "&order=by-opening-date";
    if (searchquery) {
      params = params + "&query=" + searchquery.trim();
    }
    if (reviewby) {
      params = params + "&reviewer=" + reviewby.trim();
    }
    if (openingdate && openingdate1) {
      let d = new Date(openingdate);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
      let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      let d1 = new Date(openingdate1);
      let ye1 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d1);
      let mo1 = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d1);
      let da1 = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d1);
      params =
        params +
        "&opening-date=" +
        ye +
        "-" +
        mo +
        "-" +
        da +
        ":" +
        ye1 +
        "-" +
        mo1 +
        "-" +
        da1;
    }
    if (publicationdate && publicationdate1) {
      let d = new Date(publicationdate);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
      let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      let d1 = new Date(publicationdate1);
      let ye1 = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d1);
      let mo1 = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d1);
      let da1 = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d1);
      params =
        params +
        "&publication-date=" +
        ye +
        "-" +
        mo +
        "-" +
        da +
        ":" +
        ye1 +
        "-" +
        mo1 +
        "-" +
        da1;
    }
    fetch(base_url + "search.json?" + params)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.results !== null) {
            setMoviesListState([...result.results]);
          }
          setIsDataLoadingState(false);
          setOpeningdateState(null);
          setOpeningdate1State(null);
          setPublicationdateState(null);
          setPublicationdate1State(null);
          setSearchQueryState(null);
          setReviewByState(null);
        },
        (error) => {
          //   this.setState({
          //     isFetchingData: false,
          //     error,
          //   });
        }
      );
  };

  return (
    <Aux>
      <div className={classes.filter}>
        <div className={classes.label}>
          Search Text (text from name of movie)
        </div>
        <div className={classes.separator}>:</div>
        <div className={classes.inputItem}>
          <input
            type="text"
            name="searchQuery"
            onChange={(event) => {
              setSearchQueryState(event.target.value);
            }}
          />
        </div>

        <div className={classes.label}>
          Publication Date (e.g. : 2020-01-01:2021-03-12)
        </div>
        <div className={classes.separator}>:</div>
        <div className={classes.dateRange}>
          <DatePicker
            selected={publicationdate}
            onChange={(date) => setPublicationdateState(date)}
          />
          <DatePicker
            selected={publicationdate1}
            onChange={(date) => setPublicationdate1State(date)}
          />
        </div>
        <div className={classes.label}>
          Review by (full name of the reviewer)
        </div>
        <div className={classes.separator}>:</div>
        <div className={classes.inputItem}>
          <input
            type="text"
            name="reviewby"
            value={reviewby}
            onChange={(event) => setReviewByState(event.target.value)}
          />
        </div>
        <div className={classes.label}>
          Opening Date (e.g. : 2020-01-01:2021-03-12)
        </div>
        <div className={classes.separator}>:</div>
        <div className={classes.dateRange}>
          <DatePicker
            selected={openingdate}
            onChange={(date) => setOpeningdateState(date)}
          />
          <DatePicker
            selected={openingdate1}
            onChange={(date) => setOpeningdate1State(date)}
          />
        </div>
        <div className={classes.btnDiv}>
          <Button btnType="Success" clicked={searchClickedHandler}>
            Search
          </Button>
        </div>
      </div>
      <SearchResults
        moviesList={moviesList}
        isDataLoading={isDataLoading}
      ></SearchResults>
    </Aux>
  );
};

export default search;
