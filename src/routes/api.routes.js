const accountRouter = require('./account.routes');
const foodRouter = require('./food.routes');
const drinkRouter = require('./drink.routes');
const categoryRouter = require('./category.routes');
const dataAccountRouter = require('./dataAccount.routes');
const roomRouter = require('./room.routes');
const cinemaRouter = require('./cinema.routes');
const movieRouter = require('./movie.routes');
const ticketRouter = require('./ticket.routes');
const bannerRouter = require('./banner.routes');
const seatRouter = require('./seat.routes');
const showTimeRouter = require('./showTime.routes');
const languageRouter = require('./language.routes');
const route = (app) => {
     app.use('/api/v1/account', accountRouter);
     app.use('/api/v1/food', foodRouter);
     app.use('/api/v1/drink', drinkRouter);
     app.use('/api/v1/category', categoryRouter);
     app.use('/api/v1/dataAccount', dataAccountRouter);
     app.use('/api/v1/room', roomRouter);
     app.use('/api/v1/cinema', cinemaRouter);
     app.use('/api/v1/movie', movieRouter);
     app.use('/api/v1/ticket', ticketRouter);
     app.use('/api/v1/banner', bannerRouter);
     app.use('/api/v1/seat', seatRouter);
     app.use('/api/v1/showtime', showTimeRouter);
     app.use('/api/v1/language', languageRouter);
}
module.exports = route; 