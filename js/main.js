const acc = document.querySelectorAll('.a');


acc.forEach (func => {

    func.addEventListener('click',e=>{

        acc.forEach ( item=> {

            if(item !==e.currentTarget){

                item.classList.remove('active');
            }
        } );

       
       func.classList.toggle('active');
    })

});

