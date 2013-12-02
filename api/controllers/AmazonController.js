var util = require('util'),
    OperationHelper = require('apac').OperationHelper;

var awsId = process.env.AWS_ID;
var awsSecret = process.env.AWS_SECRET;
var awsTag = process.env.AWS_TAG;

var opHelper = new OperationHelper({
    awsId: awsId,
    awsSecret: awsSecret,
    assocId: awsTag
});

module.exports = {


  'dvds': function(req, res){
    var title = "";
    title = req.param('title');

    opHelper.execute('ItemSearch', {
      'SearchIndex': 'DVD',
      'Keywords': title,
      'ResponseGroup': 'ItemAttributes,Offers, Images'
    }, function(results) {
      var items = results.ItemSearchResponse.Items[0].Item;
      return res.send(items);
    });

  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AmazonController)
   */
  _config: {}

};
