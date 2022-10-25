class Calculator{
    constructor(firstInput,secondInput){
        this.firstInput = firstInput;
        this.secondInput = secondInput;
        this.delete();
    }
    delete(){
        
        this.current = " ";
        this.previous = " ";
        this.operationButton= " ";
        
    }
    addNumber(numberButton){
        if(numberButton==="%"){
            return this.current/= 100
        }
        else if(numberButton==="+/-"){
            return this.current*= -1
        }
        if( numberButton === "." && this.current.toString().includes(".")) return
        this.current= this.current.toString() + numberButton;
    }
    operation(operationButton){
        if (this.current ===" ") return;
        if (this.previous !==" ") {
            this.calculate();   
        }
        this.operationButton=operationButton;
        this.previous = this.current;
        this.current = " ";
    }
    calculate(){
        let solution;
        let previousItem = parseFloat(this.previous);
        let currentItem = parseFloat(this.current);
        if (this.current==" " || this.previous==" ") return;
        switch (this.operationButton) {
            case "+":
                solution = previousItem + currentItem
                break ;
                
            case "-":
                solution = previousItem - currentItem
                break;
            case "*" :
                solution = previousItem * currentItem
                break;
            case "÷":
                solution = previousItem / currentItem
                    break;
            case"/":
                solution = previousItem / currentItem
                    break;
            default:
                return;
        }
        this.current = solution;
        this.previous = " ";
        this.operationButton = " ";
    }
    dot(numberButton){
        let stringNumber= numberButton.toString();
        let integer = parseFloat(stringNumber.split(".")[0])
        let digit = stringNumber.split(".")[1]
        let newNumber=0
        if (isNaN(integer)) {
            newNumber= ""
        } else {
            newNumber = integer.toLocaleString("en",{maximmumFractionDigit:0})
        }
        if (digit != null) {
            return integer +"."+digit
            
        } else {
            return newNumber
        }

    }
    display(){
        if (this.dot(this.current)==="∞") {
                this.firstInput.innerHTML = "lmao"
        }else this.firstInput.innerHTML = this.dot(this.current);

        this.secondInput.innerHTML= this.previous + this.operationButton;
    }
}


const firstInput = document.querySelector(".first_input");
const secondInput= document.querySelector(".second_input");
const deleteButton= document.querySelector(".delete");
const equalButton= document.querySelector(".equal");
const numberButtons= document.querySelectorAll(".number");
const operationButtons= document.querySelectorAll(".operation");
const minus =document.querySelector(".minus");

const Calculator1=  new Calculator(firstInput,secondInput)

numberButtons.forEach(button =>{
    button.addEventListener('click',function(){
        console.log(button.innerHTML)
        sound()
        Calculator1.addNumber(button.innerHTML);
        Calculator1.display();
    }) 
})
operationButtons.forEach(button =>{
    button.addEventListener("click",function () {
        sound()
        Calculator1.operation(button.innerHTML);
        Calculator1.display();
    })
})

equalButton.addEventListener("click",function () {
    sound()
    Calculator1.calculate()
    Calculator1.display()
})

deleteButton.addEventListener("click",function () {
    sound()
    Calculator1.delete();
    Calculator1.display();
    
})
minus.addEventListener("click",function(){
   sound()
   Calculator1.addNumber(minus.innerHTML)
   Calculator1.display();
})

document.addEventListener("keydown",function(e){
    console.log(e.key)
    if (e.key==="1"||e.key==="2"||e.key==="3"||e.key==="4"||e.key==="5"||
        e.key==="6"||e.key==="7"||e.key==="8"||e.key==="9"||e.key==="0"||
        e.key===".") {
        sound();
        Calculator1.addNumber(e.key);
        Calculator1.display();
    } else if(e.key=="+"||e.key=="-"||e.key=="/"||e.key=="*"){
        sound();
        Calculator1.operation(e.key);
        Calculator1.display();
    }else if(e.key=="Enter"){
        sound();
        Calculator1.calculate()
        Calculator1.display()
    }else if(e.key==="Escape"){
        sound();
        Calculator1.delete();
        Calculator1.display();
    }
  })
function sound() {
    let kick = new Audio("click.wav");
    kick.play();
}
