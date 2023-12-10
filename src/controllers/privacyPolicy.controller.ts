import privacyPolicyService from "../services/privacyPolicy.service";

class privacyPolicyController {
    async create(req?, res?):Promise<void> {
        try {
            const dbData = await privacyPolicyService.create(req.body);
            let modifedData = dbData.toObject();

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
            const dbData = await privacyPolicyService.getAll();
            if (Object.keys(req.query).length === 0) {
                let modifedData = [];
                dbData.forEach((data, i):void =>{
                    let obj = data.toObject();

                    obj.id = obj._id;
                    delete obj._id;
                    delete obj.__v;

                    modifedData[i] = obj;
                })

                res.status(200).json(modifedData[0]);
            } else {
                const dbdata = await privacyPolicyService.getAll(req.query);
                res.status(200).json(dbdata);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res):Promise<void> {
        try {
            const dbData = await privacyPolicyService.update('6575504bf5d49abef1835df5', req.body);
            let modifedData = dbData.toObject();
            modifedData.id = modifedData._id;
            delete modifedData._id;
            delete modifedData.__v;

            res.status(201).json(modifedData);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}

export default new privacyPolicyController;