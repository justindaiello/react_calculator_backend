const { forwardTo } = require('prisma-binding');

const query = {
  answers: forwardTo('db')
}

module.exports = query