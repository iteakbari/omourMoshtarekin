// Listen for click on toggle checkbox
const selectAll = document.querySelectorAll('.select-all');

selectAll.forEach((select) => {
    const checkSelect = select.closest('.holder').querySelectorAll('.check-select');
    selectAllInput = function () {
        checkSelect.forEach((item) => {

            if (item.checked) {
                item.checked = false;
            }
            else {
                item.checked = true;

            }
        })
    }
    select.addEventListener('change', selectAllInput);

})





