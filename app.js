document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement('div');
    div.className = "header-container";
    document.body.appendChild(div);
    //
    let h1 = document.createElement('h1');
    let h1t = document.createTextNode('This is a banger!')
    document.body.appendChild(h1)
    h1.appendChild(h1t)
    div.appendChild(h1)
    h1.className = ('h1')
    //
    let h2 = document.createElement('h2')
    let h2t = document.createTextNode('This is an h2')
    document.body.appendChild(h2)
    h2.appendChild(h2t)
    div.appendChild(h2)
    h2.className = ('h2')
    //
    let h3 = document.createElement('h3')
    let h3t = document.createTextNode('This is an h3')
    document.body.appendChild(h3)
    div.appendChild(h3)
    h3.appendChild(h3t)
    h3.className = ('h3')
    //
    let h4 = document.createElement('h4')
    let h4t = document.createTextNode('This is an h4')
    document.body.appendChild(h4);
    div.appendChild(h4)
    h4.appendChild(h4t)
    h4.className = ('h4')
    //
    let h5 = document.createElement('h5')
    let h5t = document.createTextNode('This is an h5')
    document.body.appendChild(h5)
    div.appendChild(h5)
    h5.appendChild(h5t)
    h5.className = ('h5')
    //
    let h6 = document.createElement('h6')
    let h6t = document.createTextNode('This is an h6')
    document.body.appendChild(h6)
    div.appendChild(h6)
    h6.appendChild(h6t)
    h6.className = ('h6')
 //create an array of 8 colors and have them cycle throught the text color when double clicked
function colorChange (element){
    var colors = ['red', 'green', 'blue', 'orange', 'yellow','black','aqua'];
    element.style.color = colors[Math.floor(Math.random() * colors.length)];
}
 
    h1.addEventListener("dblclick", function (){
        colorChange(h1)
    })
 ///// ask about above  MATH.floor().
   
    let button = document.createElement("button")
    let bt = document.createTextNode("Click to add new list item")
    let div1 = document.createElement("div")
    document.body.appendChild(div1)
    document.body.appendChild(button)
    button.appendChild(bt)
    div1.appendChild(button)
    button.className =("button")
    
function ma () {
let li = document.createElement("li")
let lit = document.createTextNode(`Abstract ---Never Land ${a()}`)
document.body.appendChild(li)
li.appendChild(lit)
li.className = ("li")
li.addEventListener("click",function(){
    colorChange(li)
li.addEventListener("dblclick",function(){
    li.remove()
})

} )

}

   
let num = 0
function a (){
 
    return  num +=1
}

button.addEventListener("click", function (){
    ma()
    
   

})


























  
    // function addLI (){
    //     add()
    //    var li = document.createElement("li")
    //     var lit = document.createTextNode(`This is list item number  ${add()}`)
    //     document.body.appendChild(li)
    //     li.appendChild(lit)
    //     var lis = document.getElementsByName("li")
    //    return add()
        
    // }



    // addLI()
    // addLI()


})

// document.addEventListener("DOMContentLoaded", function(){
//     let paragraph = document.createElement('p');
// let text = document.createTextNode('This can be whatever text you would like it to be')
// paragraph.style.color="red";
// paragraph.style.textTransform =  "Uppercase";
// paragraph.className = "some-paragraph"
// document.body.appendChild(paragraph)
// paragraph.appendChild(text);  
// let btn = document.createElement('button');
// let btnText = document.createTextNode('Click Me!')
// btn.appendChild(btnText);
// document.body.appendChild(btn)
//     btn.addEventListener("click", function (){
//         let h1 = document.createElement('h1');
//         let h1txt = document.createTextNode("I've been clicked!")
//         h1.appendChild(h1txt)
//         document.body.appendChild(h1);
//     })
// })

