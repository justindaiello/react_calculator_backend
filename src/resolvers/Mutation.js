
const mutations = {
  async createAnswer(parent, args, ctx, info) {
    const answer = await ctx.db.mutation.createAnswer({
      data: args
    }, info);
    return answer;
  }

}

module.exports = mutations;