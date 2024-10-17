// Get form elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const degreeSelect = document.getElementById('degree') as HTMLSelectElement;
const universityInput = document.getElementById('university') as HTMLInputElement;
const skillsSelect = document.getElementById('skills') as HTMLSelectElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
const formMessage = document.getElementById('form-message') as HTMLElement;

// Handle form submission
resumeForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from submitting the traditional way
    const isValid = validateForm();
    if (isValid) {
        generateResume();
        displayMessage('Resume generated successfully!', 'success');
    } else {
        displayMessage('Please fill out all fields correctly.', 'error');
    }
});

function validateForm(): boolean {
    let isValid = true;

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || universityInput.value.trim() === '') {
        isValid = false;
    }

    if (skillsSelect.value === '') {
        isValid = false;
    }

    if (experienceInput.value.trim() === '') {
        isValid = false;
    }

    return isValid;
}

function generateResume() {
    const resumeData = {
        name: nameInput.value,
        email: emailInput.value,
        degree: degreeSelect.value,
        university: universityInput.value,
        skill: skillsSelect.value,
        experience: experienceInput.value,
        profilePicture: profilePictureInput.files ? profilePictureInput.files[0]?.name : 'No file uploaded'
    };

    console.log("Generated Resume Data:", resumeData);
}

// Function to display form messages
function displayMessage(message: string, type: 'success' | 'error') {
    formMessage.textContent = message;
    formMessage.style.color = type === 'success' ? 'green' : 'red';
}
