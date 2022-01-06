
let currentPhoto = 0;

const onClick = isPrev => {
    if (isPrev === true) {
        currentPhoto = currentPhoto - 1; 
        if (currentPhoto === -1) {
            currentPhoto = 4;  
        }
    } else {
        currentPhoto = currentPhoto + 1; 
        if (currentPhoto === 5) {
            currentPhoto = 0;  
        }
    }
    $(".carousel-item.active").animate({left: isPrev ? '-100%':'100%'}, 1500, function(){
        $(this).removeClass('active')
    });
    
    let activePhoto = $(".carousel-item")[currentPhoto];
    $(activePhoto).css('left', isPrev ? '100%':'-100%').addClass('active').animate({left: 0}, 1500)
};
