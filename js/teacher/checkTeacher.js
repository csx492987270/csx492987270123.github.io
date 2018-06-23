
define(["jquery", "cookie", "text!tpls/checkTeacher.html", 'template'], function ($, $$, checkTeacherTpl, template) {
    return function (dataid) {
        $.ajax({
            url: 'https://www.apiopen.top/weatherApi?city=成都',
            type: 'get',
            success: function (res) {
                if (res.code == "200") {
                    var img = JSON.parse($.cookie("name")).img;
                    var res = res.data.forecast[dataid];
                    var templateshow = template.render(checkTeacherTpl, res);
                    var $checkTeacherlist = $(templateshow);
                    $("#checkTeacher").remove();
                    $checkTeacherlist.appendTo("body").modal();
                    $("#imgs img").attr("src", img);
                }
            }
        });

    }
});