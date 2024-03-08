let currDiv = 0;
const allDivs = document.querySelectorAll('div');

function validate()
{
    if(currDiv==0)
    {
        let fName = document.getElementById("firstName").value;
        let lName = document.getElementById("lastName").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let street = document.getElementById("street").value;
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;
        let zip = document.getElementById("zip").value;
        let pTag = document.getElementById("error1");
        console.log(fName);
        console.log(lName);
        console.log(phone);
        console.log(email);
        console.log(street);
        console.log(city);
        console.log(state);
        console.log(zip);

        let emailSplit = email.split('@');

        if(fName.length <= 0 || lName.length <= 0)
        {
            pTag.innerHTML = "Must have names";
            return false;
        }
        if(fName==lName)
        {
            pTag.innerHTML = "Cannot have same first and last name";
            return false;
        }
        if(/\d/.test(fName) || /\d/.test(lName))
        {
            pTag.innerHTML = "Cannot have number in name";
            return false;
        }
        if (phone.length != 11 || /\D/.test(phone))
        {
            pTag.innerHTML = "Invalid Phone Number";
            return false;
        }
        if(email.length <=0 || emailSplit.length < 2 || emailSplit[0].length <= 0 || !emailSplit[1].includes('.'))
        {
            pTag.innerHTML = "Invalid Email";
            return false;
        }
        if(street.length <=0)
        {
            pTag.innerHTML = "Invalid Street";
            return false;
        }
        if(city.length <=0)
        {
            pTag.innerHTML = "Invalid Phone Number";
            return false;
        }
        if(state.length <=0)
        {
            pTag.innerHTML = "Invalid State";
            return false;
        }
        if(zip.length < 5)
        {
            pTag.innerHTML = "Invalid ZIP Code";
            return false;
        }
        else
        {
            slideOut();
            return true;
        }
    }
    else if(currDiv == 1)
    {
        let resume = document.getElementById("resume").value;
        let cv = document.getElementById("cv").value;
        let pTag = document.getElementById("error2");

        if (resume === "")
        {
            pTag.innerHTML = "Please include Resume File";
            return false;
        }

        if(cv ==="")
        {
            pTag.innerHTML = "Please include your cover letter";
            return false
        }

        slideOut();
        return true;
    }
    else if(currDiv==2)
    {
        let HLE = document.getElementById("HLE").value;
        let school = document.getElementById("school").value;
        let areaOfStudy = document.getElementById("areaOfStudy").value;
        let gradYear = document.getElementById("gradYear").value;
        let employmentHistory = document.getElementById("employmentHistory").value;
        let pTag = document.getElementById("error3");

        console.log(HLE);
        if (HLE.length<=0)
        {
            pTag.innerHTML = "Invalid Higher Level of Education";
            return false;
        }
        if (school.length<=0)
        {
            pTag.innerHTML = "Invalid School";
            return false;
        }
        if (areaOfStudy.length<=0)
        {
            pTag.innerHTML = "Invalid Area of Study";
            return false;
        }
        if (gradYear.length<=3 || gradYear >2024)
        {
            pTag.innerHTML = "Invalid Graduation Year";
            return false;
        }
        if (employmentHistory.length<=0)
        {
            pTag.innerHTML = "Invalid Employement History";
            return false;
        }
        slideOut();
        return true;
    }
    else if (currDiv == 3)
    {
        let pTag = document.getElementById("error4");
        let firstCompany = document.getElementById("firstCompanyName").value;
        let fromFirstDate = document.getElementById("fromFirstDate").value;
        let tillFirstDate = document.getElementById("tillFirstDate").value;
        let jobResponsibilities = document.getElementById("jobResponsibilities").value;


        if(firstCompany === "" || fromFirstDate ==="" || tillFirstDate ==="" || jobResponsibilities ==="")
        {
            pTag.innerHTML = "Please fill in all required fields";
            return false
        }

        slideOut();
        return true;
    }
    else if(currDiv == 4)
    {
        let pTag = document.getElementById("error5");
        let cert = document.getElementById("certifications").value;
        let pL = document.getElementById("programmingLanguages").value;

        if (cert ==="" || pL ==="")
        {
            pTag.innerHTML = "Please fill in all required fields";
            return false
        }
        slideOut();
        return true;
    }
    else if (currDiv == 5)
    {
        let pTag = document.getElementById("error6");
        let strDate = document.getElementById("startDate").value;
        let prefWorkSchedule = document.getElementById("prefWorkSchedule").value;
        let yesRelocate = document.getElementById("yesRelocate").value;
        let noRelocate = document.getElementById("noRelocate").value;

        if(strDate === "" || prefWorkSchedule === "" || yesRelocate === "" || noRelocate ==="")
        {
            pTag.innerHTML = "Please fill in all required fields";
            return false
        }

        if(yesRelocate === "" && noRelocate ==="" || noRelocate ==="" && yesRelocate ==="")
        {
            pTag.innerHTML = "Only one option at a time";
            return false
        }
        slideOut();
        return true;
    }
    else if(currDiv == 6)
    {
        let pTag = document.getElementById("error7");
        let refName = document.getElementById("refName").value;
        let refContactNum = document.getElementById("refContactNum").value;
        let relationship = document.getElementById("relationship").value;
        
        if(refName === "" || refContactNum.length<=0 || relationship === "")
        {
            pTag.innerHTML = "Please fill in all required fields";
            return false;
        }

        if(refContactNum.length != 11 || /\D/.test(refContactNum))
        {
            pTag.innerHTML = "Invalid Contact Number";
            return false;
        }

        slideOut();
        return true;
    }
    else if(currDiv == 7)
    {
        slideOut();
        return true;
    }
    else if(currDiv ==8)
    {
        slideOut();
        return true;
    }
    else if(currDiv ==9)
    {
        return true;
    }
}

function slideOut()
{
    console.log(allDivs[currDiv]);
    allDivs[currDiv].classList.remove('slideInFromLeft');
    allDivs[currDiv].classList.add('slideOut');
    console.log(allDivs[currDiv]);
    currDiv = (currDiv+1);
    console.log(allDivs[currDiv]);
    allDivs[currDiv].classList.remove('hidden');
    allDivs[currDiv].classList.add('shown');
}

function formSubmit()
{
    return true;
}