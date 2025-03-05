import { AppDataSource } from "@/initializers/database";

export const initDB = async () => {
  if (!AppDataSource.isInitialized) {
   await AppDataSource.initialize()
    .then(() => {
      console.log('Entities:', AppDataSource.entityMetadatas.map(meta => meta.name));
    })
    .catch(error => console.error('Error:', error))  
  }
};
