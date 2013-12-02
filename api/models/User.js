module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    zipcode: {
      type: 'string',
      maxLength: 6,
      minLength: 4
    },

    lists: {
      type: 'array',
      defaultsTo:[
        {title: "watchlist", movies:[]},
        {title: "favorites", movies:[]},
        {title: "watched", movies:[]}
      ]
    }

  }

};

