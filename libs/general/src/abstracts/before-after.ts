import { IBeforeAfter } from '../interfaces/IBeforeAfter';

export  abstract class BeforeAfter implements IBeforeAfter {
    public async before(payload: any) {
        console.log('This is before process')
    }
    public async after(paylaod: any) {
        console.log('This is after process');
    }
}