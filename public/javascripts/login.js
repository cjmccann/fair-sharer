$(function(){
var textfield = $("input[name=user]");
var passfield = $("input[type=password]");
            $('button[type="submit"]').click(function(e) {
                e.preventDefault();

                $.post("chkLogin.json", { username:textfield.val(), password:passfield.val()}).done(
                        function(response) {
                            if (response == true) {
                                console.log(true);
                                console.log("WHAT");
                                $("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back " + "<span style='text-transform:uppercase'>" + textfield.val() + "</span>");
                                $("#output").removeClass(' alert-danger');
                                $("input").css({
                                "height":"0",
                                "padding":"0",
                                "margin":"0",
                                "opacity":"0"
                                });
                                //change button text 
                                $('button[type="submit"]').html("continue")
                                .removeClass("btn-info")
                                .addClass("btn-default").click(function() {
                                $.get("home")
                                $("input").css({
                                "height":"auto",
                                "padding":"10px",
                                "opacity":"1"
                                }).val("");
                                });



                                //show avatar
                                $(".avatar").css({
                                    //placeholder
                                });
                            } else {
                                //remove success mesage replaced with error message
                                $("#output").removeClass(' alert alert-success');
                                $("#output").addClass("alert alert-danger animated fadeInUp").html("Username and password incorrect");
                                $("input").val("");
                            } 
                        }
                    )} )});
/*                $.ajax({
                    url: "chkLogin",
                    type:"POST",
                    data:{username:textfield.val(), password:passfield.val()},
                    success: function(response) {
                        if (response == true) {
                            console.log(true);
                            console.log("WHAT");
                            $("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back " + "<span style='text-transform:uppercase'>" + textfield.val() + "</span>");
                            $("#output").removeClass(' alert-danger');
                            $("input").css({
                            "height":"0",
                            "padding":"0",
                            "margin":"0",
                            "opacity":"0"
                            });
                            //change button text 
                            $('button[type="submit"]').html("continue")
                            .removeClass("btn-info")
                            .addClass("btn-default").click(function(){
                            $("input").css({
                            "height":"auto",
                            "padding":"10px",
                            "opacity":"1"
                            }).val("");
                            });



                            //show avatar
                            $(".avatar").css({
                                //placeholder
                            });
                        } else {
                            //remove success mesage replaced with error message
                            $("#output").removeClass(' alert alert-success');
                            $("#output").addClass("alert alert-danger animated fadeInUp").html("sorry enter a username ");
                        } },
                    error: function(xhr) {
                        console.log("error")
                    }
                });  */
              //  if (textfield.val() != "") {
                //console.log(textfield.val()); */
