/*sdgsd*/
define(["jquery", "text!tpls/courseList.html", 'template'], function ($, courseListTpl, template) {
    return function () {
        $.ajax({
            url: 'https://www.apiopen.top/satinCommentApi?id=27610708&page=1',
            type: 'get',
            success: function (res) {
                console.log(res);
                var res = res.data.normal;
                var teacherList = template.render(courseListTpl, res);
                $(".t_body .panel-body").html(teacherList);
            }
        });

    }
});