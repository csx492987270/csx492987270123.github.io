/**/
define(["jquery", "text!tpls/courseImg.html", "upload", 'template'], function ($, courseImgTpl, upload, template) {
    return function () {
        $.ajax({
            url: 'https://www.apiopen.top/meituApi?page=1',
            type: 'get',
            success: function (res) {
                console.log(res);
                var courseImgList = template.render(courseImgTpl, res);
                $(".t_body .panel-body").html(courseImgList);
                // $(".addc img").on("click",function(){
                //    courseImg();
                // })
                console.log(res.data.length)
                for (var i = 0; i < res.data.length; i++) {
                    $("#" + i + "dd").uploadify({
                        height: 30,
                        swf: './assets/uploadify/uploadify.swf',
                        uploader: './assets/uploadify/uploadify.php',
                        width: 120,
                        onUploadSuccess: function (file, data, response) {
                            $()
                            console.log(file);
                            console.log(data);
                            console.log(response);
                            console.log($(this));
                        }
                    });

                }


            }
        });

    }
});
