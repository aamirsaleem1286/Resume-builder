// Get form elements
var resumeForm = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeSelect = document.getElementById('degree');
var universityInput = document.getElementById('university');
var skillsSelect = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
var profilePictureInput = document.getElementById('profile-picture');
var formMessage = document.getElementById('form-message');
// Handle form submission
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting the traditional way
    // Validate form data
    var isValid = validateForm();
    if (isValid) {
        generateResume();
        displayMessage('Resume generated successfully!', 'success');
    }
    else {
        displayMessage('Please fill out all fields correctly.', 'error');
    }
});
// Function to validate form inputs
function validateForm() {
    var isValid = true;
    // Check if required fields are filled
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || universityInput.value.trim() === '') {
        isValid = false;
    }
    // Check if skill is selected
    if (skillsSelect.value === '') {
        isValid = false;
    }
    // Check if experience is provided
    if (experienceInput.value.trim() === '') {
        isValid = false;
    }
    return isValid;
}
// Function to generate resume (dummy function for now)
function generateResume() {
    var _a;
    // This is where you'd process and generate the resume
    // For now, just print the form data to the console
    var resumeData = {
        name: nameInput.value,
        email: emailInput.value,
        degree: degreeSelect.value,
        university: universityInput.value,
        skill: skillsSelect.value,
        experience: experienceInput.value,
        profilePicture: profilePictureInput.files ? (_a = profilePictureInput.files[0]) === null || _a === void 0 ? void 0 : _a.name : 'No file uploaded'
    };
    console.log("Generated Resume Data:", resumeData);
}
// Function to display form messages
function displayMessage(message, type) {
    formMessage.textContent = message;
    formMessage.style.color = type === 'success' ? 'green' : 'red';
}
