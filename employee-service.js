export class EmployeeService {
    saveOne(employee) {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve(employee);
            }, 2000));
    }
}
