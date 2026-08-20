const React ={

    createElement : function(tag, styles, children){
        const element= document.createElement(tag);

        element.innerText = children;

        for(let key in styles){
          element.styles[key]=styles[key];
        return element;
    }
}

 
const header1 = React.createElement('h1',{fontSize:"30px", backgroundColor:"blue", color:"white"},"Hello coder dosto");
const header2 = React.createElement('h2',{fontSize:"30px", backgroundColor:"blue", color:"white"},"kase ho app");

document.getElementById("root").append(header1, header2);