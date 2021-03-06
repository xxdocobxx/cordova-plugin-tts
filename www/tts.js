/*

    Cordova Text-to-Speech Plugin
    https://github.com/vilic/cordova-plugin-tts

    by VILIC VANE
    https://github.com/vilic

    MIT License

*/

exports.speak = function (text, resolve, reject) {
//    return new Promise(function (resolve, reject) {
        var options = {};

        if (typeof text == 'string') {
            options.text = text;
        } else {
            options = text;
        }

        cordova.exec(resolve, reject, 'TTS', 'speak', [options]);
//    });
};

exports.stop = function(resolve, reject) {
//    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'TTS', 'stop', []);
//    });
};

exports.checkLanguage = function(resolve, reject) {
//    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'TTS', 'checkLanguage', []);
//    });
};

exports.openInstallTts = function(resolve, reject) {
//    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'TTS', 'openInstallTts', []);
//    });
};
