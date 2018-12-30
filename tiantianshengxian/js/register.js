$(function(){
    var error_name = false;
    var error_pwd = false;
    var error_cpwd = false;
    var error_email = false;
    var error_allow  =  false;
    $('#user_name').blur(function(){
        check_user_name();
    })
    $('#user_name').focus(function(){
        $(this).next().hide();
    })
    $('#pwd').blur(function(){
        check_pwd();
    })
    $('#pwd').focus(function(){
        $(this).next().hide();
    })
    $('#cpwd').blur(function(){
        check_cpwd();
    })
    $('#cpwd').focus(function(){
        $(this).next().hide();
    })
    $('#email').blur(function(){
        check_email();
    })
    $('#email').focus(function(){
        $(this).next().hide();
    })
    $('#allow').click(function(){
        if($(this).is(":checked")){
            error_allow=false;
            $(this).siblings('span').hide()

        }else{
            $(this).siblings('span').show()
            error_allow=true;

        }
    })

    $('#res_form').submit(function(){
        check_user_name();
        check_pwd();
        check_cpwd();
        check_email();
        if(!(error_name==false&&error_pwd==false&&error_cpwd==false&&error_email==false&&error_allow==false)){
            return false;
        }
        else {
            return true;
        }

    })
    




    function check_user_name(){
        var val = $('#user_name').val();
        var re = /^[0-9a-zA-Z]{5,15}$/i;
        if(val == ''){
            $('#user_name').next().html('请输入用户名').show();
            error_name = true;
            return;
        }
        if(re.test(val)){
            $('#user_name').next().hide();

            error_name = false;

        }else {
            $('#user_name').next().html('请输入5到15位的数字或者字母').show();
            error_name = true;

        }

    }
    
    function check_pwd(){
        var val = $('#pwd').val();
        var re = /^[0-9a-zA-Z\.\?\$]{6,16}$/;
        if(val == ''){
            $('#pwd').next().html('密码不能为空').show(); 
            error_pwd = true;
            return;
        }
        if(re.test(val)){
            $('#pwd').next().hide();

            error_pwd = false;

        }else {
            $('#pwd').next().html('请输入6到16位的数字,字母,.,?,$').show();
            error_pwd = true;

        }

    }
    function check_cpwd(){
        var pwd = $('#pwd').val();
        var cpwd = $('#cpwd').val();
        if(pwd==cpwd){
            error_cpwd=false;
        }else{
            $('#cpwd').next().html('两次输入的密码不一致').show()
            error_cpwd=ture;
        }
    }
    function check_email(){
        var val = $('#email').val();
        var re = /^[\w][\w]*@[\w]{2,4}\.[a-z]{2,3}$/i;
        if(val==''){
            $('#email').next().html('请输入邮箱').show();
            error_email=ture;
            return;
        }
        if(re.test(val)){
            $('#email').next().hide();
            error_email=false;
        }else{
            $('#email').next().html('请输入正确的邮箱格式').show()
            error_email=ture;
        }
    }

































})