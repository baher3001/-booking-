let inputs = document.querySelectorAll('.form-control');
let Button = document.getElementById('btn');

console.log(Button)

for(let i = 0; i<inputs.length;i++)
{
    
    inputs[i].onblur = function(e)
    {
        if(e.target.value.length<1)
        {
            e.target.nextElementSibling.style.display="block";
           
        }
        else
        {
            e.target.nextElementSibling.style.display="none";

        }
    
    }
    
      

}

Button.addEventListener('click',()=>{


inputs.value=null;
inputs[1].value = null;
inputs[2].value = null;
inputs[3].value = null;
inputs[4].value=null;
inputs[5].value=null;
inputs[6].value=null;  

});
