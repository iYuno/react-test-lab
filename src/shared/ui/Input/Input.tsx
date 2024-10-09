import React, { useRef, useImperativeHandle, useCallback, ReactElement } from "react"
import { cn } from "../../lib"
import styles from "./input.module.css"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: ReactElement,
  errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', placeholder = '', value, onChange, suffix, errorMessage, ...props }, ref) => {

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

    const handleClick = useCallback(() => {
      if (inputRef.current && document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    const handleFocus = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return (
      <div
        className={cn(
          styles["input-container"],
          inputRef.current?.value ? styles["input-container-active"] : '',
          className
        )}
        onClick={handleClick}
        onFocus={handleFocus}
        tabIndex={0}
      >
        {
          placeholder ?
            <span className={cn(
              styles["input-label"],
              inputRef.current?.value ? styles["input-label-active"] : ''
            )}>{placeholder}</span> : null
        }
        <input
          type={type}
          className={cn(
            styles["input-field"],
            inputRef.current?.value ? styles["input-field-active"] : '',
            placeholder ? styles["input-field-with-label"] : '',
          )}
          value={value}
          onChange={onChange}
          ref={inputRef}
          {...props}
        />
        {errorMessage && <span className="absolute -bottom-6 text-destructive">{errorMessage}</span>}
        {suffix || null}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }