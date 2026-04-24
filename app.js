// User class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Form handler
class FormHandler {
    constructor() {
        this.form = document.getElementById('userForm');
        this.messageDiv = document.getElementById('message');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitForm();
        });
    }

    submitForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const user = new User(name, email);
        console.log("User submitted:", user);

        this.messageDiv.textContent = `Success! Thank you, ${user.name}`;
        this.form.reset();
    }
}

// Initialize form handler
new FormHandler();
