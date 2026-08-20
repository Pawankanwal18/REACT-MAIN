const React ={

    createElement : function(tag, styles, children){
        const element= document.createElement(tag);

        element.innerText = children;

        for(let key in styles){
          element.styles[key]=styles[key];
        }
        return element;
    }
}

 const ReactDOM = {

    render : function(element,root){
        root.append(element);
    }
 }


const header1 = React.createElement('h1',{fontSize:"30px", backgroundColor:"blue", color:"white"},"Hello coder dosto");
const header2 = React.createElement('h2',{fontSize:"25px", backgroundColor:"blue", color:"white"},"kase ho app");

document.getElementById("root").append(header1, header2);

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header1,document.getElementById('root'));