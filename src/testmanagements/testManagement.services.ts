import { Request } from 'express'
import MongodbDatabase from '~/database/database.mongo'
import { handleUploadFile } from '~/utils/files'

const mongodbDatabase = MongodbDatabase.getInstance()

class TestManagementsServices {
  private static instance: TestManagementsServices

  private constructor() {}

  public static getInstance(): TestManagementsServices {
    if (!TestManagementsServices.instance) {
      TestManagementsServices.instance = new TestManagementsServices()
    }
    return TestManagementsServices.instance
  }

  async uploadFileService(req: Request) {
    const file = await handleUploadFile(req)
    return {
      url: `${process.env.SERVER_HOST}/files/${file.newFilename}`,
      path: file.filepath
    }
  }
}

export default TestManagementsServices
