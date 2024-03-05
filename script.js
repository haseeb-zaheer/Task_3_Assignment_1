let currDiv = 0;
const allDivs = document.querySelectorAll('div');

function validate()
{
    return true;
}

function slideOut()
{
    allDivs[currDiv].classList.remove('slideInFromLeft');
    allDivs[currDiv].classList.add('slideOut');

    currDiv++;

    allDivs[currDiv].classList.remove('hidden');
    allDivs[currDiv].classList.add('shown');
}