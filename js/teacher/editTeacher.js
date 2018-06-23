define(["jquery", "text!tpls/editTeacher.html", "datetime", "datetimeLang", 'template'], function ($, editTeacherTpl, template) {
    return function () {
        var $editTeacherlist = $(editTeacherTpl);
        $("#editTeacher").remove();
        $editTeacherlist.on("submit", "form", function (e) {
            e.preventDefault();
            var formData = $(this).serialize();
            console.log(formData)
            $editTeacherlist.modal("hide");

            return
        }).appendTo("body").modal();
        $editTeacherlist.find(".date-join").datetimepicker({
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