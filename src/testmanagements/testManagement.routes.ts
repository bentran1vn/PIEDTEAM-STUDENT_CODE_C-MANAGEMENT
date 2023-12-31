import { Router } from 'express'
import { wrapAsync } from '~/utils/handlers'
import {
  getClassResultController,
  getStudentResultController,
  uploadFileController
} from './testManagement.controllers'

const testManagementRouter = Router()

//Get all Questions of the test
// testManagementRouter.get('/:testId', (req, res) => {})

// testManagementRouter.get('/', (req, res) => {
//   console.log('test')
// })

//Adding File to the question
testManagementRouter.post('/addFile', wrapAsync(uploadFileController))

testManagementRouter.get('/', wrapAsync(getClassResultController))

testManagementRouter.get('/:id', wrapAsync(getStudentResultController))

export default testManagementRouter
