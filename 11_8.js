let userNam = prompt("Who's there?", " ");

if  (userName === 'Admin') {

    let pass = prompt( 'password', '');

    if (pass === TheMaster') {
        alert( 'Welcome' );
    } else if ( pass === '' || === null) {
     alert ('Canceled' );
    } else {
        alert( 'wrong password' );
    }

    }   else if (userName === '' || userName=== null) {
        alert ( 'Canceled' );
    }   else{
        alert( " I don't know you" );
    
}