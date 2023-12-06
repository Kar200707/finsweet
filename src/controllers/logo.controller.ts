import logoService from "../services/logo.service";
import logoModel from "../DB/models/logo.model";

class logoController {
    async getAll(req, res):Promise<void> {
        try {
            const dbData = await logoService.getAll();
            if (Object.keys(req.query).length === 0) {
                let modifedData = [];
                dbData.forEach((data, i):void =>{
                    let obj = data.toObject();

                    delete obj._id;
                    delete obj.__v;

                    modifedData[i] = obj;
                })

                res.status(200).json(modifedData);
            } else {
                const dbData = await logoService.getAll(req.query);
                let modifedData = [];
                dbData.forEach((data, i):void =>{
                    let obj = data.toObject();

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
            let dbData: any = await logoService.getOne(req.params.id);
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
}

export default new logoController;