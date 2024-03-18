const DrinkRepository = require('../reponsitories/Drink.repository');
const BaseController = require('./Base.controller');

class DrinkController extends BaseController {
  constructor() {
    super(DrinkRepository);
  }

}

module.exports = new DrinkController();
