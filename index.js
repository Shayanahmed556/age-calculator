function calculateAge() {
    var dobString = document.getElementById('dob').value;
    if (!dobString) {
        alert('Please select a valid date of birth.');
        return;
    }

    var dob = new Date(dobString);
    var today = new Date();

    if (today <= dob) {
        alert('Please select a date of birth that is in the past.');
        return;
    }

    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = 'Your age is: ' + age;
}
