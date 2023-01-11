import { Router } from 'express';
import {readdirSync} from 'fs'
const router = Router()

const PATH_ROUTER = `${__dirname}`
const clearFileName = (fileName: string) => {
    return fileName.split('.').shift()
}


readdirSync(PATH_ROUTER).filter((filenames) => {
    const clearName = clearFileName(filenames)

    if (clearName !== 'index') {
        import(`./${clearName}`).then((module) => {
            router.use(`/${clearName}`, module.router)
        })
    }
})

export {router}