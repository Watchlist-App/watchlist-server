amazon = require('amazon-product-api');

var awsId = process.env.AWS_ID;
var awsSecret = process.env.AWS_SECRET;
var awsTag = process.env.AWS_TAG;

var client = amazon.createClient({
    awsId: awsId,
    awsSecret: awsSecret,
    awsTag: awsTag
});


module.exports = {

  'dvds': function(req, res){
    var title = "";
    title = req.param('title');

    client.itemSearch({
      keywords: title,
      searchIndex: 'DVD',
      responseGroup: 'ItemAttributes,Offers,Images'
    }).then(function(results){
      return res.send(results);
    }).catch(function(error){
      return res.send(error);
    });

  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AmazonController)
   */
  _config: {}

};
