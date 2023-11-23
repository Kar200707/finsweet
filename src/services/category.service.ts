import Category from "../DB/models/category.model";

class CategoryService {
    async create(data) {
        const createdUser = await Category.create(data);
        return createdUser;
    }
    async getAll(query?) {
        const getDbData = await Category.find(query);
        return getDbData;
    }

    async getOne(id):Promise<void> {
        if(!id){
            throw new Error('id not selected')
        }
        const oneData = await Category.findById(id);
        return oneData;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id not selected')
        }
        const updatedData = await Category.findByIdAndUpdate(id, data, {new: true});
        return updatedData;
    }

    async delete(id):Promise<void> {
        if (!id){
            throw new Error('id not selected')
        }

        const data = await Category.findByIdAndDelete(id);
        return data;
    }
}

export default new CategoryService;