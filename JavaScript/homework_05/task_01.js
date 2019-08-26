var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function countTasks(list) {
    var sum = 0, name = '';

    for (var tasks in list) {
        if (sum < list[tasks]) {
            sum = list[tasks];
            neme = tasks;
        }
    }

    return neme;
}

console.log(countTasks(tasksCompleted));