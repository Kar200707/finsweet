import MainService from "../services/mainService";

class Controller {
    async sort(req, res):Promise<void> {
        try {
            const dbData = await MainService.sort();

            res.dbData.status(200).json(dbData);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
    async create(req?, res?):Promise<void> {
        try {
            const dbData = await MainService.create(req.body);
            let modifedData = dbData.toObject();

            modifedData.id = modifedData._id;
            delete modifedData._id;
            delete modifedData.__v;
            console.log('DB data created');
            res.status(200).json(modifedData);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async getAll(req, res):Promise<void> {
        try {
            const dbData = await MainService.getAll();
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
               const dbdate = await MainService.getAll(req.query);
               res.status(200).json(dbdate);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res):Promise<void> {
        try {
            const dbData:any = await MainService.getOne(req.params.id);
            let modifedData = dbData.toObject();
            modifedData.id = modifedData._id;
            delete modifedData._id;
            delete modifedData.__v;

            return res.json(modifedData);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async update(req, res):Promise<void> {
        try {
            const dbData = await MainService.update(req.params.id, req.body);
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

    async delete(req, res):Promise<void> {
        try {
            const data:void = await MainService.delete(req.params.id);
            return res.status(201).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}

export default new Controller;