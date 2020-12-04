import { BeforeAfter } from '../abstracts/before-after';
import { ICreate } from '../interfaces/ICreate';
import { IRead } from '../interfaces/IRead';
import { IRamove } from '../interfaces/IRemove';
import { IUpdate } from '../interfaces/IUpdate';

/** @class CrudService this is a class implement "template pattern and implement to interface segregation. */
export class CrudService extends BeforeAfter implements ICreate, IRead, IUpdate, IRamove {

    constructor() {
        super();
    }

    public async create(paylaod: any) {
        await this.before(paylaod);
        console.log(`this is create for ${paylaod}`);
        await this.after(paylaod);
    }

    get(params: any) {
        console.log(`this is get for ${params}`);
    }

    getById(id: string) {
        console.log(`this is getById for ${id}`);
    }

    change(id: string, data?: any) {
        console.log(`this is change for ${id}`);
    }

    delete(id: string) {
        console.log(`this is delete for ${id}`);
    }

}