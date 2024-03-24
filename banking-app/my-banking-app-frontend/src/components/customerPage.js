import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { changeCustomerPassword, depositAmount, findAllCustomer, findCustomer, withdrawAmount } from '../slice/customerSlice';
import { findTransaction, transactionStore } from '../slice/transactionSlice';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

function CustomerPage(){
    let [customer, setCustomer] = useState({});
    let [account, setAccount] = useState({});
    let [customerTransaction, setCustomerTransaction] = useState([{}]);
    let dispatch = useDispatch();
    let [contactForm, setContactForm] = useState({});
    let [userPasswordReset, setUserPasswordReset] = useState({"oldPassword": "", "newPassword": "", "repeatNewPassword": ""});
    let navigate = useNavigate();
    useEffect
}