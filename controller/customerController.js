import CustomerModel from "../models/customerModel.js";
import {customer,bouquets,order} from "../db/database.js";

let clickTableRow = 0;

let checkId = false;
let checkName = false;
let checkAddress = false;
let checkTel = false;

let cId = $('#customerId').val()
let cName = $('#customerName').val()
let cCity = $('#customerAddress').val()
let cTel = $('#customerContact').val()

$('#submitC').on('click' , ()=>{

    $('#submitC').prop('disabled' , true);

    checkId = false;
    checkName = false;
    checkAddress = false;
    checkTel = false;

    let cId = $('#-inputCustomerId').val();
    let cName = $('#_inputCustomerName').val();
    let city = $('#inputCityC').val();
    let tel = $('#inputTelephoneC').val();