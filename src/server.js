/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const Hapi = require('@hapi/hapi');
/* notes */
const notes = require('./api/notes');
const NotesService = require('./api/services/postgres/NotesService');
const NotesValidator = require('./validator/notes');

// users
const users = require('./api/users');
const UsersService = require('./api/services/postgres/UsersService');

const UsersValidator = require('./validator/users');
const init = async () => {
  const notesService = new NotesService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: notes,
      options: {
        service: notesService,
        validator: NotesValidator,
      },
    },
    {
      plugin: users,
      options: {
        service: UsersService,
        validator: UsersValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
