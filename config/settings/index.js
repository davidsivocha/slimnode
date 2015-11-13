/*
 * Defines the various settings as used by Syte
 */

var settings = {};

settings.sitename = "The DaveZilla Blog";
settings.url = "http://osirisapp.com:8080/"
settings.development = true; //use true for development, false for productions
if(settings.development) {
    settings.port = 8080;
} else {
    settings.port = 80
}

module.exports = settings;
