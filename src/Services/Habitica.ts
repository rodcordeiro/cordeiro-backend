import { DiscordService } from './Discord';
import { habiAPI } from '../tools/api';

class HabiticaService {
  async webhookHandler(data: any) {
    return new Promise(async (resolve, reject) => {
      const discord = new DiscordService();

      if (
        data.type == 'scored' ||
        data.type == 'updated' ||
        data.type == 'checklistScored'
      ) {
        if (
          data.task.id != 'b322a291-87c4-490e-8bf6-2b7087538929' &&
          data.task.id != '4239c5ca-490e-4b99-b8ad-46857f6ba80b'
        ) {
          const task = await habiAPI
            .get('/tasks/b322a291-87c4-490e-8bf6-2b7087538929', {
              headers: {
                'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
              },
            })
            .then((response) => {
              return response.data.data;
            });
          const checklistItems = task.checklist.length;
          let completed: number = 0;

          task.checklist.map(async (item: any, index: number) => {
            if (item.completed) {
              completed++;
            }
          });
          if (completed < checklistItems) {
            await habiAPI
              .post(
                `/tasks/b322a291-87c4-490e-8bf6-2b7087538929/checklist/${task.checklist[completed].id}/score`,
                {},
                {
                  headers: {
                    'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                    'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                    'x-client':
                      'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
                  },
                },
              )
              .then(async (response) => {
                await discord
                  .send_message(
                    'habitica_news',
                    `**Task ${task.checklist[completed].text} completed!!**`,
                    {
                      username: 'Grifo',
                      avatar_url:
                        'https://habitica.com/static/img/melior@3x.fe3b187f.png',
                    },
                  )
                  .then((response) => {
                    resolve('');
                  })
                  .catch((err) => {
                    reject(err);
                  });
              })
              .catch((err) => {
                console.log({ err });
              });
          } else {
            await habiAPI
              .post(
                `/tasks/b322a291-87c4-490e-8bf6-2b7087538929/checklist/${task.checklist[completed].id}/score`,
                {},
                {
                  headers: {
                    'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                    'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                    'x-client':
                      'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
                  },
                },
              )
              .catch((err) => {
                console.log({ err });
              });
            await habiAPI
              .post(
                '/tasks/b322a291-87c4-490e-8bf6-2b7087538929/score/up',
                {},
                {
                  headers: {
                    'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                    'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                    'x-client':
                      'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
                  },
                },
              )
              .then(async (response) => {
                await discord
                  .send_message(
                    'habitica_news',
                    `**Hooo yeah boy!!** :tada: :tada:\n Greate bro, you've made a strike! yoou completed ${completed} tasks today and fulfilled the day's goal! **YOU ROCK!**:punch:`,
                    {
                      username: 'Grifo',
                      avatar_url:
                        'https://habitica.com/static/img/melior@3x.fe3b187f.png',
                    },
                  )
                  .then((response) => {
                    resolve('');
                  })
                  .catch((err) => {
                    reject(err);
                  });
              })
              .catch((err) => {
                console.log({ err });
              });
          }
        }
        if (data.task.id == '4239c5ca-490e-4b99-b8ad-46857f6ba80b') {
          const sleepStatus = await habiAPI
            .get('/user', {
              headers: {
                'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
              },
            })
            .then((response) => {
              return response.data.data.preferences.sleep;
            })
            .catch((err) => {
              throw new Error(err);
            });
          if (!sleepStatus) {
            await habiAPI
              .post(
                '/user/sleep',
                {},
                {
                  headers: {
                    'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                    'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                    'x-client':
                      'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI',
                  },
                },
              )
              .then(async (response) => {
                await discord
                  .send_message(
                    'habitica_news',
                    'Got it. Take a rest sir. See you tomorrow.',
                    {
                      username: 'Grifo',
                      avatar_url:
                        'https://habitica.com/static/img/melior@3x.fe3b187f.png',
                    },
                  )
                  .then((response) => {
                    resolve('');
                  })
                  .catch((err) => reject(err));
              })
              .catch((err) => {
                reject(err);
              });
          } else {
            await discord
              .send_message(
                'habitica_news',
                "You're already sleeping my friend! You just spent your money, you fool!",
                {
                  username: 'Grifo',
                  avatar_url:
                    'https://habitica.com/static/img/melior@3x.fe3b187f.png',
                },
              )
              .then((response) => {
                resolve('');
              })
              .catch((err) => reject(err));
          }
        }
      }
      resolve('');
    });
  }
}
export { HabiticaService };

// tasks id b322a291-87c4-490e-8bf6-2b7087538929
// POST https://habitica.com/api/v3/tasks/:taskId/checklist/:itemId/score
// "checklist": [
//     {
//       "completed": false,
//       "text": "Tarefa 1",
//       "id": "b1566d67-df1f-4d9b-ac08-b08744a9f880"
//     },
//     {
//       "completed": false,
//       "text": "Tarefa 2",
//       "id": "882c0647-1aca-44f6-a951-804f1fae9c8c"
//     },
//     {
//       "completed": false,
//       "text": "Tarefa 3",
//       "id": "e10013ce-82f5-4ef6-ad47-8e6a039923bf"
//     }
//   ],
