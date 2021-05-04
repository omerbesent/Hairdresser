import { showMessage } from "react-native-flash-message";

const errorMessage = (title, message) => {
    return showMessage({
        message: title,
        description: message,
        type: "danger",
    });
}

const successMessage = (title, message) => {
    return showMessage({
        message: title,
        description: message,
        type: "success",
    });
}

export { successMessage, errorMessage };