const express = require('express'),
  morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser'),
  methodOverride = require('method-override');

let topMovies = [
    {
      title: 'Paris, Texas',
      director: 'Wim Wenders'
    },
    {
      title: 'Alice in the Cities',
      director: 'Wim Wenders'
    },
    {
      title: 'The Ballad of Genesis and Lady Jaye',
      director: 'Marie Losier'
    },
    {
        title: 'Dexter',
        director: 'James Manos Jr.'
      },
      {
        title: 'Grey Gardens',
        director: ['Albert Maysles', 'David Maysles'],
      },
      {
        title: 'Twin Peaks',
        director: 'David Lynch'
      },
      {
        title: 'Weird Weekends',
        director: 'Louis Theroux'
      },
      {
        title: 'The Keepers',
        director: 'Ryan White'
      },
      {
        title: 'True Romance',
        director: 'Tony Scott'
      },
      {
        title: 'The White Ribbon',
        director: 'Michael Haneke'
      }
  ];

  // Morgan middleware
  app.use(morgan('common'));
  
  // GET requests
  app.get('/', (req, res) => {
    res.send('Welcome to my movie database!');
  });

  app.get('/secreturl', (req, res) => {
      res.send('This is a secret url with super top-secret content.');
  });

// Replaced with express.static function
//   app.get('/documentation', (req, res) => {                  
//     res.sendFile('public/documentation.html', { root: __dirname });
//   });
  
  app.get('/movies', (req, res) => {
    res.json(topMovies);
  });

  app.get('/director', (req, res) => {                  
    res.json(topMovies);
  });

  // express.static function

  app.use('/documentation.html', express.static('public'));

  //Error handling middleware function

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  app.use(bodyParser.json());
  app.use(methodOverride());
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  // listen for requests
  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });