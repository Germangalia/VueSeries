/**
 * Created by ggalia84 on 5/11/15.
 */
new Vue({
    el: '#tasks',

    data: {
        tasks: [

            { body: 'Go to the store', completed: false}
        ],
        newTask: 'foobar'
    },

    methods: {
        addTask: function() {
            alert(this.newTask);

        }
    }
})