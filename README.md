# Black Piano Assignment 2021

Black Piano Assignment 2021 for frontend developer (ReacctJS)

# Packages Used

react : "^17.0.2"

dotenv : To make provision to add .env file to store the api_key

react-router : To make provision of routes in the application

react-router-dom : To make provision of routes in the application

react-js-pagination : To make provision of pagination

react-datepicker: To make provision for date selection in search criteria


# Steps to run the project

1. git clone https://github.com/Niranjan2016/black-piano-assignment-2021.git
2. cd black-piano-assignment-2021/

# API used

Following New York Time Movies review API has been used to build this project

NYT API - https://developer.nytimes.com/

Please do create a account on NYT API and procure an API Key which is required to run this project.

Once you have the API Key do create an .env file in root folder and add the following items to .env file

REACT_APP_SECRET_CODE= Your NYT API Key
   
REACT_APP_API_BASE_URL=https://api.nytimes.com/svc/movies/v2/reviews/

3. npm install

# Application walkthrough

This application has two main parts

1. Listing movies from NYT Movies reviews list.
2. Search specific movie(s) based on search criterias

## Listing movies from NYT Movies reviews list.

   In this section I have provided a button which will pull the first 20 movie reviews and load them in the table below. Here we can use pagination to check next list of movies.
   The table will hold the following information about the movies listed.
   a. Name & Movie poster
   b. Publication Date
   c. Opening Date
   d. MPAA Rating (if available)
   e. Critics Pick
   f. Review Link (This will open the original NYT movie review page once clicked )
   
   
## Search specific movie(s) based on search criterias

   In this page there is provision made to search a movie from the reviewed movies list based on following criterias
   a. Search Text : this will search the entered text in movie name, review text, and review summary
   b. Publication Date : this is a range of dates based on which it will search the movies having the publication date falling in between the selected dates.
   c. Reviewed By : This will search the list of reviews done by the name of the reviewer searched.(Note : the name of the reviewer needs to be full name e.g. Nicolas Rapold / Ben Kenigsberg)
   d. Opening Date : this is a range of dates based on which it will search the movies having the opening date falling in between the selected dates.
