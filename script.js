
const inputField = document.getElementById('inputs');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });

function handleButtonClick(event) {
        const buttonValue = event.target.textContent;
            
        if (buttonValue === 'AC') {
            inputField.value = '';
        } else if (buttonValue === 'DEL') {
            inputField.value = inputField.value.slice(0, -1);
        } else if (buttonValue === '=') {
            try {
                inputField.value = eval(inputField.value);
            } catch (error) {
                inputField.value = 'Error';
            }
        } else {
            inputField.value += buttonValue;
        }
}