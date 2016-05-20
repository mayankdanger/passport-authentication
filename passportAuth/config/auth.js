// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1738935676356827', // your App ID
        'clientSecret'  : '2a061fc3bef6c811c7a8e50c7d14940f', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '870370496606-b1upi5780sat2675rgpk5gt6c7lqnmcn.apps.googleusercontent.com',
        'clientSecret'  : 'sGgelTT-j4LwsUoAS1UXS7my',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};