import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { changeCustomerPassword, depositAmount, findAllCustomer, findCustomer, withdrawAmount } from '../slice/customerSlice';
import { findTransaction, transactionStore } from '../slice/transactionSlice';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

function CustomerPage(){
    
}