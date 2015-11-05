/**
 * Created by ggalia84 on 5/11/15.
 */
new Vue({
    el: '#tasks',

    data: {
        tasks: [],
        newTask: ''
    },

    computed: {
        comoletions: function() {
            return this.tasks.filter(function(task) {
                return task.completed;
            });
        }
    },

    comoletions: function() {
            return this.tasks.filter(function(task) {
                return task.completed;
            });


    },

    remaining: function() {
            return this.tasks.filter(function(task) {
                return ! task.completed;
            });


    },

    infilters: {

        inProcess: function(tasks) {
            return tasks.filter(function(task) {
                return ! task.completed;
            });
        }
    },

    methods: {
        addTask: function (e) {
            e.preventDefault();

            if (! this.newTask) return;

            this.tasks.push({
                body: this.newTask,
                completed: false
            });

            this.newTask = '';

        },

        editTask: function(task) {
            //remove the task
            this.removeTask(task);
            //update the newTask input.
            this.newTask = task.body;

            //focus the newTask input
            this.$$.newTask.focus();

        },

        toggñeTaskCompletion: function(task) {
            task.completed= ! task.completed;
        },

        completeAll: function() {
            this.tasks.forEach(function(task) {
                task.completed = true;
            });
        },


        removeTask: function(task) {
            this.tasks.$remove(task);

        }
    }
})