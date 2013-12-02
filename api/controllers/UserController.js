module.exports = {

  'new': function(req, res) {
    return res.view();
  }

  // ':id/list/create': function(req, res) {

  //   var title = req.param('title');
  //   var userId = req.params.id;

  //   User.find(userId).exec(function (err, user) {

  //     if (err) return res.send(err,500);
  //     console.log(req.params);
  //     console.log(req.route.params);

  //     if (!user[0].lists) return res.send("User does not exist", 404);

  //     for (var index in user[0].lists){
  //       if (user[0].lists[index].title == title) return res.send("List already exist", 403);
  //     }

  //     user[0].lists.push({title: title, movies: []});

  //     user[0].save(function (err) {
  //       if (err) return res.send(err,500);
  //       res.json(user);
  //     });

  //   });
  // }


};
