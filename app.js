const posts = [ // array of objects
    {
        title: 'Patrick number one',
        body: 'Patrick and the one over'

    },
    {
        title: 'John number two',
        body: 'John and the two over'
    }
];



function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 1000)
}


function getPost() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`
        })
        
        document.getElementById('data').innerHTML = output;
    }, 2000)
};


document.getElementById('try').addEventListener('click', function tryMe() {
    createPost({ title: 'Ellen', body: 'Ellen and the three over' }, getPost);
})
