module.exports = {

  'create': function(req, res) {

    var title = req.param('title');
    var userId = req.param('userId');

    User.find(userId).exec(function (err, user) {

      if (err) return res.send(err,500);

      if (!user) return res.send("User does not exist", 404);
      if (!user[0].lists) return res.send("User does not exist", 404);

      for (var index in user[0].lists){
        if (user[0].lists[index].title == title) return res.send("List already exist", 403);
      }

      user[0].lists.push({title: title, movies: []});

      user[0].save(function (err) {
        if (err) return res.send(err,500);
        res.json(user);
      });

    });

  },

  'addMovie': function(req, res) {

    var listTitle = req.param('listTitle');
    var userId = req.param('userId');
    var movieId = parseInt(req.param('movieId'));

    User.find(userId).exec(function (err, user) {

      if (err) return res.send(err,500);

      if (!user) return res.send("User does not exist", 404);
      if (!user[0]) return res.send("User does not exist", 404);
      if (!user[0].lists) return res.send("List does not exist", 404);

      for (var index in user[0].lists){
        if (user[0].lists[index].title == listTitle){
          if (user[0].lists[index].movies.indexOf(movieId) > -1){
            return res.send("Movie already in list", 403);
          } else{
            user[0].lists[index].movies.push(movieId);
            break;
          }
        }
      }


      user[0].save(function (err) {
        if (err) return res.send(err,500);
        res.json(user);
      });

    });

  },

  _config: {}
};
