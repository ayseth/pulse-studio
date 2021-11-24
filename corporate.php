<!DOCTYPE HTML>
<html>

<head>
    <title>Pulse Studios KSA - Corporates</title>
    <?php include('includes/meta.php');?>
</head>

<body>
    <!-- Include Header -->
    <?php include('includes/header.php');?>


    <div class="page-header hero hero">
        <div class="bg bg-corporate"></div>
        <div class="container page-title">
            <h1>Corporate</h1>
        </div>
    </div>








    <div class="container">
        <div class="log">


            <form role="form">
                <div class="row setup-content log" id="step-1">
                    <div class="col-xs-12">
                        <div class="col-md-12 reg">


                            <div class="form-group">
                                <label class="control-label">Name of company</label>
                                <input maxlength="100" class="form-control" placeholder="Enter company Name" type="text" required="required">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Type of business</label>
                                <select name="">
                                    <option value="*"> retail (apparel)</option>
                                    <option>retail (food and beverages )</option>
                                    <option> retail (cosmetics)</option>
                                    <option> workshop/talk</option>
                                    <option> event/sponsorship</option>

                                </select>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Contact email</label>
                                <input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter Contact Email" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Contact number</label>
                                <input maxlength="100" type="number" required="required" class="form-control" placeholder="Enter Contact Number" />
                            </div>

                            <div class="form-group">
                                <label class=" control-label">Message</label>
                                <textarea style="height: auto;" rows="9" name="message" placeholder="Message..." class="form-control"></textarea>
                            </div>



                            <div class="form-group ">
                                <button class=" btn_wrap" type="button"><a class="light" type="submit">Submit</a></button>
                            </div>
                        </div>
                    </div>
                </div>



            </form>


        </div>

    </div>








    <?php include('includes/footer.php');?>
</body>

</html>
