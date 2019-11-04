import Sequelize, { Model } from 'sequelize';

class Character extends Model {
	static init(sequelize) {
		super.init(
			{
				class: Sequelize.STRING,
				hp: Sequelize.SMALLINT,
				att: Sequelize.SMALLINT,
				mag: Sequelize.SMALLINT,
				def: Sequelize.SMALLINT,
				m_def: Sequelize.SMALLINT,
				speed: Sequelize.SMALLINT,
				critical: Sequelize.SMALLINT,
				ratio: Sequelize.SMALLINT,
				range: Sequelize.SMALLINT,
				weapon_id: Sequelize.INTEGER,
				passive: Sequelize.INTEGER,
			},
			{ sequelize }
		);

		return this;
	}
}

export default Character;
