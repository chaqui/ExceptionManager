import { CustomError } from "../CustomError";
import { HttpErrors } from "../HttpErrors";

describe('CustomError', () => {
    it('should create a badRequest error', () => {
        const error = CustomError.badRequest('Bad Request Error');
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe('Bad Request Error');
        expect(error.statusCode).toBe(HttpErrors.BadRequest);
    });

    it('should create a notFound error', () => {
        const error = CustomError.notFound('Not Found Error');
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe('Not Found Error');
        expect(error.statusCode).toBe(HttpErrors.NotFound);
    });

    it('should create an internalServerError error', () => {
        const error = CustomError.internalServerError('Internal Server Error');
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe('Internal Server Error');
        expect(error.statusCode).toBe(HttpErrors.InternalServerError);
    });

    it('should create an unauthorized error', () => {
        const error = CustomError.unauthorized('Unauthorized Error');
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe('Unauthorized Error');
        expect(error.statusCode).toBe(HttpErrors.Unauthorized);
    });

    it('should create a forbidden error', () => {
        const error = CustomError.forbidden('Forbidden Error');
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe('Forbidden Error');
        expect(error.statusCode).toBe(HttpErrors.Forbidden);
    });

    it('should create a conflict error', () => {
        const error = CustomError.conflict('Conflict Error');
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe('Conflict Error');
        expect(error.statusCode).toBe(HttpErrors.Conflict);
    });

    it('should create a notDataFound error', () => {
        const error = CustomError.notDataFound('No Content Error');
        expect(error).toBeInstanceOf(CustomError);
        expect(error.message).toBe('No Content Error');
        expect(error.statusCode).toBe(HttpErrors.NoContent);
    });

    it('should return the correct string representation of the error', () => {
        const error = CustomError.badRequest('Bad Request Error');
        expect(error.toString()).toBe('CustomError: Bad Request Error');
    });
});