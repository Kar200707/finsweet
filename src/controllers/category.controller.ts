import CategoryService from "../services/category.service";

class CategoryController {
    async create(req?, res?):Promise<void> {
        try {
            const dbData = await CategoryService.create(req.body);
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
            const dbData = await CategoryService.getAll();
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
               const dbdata = await CategoryService.getAll(req.query);
               res.status(200).json(dbdata);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res):Promise<void> {
        try {
            const dbData:any = await CategoryService.getOne(req.params.id);
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
            const dbData = await CategoryService.update(req.params.id, req.body);
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
            const data:void = await CategoryService.delete(req.params.id);
            return res.status(201).json('category deleted');
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }
}

export default new CategoryController;