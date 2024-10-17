$(document).ready(function() {
    $('#submitForm').click(function(e) {
        e.preventDefault(); // Prevent default link behavior

        var mobileNumber = $('#mobileNumber').val();
        var mobileRegex = /^[0-9]{10}$/; // Regular expression for 10-digit number
        
        if (mobileRegex.test(mobileNumber)) {
            $('#errorMessage').hide();
            // Handle form submission (e.g., send the mobile number to the server)
            alert("Mobile number is valid: " + mobileNumber);
            // You can proceed with your form submission or further actions here
            $('#mobileNumber').val('');
        } else {
            $('#errorMessage').show();
        }
    });
});
