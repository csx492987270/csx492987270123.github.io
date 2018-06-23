require.config({
    baseUrl: "js",//以js为基础
    paths: {//配置路径 注意不能添加后缀 。js
        jquery: "lib/jquery-2.1.4",
        bootstrap: "../assets/bootstrap/js/bootstrap",
        text:"lib/text",
        tpls:"../tpls",
        template:"lib/template-web",
        cookie:"lib/jquery.cookie",
        datetime:"../assets/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker",
        datetimeLang:"../assets/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN",
        upload:"../assets/uploadify/jquery.uploadify",
        ueConf:"../assets/ueditor/ueditor.config",
        ueAll:"../assets/ueditor/ueditor.all",
        echarts:"lib/echarts.min"
},
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        datetimeLang: {
            deps: ["datetime"]
        },
        upload: {
            deps :["jquery"]
        },
        ueAll:{
           deps: ["ueConf"]
        },
        echarts:{
           deps: ["jquery"]
        },     
    }
})
require(["jquery","teacher/list","course/list" ,"course/addCourse" ,"person/personcenter","echart/echartdd","bootstrap","cookie"], function ($,teacherlist,courselist,addCourse,personcenter,echartdd) {
    // var usename = window.sessionStorage.getItem("name");
    var usename = $.cookie("name")
    if(!usename){
        location.href ="login.html";
        return
    };
     var usename = JSON.parse(usename);
    console.log(usename)
    var name = usename.name
    var img = usename.img;
    $(".profile h4").html(name);
    $(".pos img").attr("src",img);
    $(".list-group").on("click", "a", function () {
        $(this).addClass("active").siblings().removeClass("active");
        // $(".title").html($(this).html());
        var d= $(this).index();
        switch (d) {
            case 0:
                teacherlist(); 
                break;
            case 1: 
                addCourse(); 
                break;
            case 2:
                 courselist();
                break;
            case 3:
                echartdd();
                break;
        }
    });
     $(".list-group a:eq(0)").trigger("click");
     $("#person").on("click",function(){
         UE.delEditor('editor');
         personcenter();
     });
      $("#windowClose").on("click",function(){
          window.location.href= "login.html";
     });
     
})
