import ContactUs from "../DB/models/contactUs.model";

class ContactService {
    async create(data) {
        const createdUser = await ContactUs.create(data);
        return createdUser;
    }
    async getAll(query?) {
        const getDbData = await ContactUs.find(query);
        return getDbData;
    }

    async getOne(id):Promise<void> {
        if(!id){
            throw new Error('id not selected')
        }
        const oneData = await ContactUs.findById(id);
        return oneData;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id not selected')
        }
        const updatedData = await ContactUs.findByIdAndUpdate(id, data, {new: true});
        return updatedData;
    }

    async delete(id):Promise<void> {
        if (!id){
            throw new Error('id not selected')
        }

        const data = await ContactUs.findByIdAndDelete(id);
        return data;
    }
}

export default new ContactService;