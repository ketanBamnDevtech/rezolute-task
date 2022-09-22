## System Requirements
- NodeJs v14 or above

# Technologies:
- ReactJs
- Styled Components
- Typescript


# Details for setup: 
## Steps for setup:
> git clone https://github.com/ketanBamnDevtech/rezolute-task.git
> cd rezolute-task
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
3. Used react functional components 
4. Used Hooks:
- useState
- useEffect
- useParams
- useCallback  

# Application folder structure:
> src:
- pages
- components
- types
- utils: 
    -- api : for api's
    -- styles : for styles
    -- Files: colors & formatter

- Created seperate folder for types & styles.

# Error handling
- callback & errorhandler function for error handling and response.
- react-tostify for api's success/error. notification.

# Responsive for mobile , tablet & desktop.
