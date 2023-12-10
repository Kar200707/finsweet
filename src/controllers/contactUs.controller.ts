import ContactUs from "../services/contactUs.service";

class ContactUsController {
    async create(req?, res?):Promise<void> {
        try {
            const dbData = await ContactUs.create(req.body);
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
            const dbData = await ContactUs.getAll();
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
                const dbdata = await ContactUs.getAll(req.query);
                res.status(200).json(dbdata);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new ContactUsController;