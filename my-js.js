// On click get the button and set the new input text to the <a> field
document.getElementById('saveBtnBefore').addEventListener('click', function () {
    let input_before_val = document.getElementById('inputBefore').value;
    let text_before_val = document.getElementById('textBefore').textContent = input_before_val;
});
// On click get the button and set the new input text to the <a> field
document.getElementById('saveBtnAfter').addEventListener('click', function () {
    let input_before_val = document.getElementById('inputAfter').value;
    let text_before_val = document.getElementById('textAfter').textContent = input_before_val;
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

