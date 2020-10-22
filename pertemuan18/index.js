// //JavaScript Anynchronous

// const second = () =>{
//     const num = 10
//     setTimeout(() => {
//         console.log('second')
//         console.log(num);
//     },2000,num)
     
// }

// const first = () => {
//     console.log('first')
//     second()
//     console.log('the end')
// }
// first()

const getData = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        reject()
    },2000)
})
        
getData
.then(() => console.log('Success'))
.catch(() => console.log('Success'))