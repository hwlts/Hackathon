$("#deviceType_All").click(function()
            {
                $('[name=deviceType]:checkbox').each(function()
                {
                    this.checked = $("#deviceType_All").get(0).checked;
                });
            });

$('[name=deviceType]:checkbox').click(function()
            {
                var flag = true;
                $('[name=deviceType]:checkbox').each(function()
                {
                    if(!this.checked)
                        flag = false;
                });
                $("#deviceType_All").get(0).checked = flag;
            });

$("#cate_All").click(function()
{
    $('[name=cate]:checkbox').each(function()
    {
        this.checked = $("#cate_All").get(0).checked;
    });
});

$('[name=cate]:checkbox').click(function()
{
    var flag = true;
    $('[name=cate]:checkbox').each(function()
    {
        if(!this.checked)
            flag = false;
    });
    $("#cate_All").get(0).checked = flag;
});

$("#price_All").click(function()
{
    $('[name=price]:checkbox').each(function()
    {
        this.checked = $("#price_All").get(0).checked;
    });
});

$('[name=price]:checkbox').click(function()
{
    var flag = true;
    $('[name=price]:checkbox').each(function()
    {
        if(!this.checked)
            flag = false;
    });
    $("#price_All").get(0).checked = flag;
});


