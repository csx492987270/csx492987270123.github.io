define(["jquery", "text!tpls/personcenter.html", 'template', "ueAll",], function ($, personcenterTpl, template) {
    return function () {
        UE.delEditor('editor');
        $.ajax({
            url: 'https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123456',
            type: 'get',
            success: function (res) {
                if (res.code == '200') {
                    var personcentershow = template.render(personcenterTpl, res.data);
                    var $personcenterList = $(personcentershow);
                    $personcenterList.on("submit", "form", function (e) {
                        e.preventDefault();
                        var formData = $(this).serialize();
                        console.log(formData)
                        $personcenterList.modal("hide");
                        return
                    }).appendTo("body").modal();
                    $personcenterList.find(".date-jion").datetimepicker({
                        formData: "yyyy-mm-dd",
                        language: "zh-CN",
                        weekStart: "1",
                        autoclose: true,
                        minView: "month",
                        dateBtn: true,
                        todayHighlight: true
                    });
                  
                     UE.delEditor('editor');
                      var ue = UE.getEditor('editor');
                    // ue.ready(function(){
                    //     ue.setContent(re)
                    // })
                }
            }
        });


    }
});