import userModel from "../DB/models/user.model";
const bcrypt = require('bcrypt');

class authController {
    async login(req?, res?):Promise<void> {
        try {
            const { email, password } = req.body;

            if (email && password) {
               try {
                   const data = await userModel.findOne({email: email});

                   if (bcrypt.compareSync(password, data.password)) {
                       let modifedData = data.toObject();

                       modifedData.id = modifedData._id;
                       delete modifedData._id;
                       delete modifedData.__v;

                       res.status(201).json({ accessToken: data.password, user: modifedData });
                   } else {
                       res.status(400).json({ message: "password or email is false" });
                   }
               } catch (e) {
                   res.status(400).json({ message: "password or email is false" });
               }
            } else {
                return res.status(400).json({message: "password or email is not"});
            }
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async register(req?, res?):Promise<void> {
        try {
            const { email, password } = req.body;

            const candidate = await userModel.findOne({email});

            if (candidate) {
                return res.status(400).json({message: "this user is registered"});
            }

            let modifedData:any = {};

            modifedData = req.body;

            if (password && email) {
                let hashPassword = await bcrypt.hashSync(password, 10);

                modifedData.password = hashPassword;

                let createdUser = await userModel.create(modifedData);

                let sendData = createdUser.toObject();

                sendData.id = sendData._id;
                delete sendData._id;
                delete sendData.__v;

                res.status(201).json(sendData);
            } else {
                return res.status(400).json({message: "password or email is not"});
            }
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}

export default new authController;