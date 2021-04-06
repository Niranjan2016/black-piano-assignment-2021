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
  const [openingdate, setOpeningdateState] = useState(new Date());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openingdate1, setOpeningdate1State] = useState(new Date());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [publicationdate, setPublicationdateState] = useState(new Date());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [publicationdate1, setPublicationdate1State] = useState(new Date());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchquery, setSearchQueryState] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reviewby, setReviewByState] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [moviesList, setMoviesListState] = useState([]);

  const searchClickedHandler = () => {
    setIsDataLoadingState(true);
    let params = "api-key=" + api_key;
    params = params + "&order=by-opening-date";
    if (searchquery) {
      params = params + "&query=" + searchquery.trim();
    }
    if (reviewby) {
      params = params + "&reviewer=" + reviewby.trim();
    }
    fetch(base_url + "search.json?" + params)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.results);
          setMoviesListState([...result.results]);
          setIsDataLoadingState(false);
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
            onChange={(event) => setSearchQueryState(event.target.value)}
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
