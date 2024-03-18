const LanguageRepository = require('../reponsitories/Language.repository');
const BaseController = require('./Base.controller');

class LanguageController extends BaseController {
  constructor() {
    super(LanguageRepository);
  }

}

module.exports = new LanguageController();
