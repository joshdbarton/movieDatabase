const movieDatabase = {};

movieDatabase.movies = [
    {name:'The Dark Knight',
     director: 'Christopher Nolan',
     yearReleased: 2008
    },
    {name: 'Inception',
     director: 'Christopher Nolan',
     yearReleased: 2010
    },
    {name: 'Dunkirk',
     director: 'Christopher Nolan',
     yearReleased: 2017
    },
    {name: 'The Big Lebowski',
     director: 'Coen Brothers',
     yearReleased: 1998
    },
    {name: 'O Brother Where Art Thou',
     director: 'Coen Brothers',
     yearReleased: 2000
    },
    {name: 'A Serious Man',
     director: 'Coen Brothers',
     yearReleased: 2009
    },
    {name: 'Clerks',
     director:'Kevin Smith',
     yearReleased: 1994
    },
    {name: 'Dogma',
     director:'Kevin Smith',
     yearReleased: 1999
    },
    {name: 'Star Wars: A New Hope',
     director:'George Lucas',
     yearReleased: 1977
    },
    {name: 'Star Wars; Return of the Jedi',
     director: 'George Lucas',
     yearReleased: 1983
    }
];


function storeLocal (identifier, database) {
    localStorage.setItem([identifier], JSON.stringify(database))
}

storeLocal('movieDatabase', movieDatabase);


