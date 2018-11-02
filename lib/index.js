var VueRepo = {};

VueRepo.install = function (Vue, config) {

    Vue.prototype.$getText = function (textIndex = '', params = {}) {

        let validateLang = function (data, errorMessage = '') {
            if (typeof data === 'undefined' || data === null) {
                console.error(errorMessage)
                return null
            }
            return data;
        }

        let listLanguage = validateLang(configRepository.language, "Config \'languages\' Object required")
        let languageDef = validateLang(configRepository.language_def, "String \'language_def\' required")

        let textParse = ""

        if (validateLang(listLanguage[languageDef], "[" + languageDef + "] Language not defined ") != null) {
            if (listLanguage[languageDef][textIndex]) {
                textParse = listLanguage[languageDef][textIndex]
            } else {
                for (var i in Object.keys(listLanguage)) {
                    if (validateLang(listLanguage[Object.keys(listLanguage)[i]])) {
                        textParse = listLanguage[Object.keys(listLanguage)[i]][textIndex];
                        break;
                    }
                }
            }
        }
        for (var indice in params) {
            let reg = new RegExp(':' + indice, 'g');
            textParse = textParse.replace(reg, params[indice]);
        }

        return textParse;
    }


}

module.exports = VueRepo;