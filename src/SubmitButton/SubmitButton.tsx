import React, { ButtonHTMLAttributes } from 'react';
import ProgressIcon from '../SubmitButton/ProgressIcon';
import '../SubmitButton/SubmitButton.css';


interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading: boolean; 
    isDone: boolean;
    label: string;
    onClick?: () => void;  
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, isDone, label, onClick, ...rest }) => {
    return (
        <button 
            {...rest} 
            className={`btn ${isLoading ? 'btn--loading' : ''} ${isDone ? 'btn--done' : ''} ${rest.className || ''}`} 
            onClick={onClick}
            aria-disabled={isLoading || isDone}
            aria-busy={isLoading}
            aria-label={label}
            role="button"
        >
            <span className="btn__text">{label}</span>
            <ProgressIcon />
        </button>
    );
}

export default SubmitButton;
