const fs = require('fs');
const chalk = require('chalk');

const addaccount = function(customer_id,customer_address,account_type,account_balance,branch,account_status)
{
    const bank_function = loadNotes();
    const duplicateNotes = bank_function.filter(function (x) 
    {
        return x.customer_id === customer_id;
    });
    if(duplicateNotes.length === 0)
    {
        bank_function.push({
            customer_id:customer_id,
            customer_address:customer_address,
            account_type:account_type,
            account_balance:account_balance,
            branch:branch,
            account_status
        })
        saveNotes(bank_function);
        console.log('\nNew Account Added Successfully!!!\n');
    }
    else
    {
        console.log("\n Account already existed!!!\n");
    }
}


const get_status = function()
{
    const bank_function = loadNotes()
    
    console.log(chalk.green.inverse(" <= Account Status => "));

    bank_function.forEach((note) => 
    {
        console.log("Customer Id : " + chalk.red(note.customer_id) + " account status : " + chalk.blue(note.account_status))
    });
}

const get_balance = function()
{
    const bank_function = loadNotes()
    
    console.log(chalk.green.inverse(" <= Account Balance => "));

    bank_function.forEach((note) => 
    {
        console.log("Customer Id : " + chalk.red(note.customer_id) + " Balance : " + chalk.blue(note.account_balance))
    });
}

const get_type = function()
{
    const bank_function = loadNotes()
    
    console.log(chalk.green.inverse(" <= Account Type => "));

    bank_function.forEach((note) => 
    {
        console.log("Customer Id : " + chalk.red(note.customer_id) + " Account Type : " + chalk.blue(note.account_type))
    });
}




const loadNotes = function() 
{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
}

const saveNotes = function(notes)  
{
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

module.exports = 
{
    addaccount : addaccount,
    get_status: get_status,
    get_balance:get_balance,
    get_type:get_type,
   
    
}