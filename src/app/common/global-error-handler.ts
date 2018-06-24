import { ErrorHandler } from '@angular/core';

// Global Error Handler
export class GlobalErrorHandler implements ErrorHandler {

    handleError(error) {
        alert('Unexpected error occured.');
        console.log(error);
    }
}
