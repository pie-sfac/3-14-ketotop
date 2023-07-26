export interface TextFieldType extends Partial<HTMLInputElement> {
  label: string;
  message?: string;
  errorMessage?: string;
  successMessage?: string;
  $error?: boolean;
  $success?: boolean;
}
