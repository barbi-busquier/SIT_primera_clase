$(document).ready (
    function() {
        setInterval(function()
        {
            let today=new Date()
            let time= today.toLocaleTimeString()
            $("#reloj").html(time)
        }, 1000)
    }
)