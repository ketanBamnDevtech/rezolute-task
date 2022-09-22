# Technologies used:
- ReactJs
- Typescript
- Styled Components

# Details for setup: 

## System Requirements
- NodeJs v14 or above

## Steps for setup:
> git clone 
> cd 
> npm install
> npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features Implemented:
### Conatins 2 pages:
1. /
- SearchUser page 
- User can search git gub user 
- can view user github info & repositories in card format
2. /history
- Table-view to store user-search history with search time.
- can revisit particular-user by clicking on name field on the table.
- User can remove/delete by clicking on delete icon/button.

### Other Details:
1. React/Hooks implemented:
- useEffect
- useState 
- useCallback
- useParams

2. Code Structure:
- pages : contains pages
- components : reusable componenets
- utils: contains files & sub-folder :
-- api : for api's
-- styles : for styles
-- Files: colors & formatter
- types: contains types
- Created seperate folder for types & styles , for scalability.

5. Error handling
- callback & error-handler function for error handling and response.
- react-tostify for api's success/error. notification.

6. Responsive
-  responsive for mobile , tablets & desktop.