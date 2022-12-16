const yargs=require('yargs');
const { openSequelizeConnection} = require ('./db/connection');
const { createMovie, readMovie, updateMovie, deleteMovie} = require ('./movie/function');

async function app(yargsInput) {
    await openSequelizeConnection.sync();
    if (yargsInput.create) {
        // put code to add a movie here
        await createMovie({
            title: yargsInput.title, 
            actor: yargsInput.actor, 
            director: yargsInput.director, 
            rating: yargsInput.rating
        });
    } else if (yargsInput.read) {
        // put code to list movies here
        await readMovie();
    } else if (yargsInput.update) {
        //put code to update actor field here
        await updateMovie({
            title: yargsInput.title, 
            actor: yargsInput.actor, 
            director: yargsInput.director, 
            rating: yargsInput.rating});
    } else if (yargsInput.delete) {
        //put code to delete a movie here
        await deleteMovie(yargsInput.title);
    } else {
        console.log('Unrecognized command');
    }
};

app(yargs.argv);
