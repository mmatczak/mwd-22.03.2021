import {Employee} from './employee.js';

export class EmployeeComponent {
    constructor(dom, employees) {
        this.employees = employees;
        this.dom = dom;
        this.handleFormSubmit();
    }

    // JavaScript ABC -> apply bind call

    handleFormSubmit() {
        const form = this.dom.querySelector('form');
        form.addEventListener('submit', this.save);
    }

    save = event => {
        event.preventDefault();
        const {target: form} = event;
        const firstNameInput = form.querySelector('input#firstName');
        const firstName = firstNameInput?.value || '';
        const lastNameInput = form.querySelector('input#lastName');
        const lastName = lastNameInput?.value || '';

        const employee = new Employee(firstName, lastName)
        this.employees.saveOne(employee)
            .then(savedEmployee => console.log(savedEmployee));
    }

    // save(event) {
    //     event.preventDefault();
    //     const {target: form} = event;
    //     const firstNameInput = form.querySelector('input#firstName');
    //     const firstName = firstNameInput?.value || '';
    //     const lastNameInput = form.querySelector('input#lastName');
    //     const lastName = lastNameInput?.value || '';
    //
    //     const employee = new Employee(firstName, lastName)
    //     this.employees.saveOne(employee)
    //         .then(savedEmployee => console.log(savedEmployee));
    //
    // }
}
