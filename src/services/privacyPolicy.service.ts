import PrivacyPolicy from "../DB/models/privacyPolicy.model";

class privacyPolicyService {
    async create(data) {
        const createdUser = await PrivacyPolicy.create(data);
        return createdUser;
    }
    async getAll(query?) {
        const getDbData = await PrivacyPolicy.find(query);
        return getDbData;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id not selected')
        }
        const updatedData = await PrivacyPolicy.findByIdAndUpdate(id, data, {new: true});
        return updatedData;
    }
}

export default new privacyPolicyService;