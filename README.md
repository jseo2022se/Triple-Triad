# Triple Triad Searcher


## Description

Triple Triad Searcher is a card lookup application for the card mini-game Triple Triad, which is available in Final Fantasy XIV. It allows users to create their own accounts and add or remove cards to their list, and also features more in-depth information regarding the cards.

The API used in this project to get the card data is available at: "https://triad.raelys.com/".


## Usage

This application is for people who play Final Fantasy XIV and are more interested in 
looking up cards for Triple-Triad.


## Technologies 

Mongoose, MongoDB Atlas, Express, ReactJS, React-Bootstrap, Redux Toolkit, NodeJS


## Technical Challenges

Some technical challenges that were encountered during coding:

- Designing the model schema (one-to-many relationship)
    - One feature that was planned did not end up being implemented (i.e. creating decks)
- Working on some of the CRUD operations 
    - Updating the User and Card model
- RTK Query for the API fetch


## Future Implementations

- Incorporate a deck data model 
- Establish a better data model relationship
- Have more CRUD operations, such as updating more than user information for both User and Card models
- Make more use of Redux (RTK Query)


## Credits

- All credits regarding the API go to: Raelys Skyborn of Behemoth | Powered by [Saint Coinach](https://github.com/ufx/SaintCoinach) |


## Trademark

- FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
  FINAL FANTASY XIV © SQUARE ENIX CO., LTD.


## Deployment

- The React app is deployed through Netlify and is live through this URL: 

## License

[MIT]
(https://choosealicense.com/licenses/mit/)