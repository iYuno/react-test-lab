import React, { useRef, useState, useImperativeHandle, useCallback } from "react"
import { cn } from "../../lib"
import styles from "./input.module.css"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', placeholder = '', ...props }, ref) => {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    const handleClick = useCallback(() => {
      if (inputRef.current && document.activeElement !== inputRef.current) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 1);
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
          inputValue ? styles["input-container-active"] : '',
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
              inputValue ? styles["input-label-active"] : ''
            )}>{placeholder}</span> : null
        }
        <input
          type={type}
          className={cn(
            styles["input-field"],
            inputValue ? styles["input-field-active"] : '',
            placeholder ? styles["input-field-with-label"] : '',
          )}
          
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          {...props}
          prefix=""
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }