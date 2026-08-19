const { createElement } = require("react");

const React ={

    createElement : function(tag,style,children){
        const element= document.createElement(tag);

        element.innerText = children;
        return element;
    }
}

 
const header1 = React.createElement('h1',{},"Hello coder dosto");
const header2 =  React.createElement('h2',{},"kase ho app")