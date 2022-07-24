import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

const CustomInput = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    hasError: boolean;
  }
>((props, ref) => {
  const { hasError = false, ...rest } = props;
  return (
    <input
      ref={ref}
      className={classNames({
        'appearance-none  h-[56px] rounded px-3 outline-none text-black border w-full box-border':
          true,
        'border border-red-700': hasError,
        '': !hasError
      })}
      style={{ boxShadow: hasError ? '0px 0px 3px 0px #b50d0da3' : 'none' }}
      {...rest}
    />
  );
});

CustomInput.displayName = 'CustomInput';
export default CustomInput;
