/*
 * Defines the various settings as used by Syte
 */

var settings = {};

settings.sitename = "The DaveZilla Blog";
settings.url = "http://osirisapp.com:8080/"
settings.development = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production');
settings.development ? settings.port = 8080 : settings.port = 80;

module.exports = settings;
