const { createElement } = require("react");
style = {fontsize:"30px", backgroundColor:"blue", color:"white"}
const React ={

    createElement : function(tag,style,children){
        const element= document.createElement(tag);

        element.innerText = children;
        return element;
    }
}

 
const header1 = React.createElement('h1',{fontsize:"30px", backgroundColor:"blue",color:"white"},"Hello coder dosto");
const header2 =  React.createElement('h2',{fontsize:"30px", backgroundColor:"blue", color:"white"},"kase ho app");