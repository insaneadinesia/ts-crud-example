import app from './app';
import sequelize from './config/db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync(); // Sync the database
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
