import Sequelize, { Model } from 'sequelize';

class CharacterUnlock extends Model {
	static init(sequelize) {
		super.init(
			{
				character_id: sequelize.INTEGER,
				level: Sequelize.INTEGER,
			},
			{ sequelize }
		);

		return this;
	}
}

export default CharacterUnlock;
