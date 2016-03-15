// Divide all of your modules in different files and
// require them here
module.exports = function(app) {
    require('./homeRoute')(app);
    require('./createProfileRoute')(app);
    require('./captureFaceRoute')(app);
    require('./mirrorRoute')(app);    
};
