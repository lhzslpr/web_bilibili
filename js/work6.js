var map1 = new BMap.Map("map1");   
var map2 = new BMap.Map("map2");   
var map3 = new BMap.Map("map3");    

var geo = new BMap.Geocoder();
var cen = new BMap.Point(120.018354,30.295756);
var school = new BMap.Point(120.015352, 30.295007);
map1.centerAndZoom(cen, 12); 
map1.enableScrollWheelZoom(true);   


map1.centerAndZoom("西湖", 12);
var findhotle = new BMap.LocalSearch(map1, {
  renderOptions: {
    map: map1
  }
});
findhotle.searchNearby("宾馆", "杭州市西湖");


map2.centerAndZoom(school, 18);
map2.enableScrollWheelZoom(true);  

var local = new BMap.LocalSearch(school, {
    renderOptions: {
        map: map2
    }
});  
local.searchNearby("宾馆", "西湖");
var transit = new BMap.TransitRoute(map2, {
    renderOptions: {
        map: map2,
        panel:"table"
    }
});

var walk = new BMap.WalkingRoute(map2, {
    renderOptions: {map: map2,panel:"table"}
});
var temp=new BMap.Point();
local.setMarkersSetCallback(function (weizhi) {
    for (var i = 0; i < weizhi.length; i++) {
        weizhi[i].marker.addEventListener("click", function (e) {
            walk.clearResults();
            transit.setSearchCompleteCallback(function (res) {
                if(res.getNumPlans() == 0){walk.search(school,temp);}
            });
            temp = this.point;
            transit.search(school, this.point);
        })
    }
})




map3.centerAndZoom(cen, 12);
map3.enableScrollWheelZoom(true);
map3.centerAndZoom(school,18);    


var caochangcontent = "	<div style=' width: 400px;height: 300px;  padding: 1%;'><img src='img/4-6.png' style=' width: 400px;height: 200px;'><div style=' font-weight: bold; font-size: 30px;'>操场</div><div>简介XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div><div style='width: 70px;border-radius: 5px;background-color: #FF8E1F;font-weight: bold;color: white;line-height: 30px;margin-left: 330px;height: 30px;'>查看详情</div></div>"
var caochang=new BMap.Point(120.013557,30.294953);
var caochangmaker=new BMap.Marker(caochang);
caochangmaker.addEventListener("click",function () {
    this.openInfoWindow(new BMap.InfoWindow(caochangcontent));

})
map3.addOverlay(caochangmaker);


var bowenyuancontent ="	<div style=' width: 400px;height: 300px;  padding: 1%;'><img src='img/4-6.png' style=' width: 400px;height: 200px;'><div style=' font-weight: bold; font-size: 30px;'>操场</div><div>简介XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div><div style='width: 70px;border-radius: 5px;background-color: #FF8E1F;font-weight: bold;color: white;line-height: 30px;margin-left: 330px;height: 30px;'>查看详情</div></div>"
var bowenyuan=new BMap.Point(120.016459,30.295741);
var bowenyuanmaker=new BMap.Marker(bowenyuan);
bowenyuanmaker.addEventListener("click",function () {
    this.openInfoWindow(new BMap.InfoWindow(bowenyuancontent));

})
map3.addOverlay(bowenyuanmaker);

var shitangcontent ="	<div style=' width: 400px;height: 300px;  padding: 1%;'><img src='img/4-6.png' style=' width: 400px;height: 200px;'><div style=' font-weight: bold; font-size: 30px;'>操场</div><div>简介XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div><div style='width: 70px;border-radius: 5px;background-color: #FF8E1F;font-weight: bold;color: white;line-height: 30px;margin-left: 330px;height: 30px;'>查看详情</div></div>"
var shitang=new BMap.Point(120.018435,30.295179);
var shitangmaker=new BMap.Marker(shitang);
shitangmaker.addEventListener("click",function () {
    this.openInfoWindow(new BMap.InfoWindow(shitangcontent));
})
map3.addOverlay(shitangmaker);


var shuyuancontent = "	<div style=' width: 400px;height: 300px;  padding: 1%;'><img src='img/4-6.png' style=' width: 400px;height: 200px;'><div style=' font-weight: bold; font-size: 30px;'>操场</div><div>简介XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div><div style='width: 70px;border-radius: 5px;background-color: #FF8E1F;font-weight: bold;color: white;line-height: 30px;margin-left: 330px;height: 30px;'>查看详情</div></div>"
var shuyuan=new BMap.Point(120.020418,30.295728);
var shuyuanmaker=new BMap.Marker(shuyuan);
shuyuanmaker.addEventListener("click",function () {
    this.openInfoWindow(new BMap.InfoWindow(shuyuancontent));

})
map3.addOverlay(shuyuanmaker);