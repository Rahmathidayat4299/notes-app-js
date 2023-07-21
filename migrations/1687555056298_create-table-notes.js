/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
exports.up = (pgm) => {
    pgm.createTable('notes', {
      id: {
        type: 'VARCHAR(50)',
        primaryKey: true,
      },
      title: {
        type: 'TEXT',
        notNull: true,
      },
      body: {
        type: 'TEXT',
        notNull: true,
      },
      tags: {
        type: 'TEXT[]',
        notNull: true,
      },
      created_at: {
        type: 'TEXT',
        notNull: true,
      },
      updated_at: {
        type: 'TEXT',
        notNull: true,
      },
    });
  };
   
  exports.down = (pgm) => {
    pgm.dropTable('notes');
  };