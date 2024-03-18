const MovieRepository = require('../reponsitories/Movie.repository');
const BaseController = require('./Base.controller');
const Movie = require('../models/movie.model');
class MovieController extends BaseController {
  constructor() {
    super(MovieRepository);
  }
  async addNew (req, res) {
    try {
      const { title, thumnail, trailer, director, category_id, premiere, time, language_id, rated, description } = req.body;
      const movie = new Movie({ title, thumnail, trailer, director, category_id, premiere, time, language_id, rated, description });
      // console.log(movie);
      const data = await movie.save();
      return res.status(201).json({ message: 'created', data: data });
    } catch (err) {
      return res.status(500).json({ message: 'server error', error:err });
    }
  }
  async getAllMovie (req, res) {
    try {
      const data = await Movie.find().populate('category_id').populate('language_id');
      return res.status(200).json({ message: 'success', data: data });
    } catch (err) {
      return res.status(500).json({ message: 'server error', error:err });
    }
  }
  async getMovieById (req, res) {
    try {
      const id = req.params.id;
      const data = await Movie.findById({_id: id}).populate('category_id').populate('language_id');
      return res.status(200).json({ message: 'success', data: data });
    }
    catch (err) {
      return res.status(500).json({ message: 'server error', error:err });
    }
}
}

module.exports = new MovieController();
