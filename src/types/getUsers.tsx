import User from './user';

export default interface GetUser {
    type: string;
    data: User[]
}