import Post from "../DB/models/post.model";

class postService {
    async create(data) {
        const createdPost = await Post.create(data);
        return createdPost;
    }
    async getAll(query?) {
        const getDbData = await Post.find(query);
        return getDbData;
    }

    async getOne(id):Promise<void> {
        if(!id){
            throw new Error('id not selected')
        }
        const oneData = await Post.findById(id);
        return oneData;
    }

    async update(id, data) {
        if (!id) {
            throw new Error('id not selected')
        }
        const updatedData = await Post.findByIdAndUpdate(id, data, {new: true});
        return updatedData;
    }

    async delete(id):Promise<void> {
        if (!id){
            throw new Error('id not selected')
        }

        const data = await Post.findByIdAndDelete(id);
        return data;
    }
}

export default new postService;