import * as React from 'react';
import './page-login.css'
import TextField from '@mui/material/TextField';
import bcgCreate from "../../assets/bcgCreate.svg";
// import { ReactComponent as Emoji } from "../../assets/emoji.svg";
import Emoji from "../../assets/emoji.svg";
import Kiss from "../../assets/kiss.svg";
import Checkbox from "../../components/checkbox";
import CountDown from "../../components/count-down";


function PageLogin() {

    const [errorEmail, setErrorEmail] = React.useState(false);

    const [errorPw, setErrorPw] = React.useState(true);

    const [errorCode, setErrorCode] = React.useState(true);

    const [textLength, setTextLength] = React.useState(false);

    const [textFormat, setTextFormat] = React.useState(false);

    const [textAttention, setTextAttention] = React.useState(false);

    return (<div>
        <div className='page-login'>
            <div className='page-login__form'>
                <img src={bcgCreate} alt='.'/>
                <div className='page-login__label'>
                    <TextField
                        type='email'
                        className={`${errorEmail ? `page-login__input-error` : null}`}
                        placeholder='e-mail adress'
                        variant="outlined"/>
                    <div className={`page-login__error ${errorEmail ? `page-login__error-show` : null}`}>
                        {textFormat ? 'Wrong format' : 'Unregistered'}
                    </div>
                </div>
                <div className='page-login__form-password'>
                    <div className='page-login__label'>
                        <TextField
                            className={`${errorPw ? `page-login__input-error` : null}`}
                            placeholder='Password'
                            type="password"
                            defaultValue=""
                        />
                        <div className={`page-login__error ${errorPw ? `page-login__error-show` : null}`}>
                            {textLength ? 'More than 8 characters' : 'Wrong password'}
                        </div>
                    </div>
                    <button className='page-login__btn'>Go!</button>
                </div>
                <div className='page-login__recovery'>
                    <Checkbox text='Save account information'/>
                    <div>
                        <span>Forgot ID?</span>
                        <span>Forgot password?</span>
                        <span>Join</span>
                    </div>
                </div>
            </div>

            <div className='page-login__form'>
                <img src={bcgCreate} alt='.'/>
                <div className='page-login__label page-login__label-code'>
                    <TextField
                        type='tel'
                        className={`${errorCode ? `page-login__input-error` : null}`}
                        placeholder='Mobile phone number'
                        variant="outlined"/>
                    <div className='page-login__send'>
                        {errorCode ? 'Get code' : 'Resend'}
                    </div>
                    <div className={`page-login__error ${errorCode ? `page-login__error-show` : null}`}>
                        {textFormat ? 'Wrong format' : 'Unregistered'}
                    </div>
                </div>
                <div className='page-login__form-password'>
                    <div className='page-login__label'>
                        <TextField
                            type=''
                            className={`${errorPw ? `page-login__input-error` : null}`}
                            placeholder='Verification code'
                            defaultValue=""
                        />
                        <CountDown hours={0} minutes={5}/>
                        <div className={`page-login__error ${errorPw ? `page-login__error-show` : null}`}>
                            {textLength ? 'Code sented' : 'Wrong code'}
                        </div>
                    </div>
                    <button className='page-login__btn'>Find!</button>
                </div>
                <div className='page-login__attention'>
                    {textAttention ?
                        <>
                            <img src={Emoji} alt=""/>
                            <div>There is no matching account.<br/>Please contact the customer center.</div>
                        </> :
                        <>
                            <img src={Kiss} alt=""/>
                            <div>Your email address is<span> bryce.right@bcr.com</span></div>
                        </>
                    }
                </div>

            </div>

            <div className='page-login__form' style={{marginBottom: '130px'}}>
                <img src={bcgCreate} alt='.'/>
                <div className='page-login__label page-login__label-code'>
                    <TextField
                        type='email'
                        className={`${errorCode ? `page-login__input-error` : null}`}
                        placeholder='e-mail adress'
                        variant="outlined"/>
                </div>
                <div className='page-login__label page-login__label-code'>
                    <TextField
                        type='tel'
                        className={`${errorCode ? `page-login__input-error` : null}`}
                        placeholder='Mobile phone number'
                        variant="outlined"/>
                    <div className='page-login__send'>
                        {errorCode ? 'Get code' : 'Resend'}
                    </div>
                    <div className={`page-login__error ${errorCode ? `page-login__error-show` : null}`}>
                        {textFormat ? 'Wrong format' : 'Unregistered'}
                    </div>
                </div>
                <div className='page-login__form-password'>
                    <div className='page-login__label'>
                        <TextField
                            type=''
                            className={`${errorPw ? `page-login__input-error` : null}`}
                            placeholder='Verification code'
                            defaultValue=""
                        />
                        <CountDown hours={0} minutes={5}/>
                        <div className={`page-login__error ${errorPw ? `page-login__error-show` : null}`}>
                            {textLength ? 'Code sented' : 'Wrong code'}
                        </div>
                    </div>
                    <button className='page-login__btn'>Find!</button>
                </div>
                <div className='page-login__attention'>
                    {textAttention ?
                        <>
                            <img src={Emoji} alt=""/>
                            <div>There is no matching account.<br/>Please contact the customer center.</div>
                        </> :
                        <>
                            <img src={Kiss} alt=""/>
                            <div>Your email address is<span> bryce.right@bcr.com</span></div>
                        </>
                    }
                </div>

            </div>

        </div>
    </div>);
}

export default PageLogin;

