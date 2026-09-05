const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const displayField = document.getElementById('displayField');

function appendChar(char){
    displayField.value += char;
};

function clearDisplay(){
    displayField.value= "";
};

function deleteChar() {
    displayField.value = displayField.value.slice(0, -1);
}

function calculate() {
    try {
        displayField.value = eval(displayField.value);
    } catch {
        displayField.value = 'Error';
    }
}