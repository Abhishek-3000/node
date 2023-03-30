const yargs = require('yargs');
const bank_function = require('./bank_function.js');
yargs.command({
    command : 'add_account',
    describe: "Adding a account",
    builder: {
        customer_id : {
            describe: 'customer id',
            demandOption: true,
            type : 'string'
        },
        customer_address: {
            describe: 'customer address',
            demandOption: true,
            type : 'string'
        },
        account_type:{
            rating:' account type',
            demandOption: true,
            type: 'string'
        },
        account_balance:{
            describe:'account balance',
            demandOption: true,
            type: 'number' 
        },
        branch:{
            describe:'branch',
            demandOption: true,
            type:'string'
        },
        account_status:{
            describe:'account status',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        bank_function.addaccount(argv.customer_id, argv.customer_address,argv.account_type,argv.account_balance,argv.branch,argv.account_status);		
    }
})


yargs.command({
    command : 'status',
    describe: "account status",
    handler: function(argv){
        bank_function.get_status();		
    }
})

yargs.command({
    command : 'balance',
    describe: "account balance",
    handler: function(argv){
        bank_function.get_balance();		
    }
})

yargs.command({
    command : 'account_type',
    describe: "account type",
    handler: function(argv){
        bank_function.get_type();		
    }


})

yargs.parse();