import Subscribe from "../DB/models/sub.model";

class SubService {
    async create(data) {
        const createdUser = await Subscribe.create(data);
        return createdUser;
    }
    async getAll(query?) {
        const getDbData = await Subscribe.find(query);
        return getDbData;
    }

    async getOne(id):Promise<void> {
        if(!id){
            throw new Error('id not selected')
        }
        const oneData = await Subscribe.findById(id);
        return oneData;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id not selected')
        }
        const updatedData = await Subscribe.findByIdAndUpdate(id, data, {new: true});
        return updatedData;
    }

    async delete(id):Promise<void> {
        if (!id){
            throw new Error('id not selected')
        }

        const data = await Subscribe.findByIdAndDelete(id);
        return data;
    }
}

export default new SubService;