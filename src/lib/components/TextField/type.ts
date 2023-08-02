import { InputHTMLAttributes } from 'react';

export interface TextFieldType extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  label: string;
  message?: string;
  errorMessage?: string;
  successMessage?: string;
  $error?: boolean;
  $success?: boolean;
}
