import { haveLogging } from '../../common/common';

test('have logging', () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMjMsInVzZXJuYW1lIjoiRXN0IFJvdWdlIFRlc3QiLCJzY29wZXMiOlsidXNlcnM6cmVhZCJdfSwiaWF0IjoxNjA4MzgwNTEyLCJleHAiOjE2MDg5ODUzMTJ9.t_VrH2TeV-ILONw_ckFj9pTfOdpQkJ0KVV6IgHc1tDQ')
    expect(haveLogging()).toBe(true);
});

test('have not logging', () => {
    localStorage.removeItem('token');
    expect(haveLogging()).toBe(false);
});