import SubscribeService from "../services/subscribe.service";

class SubscribeController {
    async create(req?, res?):Promise<void> {
        try {
            const dbData = await SubscribeService.create(req.body);
            let modifedData = dbData.toObject();
            console.log(req.body)

            modifedData.id = modifedData._id;
            delete modifedData._id;
            delete modifedData.__v;
            console.log('DB data created');
            res.status(201).json(modifedData);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async getAll(req, res):Promise<void> {
        try {
            const dbData = await SubscribeService.getAll();
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
                const dbdata = await SubscribeService.getAll(req.query);
                res.status(200).json(dbdata);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new SubscribeController;