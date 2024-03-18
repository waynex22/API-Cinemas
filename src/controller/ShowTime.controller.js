const ShowTimeRepository = require('../reponsitories/ShowTime.repository');
const BaseController = require('./Base.controller');
const ShowTime = require('../models/showTime.model');
class ShowTimeController extends BaseController {
  constructor() {
    super(ShowTimeRepository);
  }
  async getPopulate(req, res) {
    try {
        const data = await ShowTime.find().populate({
          path: 'movie_id',
          populate: [{ path: 'language_id' }, { path: 'category_id' }]
      }).populate('room_id').populate('cinema_id').lean().exec();
        return res.status(200).json({ data: data });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
async  addShowTime(req, res) {
  try {
      const { movie_id, room_id, cinema_id, show_date, show_times } = req.body;
      const existingShowTime = await ShowTime.findOne({ movie_id, room_id, cinema_id, show_date });

      if (existingShowTime) {
          const isShowTimeExists = show_times.some(newTime => 
              existingShowTime.show_times.map(time => time.getTime()).includes(new Date(newTime).getTime())
          );

          if (isShowTimeExists) {
              return res.status(400).json({ error: 'One or more show times already exist' });
          }

          existingShowTime.show_times.push(...show_times.map(time => new Date(time)));
          await existingShowTime.save();
          return res.status(200).json({ data: existingShowTime });
      } else {
          const newShowTime = new ShowTime({ movie_id, room_id, cinema_id, show_date, show_times: show_times.map(time => new Date(time)) });
          const data = await newShowTime.save();
          return res.status(201).json({ data: data });
      }
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}
  async getShowTimeByMovieId(req, res) {
    try {
      const {id} = req.params;
      const data = await ShowTime.find({ movie_id: id }).populate('room_id').populate('cinema_id').populate('movie_id').lean().exec();
      return res.status(200).json({ data: data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new ShowTimeController();
