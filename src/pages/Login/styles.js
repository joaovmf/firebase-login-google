import styled from 'styled-components'

export const AreaLogin = styled.div `
    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top:20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #000;

    h1{
        font-size: 20px;
    }

    button {
        display: flex;
        align-items: center;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        border: 0px;
        outline: none;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 15px;
        transition: 0.4s;
    }

    button:hover{
        background-color:#ccc;
    }

    p {
        color: gray;
    }

    .form-input {
        text-align: left;

        label {
            display: block;
        }

        input {
            margin-bottom: 20px;
            padding: 30px;
            font-size: 14px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 250px;
            transition: 0.3s;

            &:hover {
                border: 2px solid black;
            }
        }
    }
`