/**/
define(["jquery", "text!tpls/addCourse.html", "course/courseImg", 'template'], function ($, addCourseTpl, courseImg, template) {
    return function () {
        $.ajax({
            url: 'https://www.apiopen.top/satinApi?type=1&page=1',
            type: 'get',
            success: function (res) {
                console.log(res);
                var addCourseList = template.render(addCourseTpl, res);
                $(".t_body .panel-body").html(addCourseList);
                $(".addc img").on("click", function () {
                    courseImg();
                })
            }
        });

    }
});
