define(["jquery", "text!tpls/addTeacher.html", "datetime", "datetimeLang", 'template'], function ($, addTeacherTpl, template) {
    return function () {
        var $addTeacherlist = $(addTeacherTpl);
        $("#addTeacher").remove();
        $addTeacherlist.on("submit", "form", function (e) {
            e.preventDefault();
            var formData = $(this).serialize();
            console.log(formData)
            $addTeacherlist.modal("hide");

            return
        }).appendTo("body").modal();

        $addTeacherlist.find(".date-jion").datetimepicker({
            formData: "yyyy-mm-dd",
            language: "zh-CN",
            weekStart: "1",
            autoclose: true,
            minView: "month",
            dateBtn: true,
            todayHighlight: true
        })
    }

})