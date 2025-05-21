import dbConfig from "./db.config.js";
import { Sequelize} from "sequelize-typescript";
import {Nums, Pics} from './models/index.js'
import {fillNums, fillPics} from "./db-fill/index.js";

const postgresConnect = async () => {
    const sequelizeOptions = {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB,
        dialect: 'postgres',
      }
    const sequelize = new Sequelize(sequelizeOptions);
    sequelize.addModels([Nums, Pics]);

  try {
    await sequelize.authenticate();
    await sequelize.sync();

    //Nums.drop()
    //Pics.drop()
    await fillNums();
    await fillPics();

  } catch (error) {
    console.error(error)
  }


}

export default postgresConnect;
