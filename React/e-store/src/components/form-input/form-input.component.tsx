import { InputHTMLAttributes,FC } from 'react';
import {FormInputLabel,Input,Group} from './form-input.styles';

type FormInputProps = {
  label:string,
  handleChange?:()=>{}
} & InputHTMLAttributes<HTMLInputElement>

const FormInput:FC<FormInputProps> = ({ handleChange, label, ...otherProps }) => {
  return (
      <Group>
          <Input onChange={handleChange} {...otherProps} />
          {label && <FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>{label}</FormInputLabel>}
      </Group>
  );
};

export default FormInput;