// const posts = [ // array of objects
//     {
//         title: 'Patrick number one',
//         body: 'Patrick and the one over'

//     },
//     {
//         title: 'John number two',
//         body: 'John and the two over'
//     }
// ];



// // function createPost(post, callback) {
// //     setTimeout(function () {
// //         posts.push(post);
// //         callback();
// //     }, 2000)
// // }


// // function getPost() {
// //     setTimeout(function () {
// //         let output = '';
// //         posts.forEach(function (post) {
// //             output += `<li>${post.title}</li>`
// //         })
        
// //         document.getElementById('data').innerHTML = output;
// //     }, 1000)
// // };


// // document.getElementById('try').addEventListener('click', function tryMe() {
// //     createPost({ title: 'Ellen', body: 'Ellen and the three over' }, getPost);
// // })


// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             posts.push(post);

//             const error = false;

//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong...')
//             }
            
//             resolve();
//         }, 2000 )
//     })
    
// }



// function getPost() {
//     setTimeout( () => {
//         let output = '';
//         posts.forEach( post => {
//             output += `<li>${post.title}</li>`;
//         });

//         document.getElementById('data').innerHTML = output;

//     }, 1000)
// };

// document.getElementById('try').addEventListener('click', function tryMe() {

//     createPost({ title: 'Ellen with three over', body: 'three over it again' }).then(getPost).catch(function (error) {
//         console.log(error)
//     })
        
// });