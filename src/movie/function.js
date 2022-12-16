const Movie = require ('./table');

exports.createMovie = async(movieObj) => {
    try{
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);
    } catch (error) {
        console.log(error)
    }
};

exports.readMovie = async() => {
    const movieList = await Movie.findAll()
    for (let index = 0; index < movieList.length; index++) {
        const row = movieList[index].dataValues
        console.log(row.title, row.actor, row.director, row.rating)
    }
};


exports.updateMovie = async(movieObj, inputTitle) =>{
    try {
        const movieList = await Movie.update(movieObj, {where: {title: inputTitle}});
        console.log(movieList);
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMovie = async(title) =>{
    try {
        const movieList = await Movie.destroy({where: {title: title}});
        console.log(movieList);
    } catch (error) {
        console.log(error)
    }
};