var unirest = require('unirest');

module.exports = {
  createTag(tag) {
    unirest
      .post('https://habitica.com/api/v3/tags')
      .type('json')
      .headers({
        'content-type': 'application/json',
        'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
        'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
        'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
      })
      .send({
        name: tag,
      })
      .then((response) => {
        return {
          statusCode: response.statusCode,
          body: response.body.data,
        };
      });
  },
  scoreTask(taskId) {
    unirest
      .post(`https://habitica.com/api/v3/tasks/${taskId}/score/up`)
      .type('json')
      .headers({
        'content-type': 'application/json',
        'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
        'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
        'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
      })
      .then((response) => {
        return {
          statusCode: response.statusCode,
          body: response.body.data,
        };
      });
  },
  async listTodos() {
    await unirest
      .get('https://habitica.com/api/v3/tasks/user?type=todos')
      .type('json')
      .headers({
        'content-type': 'application/json',
        'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
        'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
        'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
      })
      .then((res) => {
        const data = res.body.data;
        return data;
        // this.validaTask(res.body.data,"5ea83b21d07e7d6c3563c7ff")
      });
  },
  validaTask(tasks, alias) {
    for (var task in tasks) {
      if (tasks[task].alias == alias) {
        this.scoreTask(tasks[task].id);
      }
    }
  },
};
