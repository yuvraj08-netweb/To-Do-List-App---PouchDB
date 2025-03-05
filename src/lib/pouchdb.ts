import * as PouchDB from 'pouchdb';  // For ES module compatibility

export const localDB = new PouchDB('todos');
