 <?php include "header.php"; ?>

<div class="page-heading page-slider">

    <!-- Page heading or Page slider should be in here / Why isn't this in content? because While the backend team is doing - slider on the main page and page heading image - style element on the sub-pages, it becomes easier to distinguish it. -->

</div>


<div id="content">
    <div class="content-wrap p-0">

        <!-- Please start to write your code right here -->
        <div class="section product-cards m-0 white-bg">
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-12">
                        <h1>Single Page Cards</h1>
                    </div>
                </div>
                <div class="row">
                    <?php for($i=0;$i<6;$i++){?>
                    <div class="col-lg-6">
                        <div class="card-item" style="background-image:url('https://labs.fuelm.net/images/town-culture/stay-card.jpg');">
                            <div class="card-content">
                                <h3>Contact Page Design # <?php echo $i; ?></h3>
                                <span>Card Categori</span>
                                <p>Card Explanation</p>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>



    </div>
</div>

<?php include "footer.php"; ?>