import Logo from "../DB/models/logo.model";

class logoService {
    async getAll(query?) {
        const getDbData = await Logo.find(query);
        return getDbData;
    }

    async getOne(id):Promise<void> {
        if(!id){
            throw new Error('id not selected')
        }
        const oneData = await Logo.findById(id);
        return oneData;
    }
}

export default new logoService;