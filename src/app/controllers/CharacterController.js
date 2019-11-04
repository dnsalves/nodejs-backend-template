import Character from '../models/Character';

class CharacterController {
	async store(req, res) {
		const user = await Character.create(req.body);

		return res.json(user);
	}
}

export default new CharacterController();
