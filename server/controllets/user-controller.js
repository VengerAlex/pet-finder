const UserService = require("../service/user-service");

class UserController {
    async registration(req, res){
        try {
            const {email, password, fullName} = req.body;

            const userDate = await UserService.registration(email, password, fullName);

            return res.json(userDate);
        } catch(error){
            res.status(500).json({
                message: 'Не удалось зарегистрироваться',
            });
        }
    }

    async login(req, res){
        try {
            const {email, password} = req.body;

            const userDate = await UserService.login(email, password);

            return res.json(userDate);
        } catch(error){
            res.status(500).json({
                message: 'Не удалось залогиниться',
            });
        }
    }

    async auth(req, res){
        try {
            const id = req.userId;

            const user = await UserService.getUser(id);

            return res.json({user: user})
        } catch(error){
            res.status(500).json({
                message: 'Нет доступа',
            });
        }
    }
}

module.exports = new UserController();