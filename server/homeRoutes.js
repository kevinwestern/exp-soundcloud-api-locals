var rest = require('restler'),
    redis = require('redis'),
    db = redis.createClient();

module.exports = function(app){

  app.get('/api/homes', function(req, res) {
    var count = 0, checks = 0, poll = 0;

    db.get('users', function(err, result) {
      if (result) {
        res.end(result);
      } else {
        getUsers();
      }
    });

    var getUsers = function() {
      // ask for users
      rest.get('http://api.soundcloud.com/users.json', {
        query: {
          client_id: 'ad6e6c3a3999d30aa2a703e6d72cce4f',
          q: 'San Francisco',
          order: 'followers_count'
        }
      }).on('complete', function(users) {
        // ask for each user's tracks
        users.forEach(function(user) {
          count++;
          rest.get('http://api.soundcloud.com/users/' + user.id + '/tracks.json', {
            query: {
              client_id: 'ad6e6c3a3999d30aa2a703e6d72cce4f',
              limit: 3
            }}).on('complete', function(tracks) {
              user.tracks = tracks;
              count--;
              if (count === 0) {
                db.set('users', JSON.stringify(users), function() {
                  res.end(JSON.stringify(users));
                });
              }
            });
        });
      });
    };
  });

  app.get('/api/home/:id', function(req, res) {
    res.send('You hit an ExpressJS route with ' + req.params.id);
  });

  app.post('/api/homes', function(req, res) {
    
  });

  app.put('/api/home/:id', function(req, res) {

  });

  app.delete('/api/home/:id', function(req, res) {

  });

};
