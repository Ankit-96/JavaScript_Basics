
    var user_det = {
        fname: '',
        lname: '',
        user_id: '',
        mob: '',
        password: ''
    };

    var user_Det = [{fname:'Ankit',lname:'Raj',user_id:'ankit',mob:'7064503339',password:'123'},
                    {fname:'Sahil',lname:'Hussain',user_id:'sahil',mob:'898765467',password:'234'},
                    {fname:'Admin',lname:'',user_id:'admin',mob:'9465893935',password:'admin'},
                    {fname:'Stuti',lname:'Agarwal',user_id:'stuti',mob:'875623456',password:'345'}];

    function validate() {
        if(document.getElementById("uid").value !== '' && document.getElementById("pid").value !== '') {
            var user = user_Det.find(function(user){ return user.user_id === 
            document.getElementById("uid").value;});
            if(user.user_id === 'admin' && user.password === 'admin') {
                window.open('Admin.html');
            }
            else if(user.user_id === document.getElementById("uid").value && 
            user.password === document.getElementById("pid").value) {
                window.open('Items.html');
            }
            else {
                alert("Wrong Credentials");
            }
        }
    }
    function signup() {
        window.open('Register.html');
    }
    

    function register() {
        if((document.getElementById("1").value!=="" && document.getElementById("2").value!=="" && 
        document.getElementById("3").value!=="" && document.getElementById("4").value!=="" && 
        document.getElementById("5").value!=="" && document.getElementById("6").value!=="")) {

            if(document.getElementById("5").value === document.getElementById("6").value) {
                user_det.fname = document.getElementById("1").value;
                user_det.lname = document.getElementById("2").value;
                user_det.user_id = document.getElementById("3").value;
                user_det.mob = document.getElementById("4").value;
                user_det.password = document.getElementById("5").value;

                user_Det.push(user_det);
                window.open('Items.html');
            }
            else {
                alert("Passwords don't match");
            }
        }
    }