import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === '.' || val === '=';
}
// diatas itu fungsi buat operator. jadi ketika user ngetik tambah dan desimal, maka dia akan return null, 
// liat line 11. 

const Button = props => (
    <div className={`buttonWrapper ${isOperator(props.children) ? null : 'operator'}`}
    onClick={() => props.handleClick(props.children) }>
    {props.children}
    </div>
)
// diatas adalah ternary operator untuk nampilin css kepada tombol dan operator. jadi jika yang muncul adalah
// operator, maka warna cssnya adalah class operator, dan vice versa untuk button number
export default Button