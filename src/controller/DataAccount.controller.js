const DataAccountRepository = require('../reponsitories/DataAccount.repository');
const BaseController = require('./Base.controller');

class DataAccountController extends BaseController {
  constructor() {
    super(DataAccountRepository);
  }

}

module.exports = new DataAccountController();
