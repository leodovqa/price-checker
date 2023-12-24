// On click get the button and set the new input text to the <a> field
document.getElementById('saveBtnBefore').addEventListener('click', function () {
    document.getElementById('textBefore').textContent = document.getElementById('inputBefore').value;
});
// On click get the button and set the new input text to the <a> field
document.getElementById('saveBtnAfter').addEventListener('click', function () {
    document.getElementById('textAfter').textContent = document.getElementById('inputAfter').value;
});


fetch('query.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        //console.log(data);  // Log the retrieved data
        if (Array.isArray(data)) {
            // Process array data
            const dataList = document.getElementById('dataList');
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = JSON.stringify(item);
                //console.log('User Name: '+item['username']+' | User ID: '+item['user_id']);
                dataList.append('User Name: '+item['username']+' | User ID: '+item['user_id']);
                //console.log('test in data');
            });
        } else {
            console.error('Data received is not an array:', data);
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


// Install input filters.
setInputFilter(document.getElementById("inputBefore"), function (value) {
    return /^-?\d*$/.test(value);
}, "Must be an integer");
setInputFilter(document.getElementById("inputAfter"), function (value) {
    return /^-?\d*$/.test(value);
}, "Must be an integer");


// Restricts input for the given textbox to the given inputFilter. (Only integer allowed).
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, function (e) {
            if (inputFilter(this.value)) {
                // Accepted value.
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                }

                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value: restore the previous one.
                this.classList.add("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                // Rejected value: nothing to restore.
                this.value = "";
            }
        });
    });
}
