import sequelize from './db';

const syncModel = async () => {
    sequelize.sync()
        .then(() => {
            console.log('Database models synchronized');
        })
        .catch(err => {
            console.error('Error synchronizing models:', err);
        });
}


export default syncModel;