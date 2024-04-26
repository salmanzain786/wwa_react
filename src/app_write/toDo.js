import { Client, Databases,ID  } from "appwrite";
class Todo{
    clint; 
    databases; 
    constructor(){
        this.client = new Client();
        this.databases = new Databases(this.client);
    }
    async getList(){
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('662614ee93ce22be1902')
        ;
        try {
            const response = this.databases.listDocuments('662615596ce732c9aac2', '66261565c28beba3acd3');
            return response;
        } catch (error) {
            return [];
        }
    }

    async createService(data = {}){
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('662614ee93ce22be1902')
        ;
        try {
            const response = this.databases.createDocument('662615596ce732c9aac2', '66261565c28beba3acd3',ID.unique(),data);
            return response;
        } catch (error) {
            return [];
        }
    }

    async deleteService(id){
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('662614ee93ce22be1902')
        ;
        try {
            const response = this.databases.deleteDocument('662615596ce732c9aac2', '66261565c28beba3acd3',id);
            return response;
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    async getService(id){
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('662614ee93ce22be1902')
        ;
        try {
            const response = this.databases.getDocument('662615596ce732c9aac2', '66261565c28beba3acd3',id);
            return response;
        } catch (error) {
            return [];
        }
    }

    async updateService(id, data = {}){
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('662614ee93ce22be1902')
        ;
        try {
            const response = this.databases.updateDocument('662615596ce732c9aac2', '66261565c28beba3acd3',id, data);
            return response;
        } catch (error) {
            return [];
        }
    }
}

const todoModel = new Todo();
export default todoModel;