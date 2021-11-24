//Modal sript




$("div[id^='myModal']").each(function () {

    var currentModal = $(this);

    //click next
    currentModal.find('.btn-next').click(function () {
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
    });

    //click prev
    currentModal.find('.btn-prev').click(function () {
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
    });

});

//classes this week

$('.classes').on('click', function (event) {
    window.location.href = 'schedule.php';
})

$('.classes-rtl').on('click', function (event) {
    window.location.href = 'schedule-rtl.php';
})

//Lojain social accounts (modals)

$('.read-lojain').on('click', function (event) {
    window.location.href = 'loujain.php';
})

$('.read-lojain-rtl').on('click', function (event) {
    window.location.href = 'loujain-rtl.php';
})

//$('twitter-lojain').on('click', function (event) {
//    window.location.href = '';
//})

$('.instagram-lojain').on('click', function (event) {

    window.open(
        'https://www.instagram.com/one_fit/',
        '_blank'
    );
})

//$('.spotify-lojain').on('click', function (event) {
//    window.location.href = '';
//})


//ghalia social accounts (modals)
$('.read-ghalia').on('click', function (event) {
    window.location.href = 'ghalia.php';
})
$('.read-ghalia-rtl').on('click', function (event) {
    window.location.href = 'ghalia-rtl.php';
})

//$('twitter-ghalia').on('click', function (event) {
//    window.location.href = '';
//})

$('.instagram-ghalia').on('click', function (event) {

    window.open(
        'https://www.instagram.com/ghalia_khoja/',
        '_blank'
    );
})

//$('.spotify-ghalia').on('click', function (event) {
//    window.location.href = '';
//})


//nora social accounts (modals)
$('.read-nora').on('click', function (event) {
    window.location.href = 'nora.php';
})
$('.read-nora-rtl').on('click', function (event) {
    window.location.href = 'nora-rtl.php';
})

//$('twitter-nora').on('click', function (event) {
//    window.location.href = '';
//})

$('.instagram-nora').on('click', function (event) {
    window.open(
        'https://www.instagram.com/nm_health_and_fitness/',
        '_blank'
    );
})

//$('.spotify-nora').on('click', function (event) {
//    window.location.href = '';
//})



//dania social accounts (modals)
$('.read-dania').on('click', function (event) {
    window.location.href = 'dania.php';
})

$('.read-dania-rtl').on('click', function (event) {
    window.location.href = 'dania-rtl.php';
})


//$('twitter-dania').on('click', function (event) {
//    window.location.href = '';
//})

$('.instagram-dania').on('click', function (event) {
    window.open(
        'https://www.instagram.com/theducklist/',
        '_blank'
    );

})

//$('.spotify-dania').on('click', function (event) {
//    window.location.href = '';
//})



//hala social accounts (modals)
$('.read-hala').on('click', function (event) {
    window.location.href = 'hala.php';
})

$('.read-hala-rtl').on('click', function (event) {
    window.location.href = 'hala-rtl.php';
})


//$('twitter-hala').on('click', function (event) {
//    window.location.href = '';
//})

$('.instagram-hala').on('click', function (event) {
    window.open(
        'https://www.instagram.com/hd_fitness/',
        '_blank'
    );

})

//$('.spotify-hala').on('click', function (event) {
//    window.location.href = '';
//})


//mawada social accounts (modals)
$('.read-mawada').on('click', function (event) {

    window.location.href = 'mawada.php';
})

$('.read-mawada-rtl').on('click', function (event) {

    window.location.href = 'mawada-rtl.php';
})

//$('twitter-mawada').on('click', function (event) {
//    window.location.href = '';
//})

$('.instagram-mawada').on('click', function (event) {
    window.open(
        'https://www.instagram.com/mawadayoga/',
        '_blank'
    );

})

//$('.spotify-mawada').on('click', function (event) {
//    window.location.href = '';
//})
