const FoodRepository = require('../reponsitories/Food.repository');
const BaseController = require('./Base.controller');

class FoodController extends BaseController {
  constructor() {
    super(FoodRepository);
  }

}
module.exports = new FoodController();
