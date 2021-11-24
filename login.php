<!DOCTYPE HTML>
<html>

<head>
    <title>Pulse Studios KSA - Login</title>
    <?php include('includes/meta.php');?>
</head>

<body>

    <!-- Include Header -->
    <?php include('includes/header.php');?>


    <div class="page-header hero hero">
        <div class="bg bg-corporate"></div>
        <div class="container page-title">
            <h1>Login</h1>
        </div>
    </div>

    <div class="container">

        <div class="log">
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#tab1">Login</a></li>
                <li><a data-toggle="tab" href="#tab2">Register</a></li>

            </ul>

            <div class="tab-content">

                <div id="tab1" class="tab-pane fade in active">

                    <div class=container>

                        <h3>Login</h3>
                        <div class="log">
                            <article class="card-body">

                                <form>
                                    <div class="form-group">

                                        <input name="" class="form-control" placeholder="Email" type="email">
                                    </div> <!-- form-group// -->
                                    <div class="form-group">

                                        <input class="form-control" placeholder="******" type="password">
                                        <a class="float-right " href="#">Forgot Password?</a>

                                    </div> <!-- form-group// -->

                                    <div class="form-group ">
                                        <button class=" btn_wrap" type="button"><a href="#" class="light" type="submit" value="">Log in</a></button>
                                    </div> <!-- form-group// -->
                                </form>
                            </article>
                        </div>
                    </div>
                </div>

                <div id="tab2" class="tab-pane fade">
                    <h3>Register</h3>

                    <div class="stepwizard">
                        <div class="stepwizard-row setup-panel">
                            <div class="stepwizard-step">
                                <a href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
                                <p>Step 1</p>
                            </div>
                            <div class="stepwizard-step">
                                <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
                                <p>Step 2</p>
                            </div>
                            <div class="stepwizard-step">
                                <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
                                <p>Step 3</p>
                            </div>
                        </div>
                    </div>
                    <form role="form">
                        <div class="row setup-content log" id="step-1">
                            <div class="col-xs-12">
                                <div class="col-md-12 reg">


                                    <div class="form-group">
                                        <label class="control-label">Email</label>
                                        <input maxlength="100" class="form-control" placeholder="Enter first Name" type="text" required="required">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Password</label>
                                        <input maxlength="100" type="text" class="form-control" placeholder="Enter Last Name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Confirm Password</label>
                                        <input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter Last Name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">First Name</label>
                                        <input maxlength="100" type="text" class="form-control" placeholder="Enter Last Name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Last Name</label>
                                        <input maxlength="100" type="text" class="form-control" placeholder="Enter Last Name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Phone Number</label>
                                        <input maxlength="100" type="text" class="form-control" placeholder="Enter Last Name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Addrss </label>
                                        <input maxlength="100" type="text" class="form-control" placeholder="Enter Last Name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Postal Code</label>
                                        <input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter Last Name" />
                                    </div>
                                    <!--  <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" >Next</button> -->

                                    <div class="form-group ">
                                        <button class=" btn_wrap nextBtn pull-right" type="button"><a class="light" type="submit" value="">Next</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row setup-content log" id="step-2">
                            <div class="col-xs-12">
                                <div class="col-md-12 reg">
                                    <h3> Step 2</h3>
                                    <div class="form-group">
                                        <label class="control-label">Company Name</label>
                                        <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Name" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Company Address</label>
                                        <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Company Address" />
                                    </div>
                                    <!--   <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" >Next</button> -->




                                    <div class="form-group ">
                                        <button class=" btn_wrap nextBtn pull-right" type="button"><a class="light" type="submit" value="">Next</a></button>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div class="row setup-content log" id="step-3">
                            <div class="col-xs-12">
                                <div class="col-md-12 reg">
                                    <h3> Step 3</h3>
                                    <div class="form-group ">
                                        <button class=" btn_wrap nextBtn pull-right" type="button"><a class="light" type="submit" value="">Next</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>


        </div>
    </div>








    <?php include('includes/footer.php');?>
</body>

</html>

<script>
    /*Register*/
    $(document).ready(function() {

        var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

        allWells.hide();

        navListItems.click(function(e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                $item = $(this);

            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('btn-primary').addClass('btn-default');
                $item.addClass('btn-primary');
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
        });

        allNextBtn.click(function() {
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                curInputs = curStep.find("input[type='text'],input[type='url']"),
                isValid = true;

            $(".form-group").removeClass("has-error");
            for (var i = 0; i < curInputs.length; i++) {
                if (!curInputs[i].validity.valid) {
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-error");
                }
            }

            if (isValid)
                nextStepWizard.removeAttr('disabled').trigger('click');
        });

        $('div.setup-panel div a.btn-primary').trigger('click');
    });

</script>
