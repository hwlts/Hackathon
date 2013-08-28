var Circle =
{
    createNew: function(s)
    {
        var circle = {};
        var sArr = s.split(",")
        circle.lng = parseFloat(sArr[0]);
        circle.lat = parseFloat(sArr[1]);
        circle.radius = parseFloat(sArr[2]);
        circle.counts = parseFloat(sArr[3]);
        circle.density = circle.counts/(circle.radius*circle.radius);
        circle.color = "#00ffff";
        circle.Show = function()
            {
                //alert(circle.lng);
                var point = new BMap.Point(circle.lng,circle.lat);
                var circleMarker = new BMap.Circle(point,circle.radius);
                circleMarker.setFillColor(circle.color);
                circleMarker.setFillOpacity(0.5);
                circleMarker.setStrokeColor(circle.color);
                circleMarker.setStrokeOpacity(0.5);
                map.addOverlay(circleMarker);
                var labelOffset = new BMap.Size(-8,-8);
                var labelMarker = new BMap.Label(circle.counts,{offset:labelOffset});
                labelMarker.setStyle({color:"red",fontSize:"16px",opacity:0.5,border:"#00ffff",backgroundColor:"#00ffff"});
                map.addOverlay(labelMarker);
                labelMarker.setPosition(point);
            };
        return circle;
    }
};

function showCircles(str)
{
    var strArr = str.split(";");
    for(var i = 0; i < strArr.length; ++i)
    {
        var c = Circle.createNew(strArr[i]);
        c.Show();
    }
}

