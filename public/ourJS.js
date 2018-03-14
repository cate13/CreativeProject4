var app1 = new Vue({
    el: '#app1',
    data: {
        comments: [],
        addedName: '',
        addedComment: '',
    },
    mounted:function() {
        this.getComments();
    },
    methods: {
        addComment: function() {
            axios.post("/api/comments1", {
                text: this.addedComment,
                author: this.addedName
            }).then( response => {
                this.text = "";
                this.author = "";
                this.getComments();
                return true;
            }).catch(err => {
            });
        },
        deleteMessage: function(addedComment) {
            console.log(addedComment);
            axios.delete("/api/comments1/" + addedComment.id).then(response => {
                this.getComments();
                return true;
            }).catch(err => {
            });
        },
        getComments: function() {
            axios.get("/api/comments1").then(response => {
                this.comments = response.data;
                return true;
            }).catch(err => {
            });
        },
    }
})

//APP 2

var app2 = new Vue({
    el: '#app2',
    data: {
        comments: [],
        addedName: '',
        addedComment: '',
    },
    mounted:function() {
        this.getComments();
    },
    methods: {
        addComment: function() {
            axios.post("/api/comments2", {
                text: this.addedComment,
                author: this.addedName
            }).then( response => {
                this.text = "";
                this.author = "";
                this.getComments();
                return true;
            }).catch(err => {
            });
        },
        deleteMessage: function(addedComment) {
            console.log(addedComment);
            axios.delete("/api/comments2/" + addedComment.id).then(response => {
                this.getComments();
                return true;
            }).catch(err => {
            });
        },
        getComments: function() {
            axios.get("/api/comments2").then(response => {
                this.comments = response.data;
                return true;
            }).catch(err => {
            });
    
        },
    }
})

// APP 3

var app3 = new Vue({
    el: '#app3',
    data: {
        comments: [],
        addedName: '',
        addedComment: '',
    },
    mounted:function() {
        this.getComments();
    },
    methods: {
        addComment: function() {
            axios.post("/api/comments3", {
                text: this.addedComment,
                author: this.addedName
            }).then( response => {
                this.text = "";
                this.author = "";
                this.getComments();
                return true;
            }).catch(err => {
            });
        },
        deleteMessage: function(addedComment) {
            console.log(addedComment);
            axios.delete("/api/comments3/" + addedComment.id).then(response => {
                this.getComments();
                return true;
            }).catch(err => {
            });
        },
        getComments: function() {
            axios.get("/api/comments3").then(response => {
                this.comments = response.data;
                return true;
            }).catch(err => {
            });
    
        },
    }
});