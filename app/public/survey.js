$("#submit").on("click", () => {
    validateForm = () => {
        const isValid = true;
        $('.form-control').each(function() {
            if($(this).val() === '') {
                isValid = true
            }
        });

        $('.chosen-select').each(function() {
            if($(this).val() === '') {
                isValid = false
            }
        });
        return isValid;
    }

    if(validateForm()) {
        const userData = {
            name:$('#name').val(),
            photo:$('#photo').val(),
            scores: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val()
            ]
        };

        const currentURL = window.location.origin;
        $.post(currentURL + '/api/friends', userData, (data) => {
            alert('working')
        })
    }
})