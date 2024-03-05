let currDiv = 0;
const allDivs = document.querySelectorAll('div');

function validate()
{
    return true;
}

function slideOut()
{
    console.log(allDivs[currDiv]);
    allDivs[currDiv].classList.remove('slideInFromLeft');
    allDivs[currDiv].classList.add('slideOut');
    allDivs[currDiv].classList.remove('shown');
    allDivs[currDiv].classList.add('hidden');
    console.log(allDivs[currDiv]);
    currDiv = (currDiv+1);
    console.log(allDivs[currDiv]);
    allDivs[currDiv].classList.remove('hidden');
    allDivs[currDiv].classList.add('shown');
}

function formSubmit()
{
    if (validate())
    {
       slideOut();
        return true;
    }
    else
        alert("No");
}