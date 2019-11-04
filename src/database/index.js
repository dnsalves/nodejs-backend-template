import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import Character from '../app/models/Character';

import databaseConfig from '../config/database';

const models = [Character];

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models.map(model => model.init(this.connection));
	}

	mongo() {
		this.mongoConnection = mongoose.connect(
			'mongodb://localhost:27017/gobarber',
			{
				useNewUrlParser: true,
				useFindAndModify: true,
				useUnifiedTopology: true,
			}
		);
	}
}

export default new Database();
