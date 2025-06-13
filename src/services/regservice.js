class RegService {

    acceptRegData(name, email, contact, username, password) {
        let index = email.indexOf("@gmail.com");
        if (index != -1) {
            models.saveUser(name, email, contact, username, password);
            return "Registration Successfully";
        } else {
            return "Registration Failed"
        }
    }
}
module.exports = new RegService();