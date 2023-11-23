import userService from "../services/user.service";
import user from "../routers/user";

class userController {
    async create(req, res):Promise<void> {
        try {
            console.log('DB data created');
            let createdData = await userService.create(req.body);
            let modifedData = createdData.toObject();

            modifedData.id = modifedData._id;
            delete modifedData._id;
            delete modifedData.__v;
            res.status(201).json(modifedData);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async getAll(req, res):Promise<void> {
        try {
            const dbData = await userService.getAll();
            if (Object.keys(req.query).length === 0) {
                let modifedData = [];
                dbData.forEach((data, i):void =>{
                    let obj = data.toObject();

                    obj.id = obj._id;
                    delete obj._id;
                    delete obj.__v;

                    modifedData[i] = obj;
                })

                res.status(200).json(modifedData);
            } else {
                const dbData = await userService.getAll(req.query);
                let modifedData = [];
                dbData.forEach((data, i):void =>{
                    let obj = data.toObject();

                    obj.id = obj._id;
                    delete obj._id;
                    delete obj.__v;

                    modifedData[i] = obj;
                })

                res.status(200).json(modifedData);
            }
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async getOne(req, res):Promise<void> {
        try {
            let dbData: any = await userService.getOne(req.params.id);
            let modifedData = dbData.toObject();

            modifedData.id = modifedData._id;
            delete modifedData._id;
            delete modifedData.__v;

            res.status(200).json(modifedData);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async update(req, res):Promise<void> {
        try {
            let updatedData = await userService.update(req.params.id, req.body);
            let modifedData = updatedData.toObject();

            modifedData.id = modifedData._id;
            delete modifedData._id;
            delete modifedData.__v;
            res.status(201).json(updatedData);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async delete(req, res):Promise<void> {
        try {
            let deleteData:void = await userService.delete(req.params.id);
            res.status(200).json('deleted');
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}

export default new userController;