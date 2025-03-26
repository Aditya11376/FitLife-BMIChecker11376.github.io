//Create a display box to show the result
let div = document.createElement('div');
document.querySelector('#container').before(div);
//Set the id attribute for the display box
div.setAttribute('id','displayBox');

//-------------------------------------------------------

//create the refresh button
let btn = document.createElement('button');
btn.textContent = 'Refresh';
//Set the id attribute for the refresh button
btn.setAttribute('id','displayBoxBtn');

//-------------------------------------------------------

//Stores the input box value in the variable;
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let submit = document.querySelector("#submit");
//disable the submit button (by Default)
submit.disabled = true;

//-------------------------------------------------------

//to set the input box and submit button disablitity
const set = () => {
    weight.value = "";
    height.value = "";
    checkField();
}

//-------------------------------------------------------

//dynamically calculate the submit button disable state;
let checkField =() =>{
    submit.disabled = weight.value.trim() === "" || height.value.trim() === "";
};

weight.addEventListener('input', checkField);
height.addEventListener('input', checkField);

//-------------------------------------------------------

//result func that calculate the result value;
const result = () => {

if(weight.value != "" && height.value != ""){

    let wInKg = parseFloat(weight.value);
    let hInM = parseFloat(height.value)/ 100;

    if(hInM > 0 && wInKg > 0){

        let  bmi_value = (wInKg/(hInM*hInM)).toFixed(2);
        let  statement = `BMI Index Value is ${bmi_value} & `;
        
        if(bmi_value < 18.5){
            statement += '\nYou are underweight.';
        }else if(bmi_value>=18.5 && bmi_value<24.99){
            statement += '\nYou are normal weight.';
        }else if(bmi_value>=25 && bmi_value<29.9){
            statement += '\nYou are overweight.';
        }else{
            statement += '\nYou are obese.';
        }

        div.innerText = statement + `\n\n\n Thank You!`;
        div.appendChild(btn);
      
        setTimeout(() => {
            document.querySelector('.input_container').style.filter = 'blur(5px)'; 
            document.querySelector('.table_box').style.filter = 'blur(5px)'; 
            document.querySelector('.head_container').style.filter = 'blur(5px)'; 
            div.style.display = 'block';
        }, 700);

        }
        else{
            alert('Invalid value!. Please enter a valid value. \nThank you!');
            set();
        }
    }
};
//calling the eventListner on the click of submit buttton;
submit.addEventListener('click', result);

//-----------------------------------------------------------

//refresh func that is used to reset the page;
const refresh =(e) =>{
    e.preventDefault();
    div.style.display = 'none';
    document.querySelector('.input_container').style.filter = 'none'; 
    document.querySelector('.table_box').style.filter = 'none'; 
    document.querySelector('.head_container').style.filter = 'none'; 
    set();

}
//calling the eventListner on the click of refresh button;
btn.addEventListener('click',refresh);