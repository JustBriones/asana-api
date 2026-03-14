const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '2/866210646952519/1206341599396654:a3e42013418eac5277c95a0ad12b24e7';
let tasksApiInstance = new Asana.TasksApi();
let body = {"data": {"project": "1207780644646043"}}; // The project to add the tasks to.
let task_gids = ['1202014566956634','1211592935490347','1202020437009705','1203717729704341','1210793483012537','1210481056748511','1211601207265994','1211167274453586','1211379343897848','1211581647012887','1209511998934561','1209584442300335','1208264826014856','1200976275794826','1206213318941300','1208874294309694','1208346480853016','1200616548025161','1208186701742994','1203137140568110','1203582021067639','1208113555924469','1209672232111237','1211365891203382','1204797436906332','1211479267357122','1199149061845886','1170304539698144','1201615609093706','1206901222102696']; // Array of task GIDs.
const addTasksToProject = async () => {
    for (const task_gid of task_gids) {
        try {
            const result = await tasksApiInstance.addProjectForTask(body, task_gid);
            console.log(`Task ${task_gid} added successfully. Returned data: ${JSON.stringify(result.data, null, 2)}`);
        } catch (error) {
            console.error(`Failed to add task ${task_gid}: ${error.response.body}`);
        }
    }
};
addTasksToProject();