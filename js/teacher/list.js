define(["jquery", "text!tpls/teacherList.html", "teacher/checkTeacher", "teacher/addTeacher", "teacher/editTeacher", 'template'], function ($, teacherListTpl, checkTeacher, addTeacher, editTeacher, template) {
    return function () {
        $.ajax({
            url: 'https://www.apiopen.top/weatherApi?city=成都',
            type: 'get',
            success: function (res) {
                var res = res.data;
                var teacherList = template.render(teacherListTpl, res);
                $(".t_body .panel-body").html(teacherList);
                $(".table td .btn-success").on("click", function () {
                    var dataId = $(this).parent("td").attr("dataid");
                    checkTeacher(dataId);
                })
                $(".row .btn-success").on("click", function () {
                    addTeacher();
                })
                $(".table td .btn-primary").on("click", function () {
                    editTeacher();
                })
            }
        });

    }
});