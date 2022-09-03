function post(test)
{
    alert(test);
    $.ajax(
        {
            url:"/",
            type:"POST",
            success: function () {
                setInterval(function()
                 {
                    location.href="/";
                 },50);
              },
            async:"false",
            data:{data:test.toString()},
        }
    )
}