  
module.exports = getDate;

function getDate()
{
    const today = new Date();
    const curDay = today.getDay();

    var options = {
    	weekday: "long",
    	day: "numeric",
    	month: "long"
    };
    return today.toLocaleDateString("en-US",options);
   
}