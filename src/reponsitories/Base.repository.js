class BaseRepository {
    constructor(_collection){
        this.collection = _collection
    }
    async findAll() {
        const data = await this.collection.find().lean().exec();
        return data;
    }
    async findById(id){
        const data = await this.collection.findById(id);
        return data;
    }
    async create(model){
        const data = await this.collection.create(model);
        return data;
    }
    async update(id, model) {
        try {
            const data = await this.collection.findByIdAndUpdate(id, model, { new: true });
            return data;
        } catch (error) {
            console.error(`Error in update method: ${error}`);
            throw error;
        }
    }
    async deleteById(id){
        const data = await this.collection.findByIdAndDelete(id);
        return data;
    }
}

module.exports = BaseRepository