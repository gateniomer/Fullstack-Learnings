import {FormInputLabel,Input,Group} from './form-input.styles.jsx';

// const FormInput = ({label, ...otherPros}) => {
//   return (
//     <div className="group">
//         {label && (<label className={`${otherPros.value.length} ? 'shrink': ''} form-input-label`}>{label}</label>)}
//         <input className="form-input" {...otherPros}/>
//     </div>
//   )
// }
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
      <Group>
          <Input onChange={handleChange} {...otherProps} />
          {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
      </Group>
  );
};

export default FormInput;