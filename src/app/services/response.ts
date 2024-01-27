export interface ServiceResponse<T> {
  data?: T;
  isSuccess: boolean;
  errors: ErrorResponse[];
}

export interface ErrorResponse {
  field: string;
  message: string;
}

export function toResponse<T>(response: any): ServiceResponse<T> {
  return {
    data: response.data,
    isSuccess: response.isSuccess,
    errors: response.errors,
  };
}
