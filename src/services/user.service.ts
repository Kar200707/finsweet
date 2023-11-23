import User from "../DB/models/user.model";

class userService {
    async create(data) {
        const createdUser = await User.create(data);
        return createdUser;
    }
    async getAll(query?) {
        const getDbData = await User.find(query);
        return getDbData;
    }

    async getOne(id):Promise<void> {
        if(!id){
            throw new Error('id not selected')
        }
        const oneData = await User.findById(id);
        return oneData;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id not selected')
        }
        const updatedData = await User.findByIdAndUpdate(id, data, {new: true});
        return updatedData;
    }

    async delete(id):Promise<void> {
        if (!id){
            throw new Error('id not selected')
        }

        const data = await User.findByIdAndDelete(id);
        return data;
    }
}

export default new userService;