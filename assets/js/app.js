
var app = new Vue({
    el: '#app',
    data: {
        content: '',
        comments: [
            {comment: 'komentar 1', date: '10-10-2020', score: 5, up:true, down:true},
            {comment: 'komentar 2', date: '10-10-2020', score: 2, up:true, down:true},
            {comment: 'komentar 3', date: '10-10-2020', score: 7, up:true, down:true},
        ],
        score: 0,
    },
    conputed: {

    },
    methods : {
        addComment: function(){
            data ={
                comment: this.content,
                date: '10-10-2020',
                score: this.score ,
                up: true,
                down:true
            }
            this.comments.push(data);
            this.content = '';
        },
        up: function(i){
            let Comments = this.comments[i];  
            if(Comments.up){
                Comments.score = Comments.score + 1;
            }
            Comments.up = false;
        },
        down: function(i){
            let Comments = this.comments[i];
            if(Comments.down){
                Comments.score = Comments.score - 1;
            }
            Comments.down = false;
        }


    }
})