var allScreens = $('.screen').length;
var currentStep = 0;
var vas;
var finishedFlag = true;

$(document).ready(function () {
    init();
    $('#goToNext').click(function () {
        goToNext();
        finishedFlag = false;
    });
    $('#goToPrev').click(function () {
        goToPrev();
    });
    $('#goToSave').click(function () {
        $('#goToNext').trigger('click');

        $('#goToClose').show();
        $('#goToPrev, #goToNext').hide();

        finishedFlag = true;
    });
    $('#goToClose').click(function () {
        $('#goToClose').hide();
        $('#goToPrev').show().addClass('c-btn--disabled');
        currentStep = 0;
        changeScreen();
        $('input:radio').removeAttr('checked');
        $('#vas').removeClass('score-is-set');
    });
});

$(window).on('resize', function () {
    positionScoreBox();
});

$(window).bind('beforeunload', function () {
    if (!isScreenshotMode() && finishedFlag == false) {
        return 'Do you really want to exit without saving?';
    }
});

function init() {
    updateCopyright();
    element = $('.screen');
    element.hide();
    element.eq(currentStep).show().addClass('is-visible');
}
function goToPrev() {
    if (currentStep != 0) {
        currentStep--;
        changeScreen();
    }
    if (currentStep == 0) {
        $('#goToPrev').addClass('c-btn--disabled');
    }
}
function goToNext() {
    $('#goToPrev').removeClass('c-btn--disabled');

    if (currentStep < allScreens - 1 && checkCurrentScreen() == true) {
        currentStep++;
        changeScreen();
    }
}
function updateCopyright() {
    element = $('.screen').eq(currentStep);
    var hide = element.hasClass('kickoffscreen') || element.hasClass('savescreen') || element.hasClass('endscreen');
    $('.copyright').css({
        opacity: hide ? 0 : 1,
    });
}
function positionScoreBox() {
    var vas = $('#vas');
    var infoWrapper = $('#vas-information-wrapper');
    var scoreBox = $('.vas-score');
    var top = vas.height() / 2 + vas.position().top;
    var infoHeight = infoWrapper.outerHeight() + infoWrapper.position().top;
    var compensated = infoHeight + scoreBox.outerHeight() / 2 + 20;
    if (compensated >= top) {
        top = compensated;
    }
    scoreBox.css({
        top: top,
    });
}
function changeScreen() {
    updateCopyright();
    element = $('.screen');
    element.fadeOut(250).removeClass('is-visible');
    element.eq(currentStep).delay(250).fadeIn(250).addClass('is-visible');

    // render the VAS
    if (element.eq(currentStep).hasClass('vasscreen') && !$('#vas').hasClass('score-is-set')) {
        $('#vas').html(' ');
        renderVas();
        $('#score-result').html('&nbsp;');

        setTimeout(function () {
            if (isTabletOrDesktop()) {
                var height = $('.vas__header').height() + 4;
                $('.vas-information').css({
                    'padding-top': height,
                });
            }
            positionScoreBox();
        }, 500);
    }

    // Show/hide save button
    if (element.eq(currentStep).hasClass('savescreen')) {
        $('#goToNext').hide();
        $('#goToSave').show();
    } else {
        $('#goToNext').show();
        $('#goToSave').hide();
    }
}
function checkCurrentScreen() {
    if (isScreenshotMode()) return true;

    var check = true;
    var blank = false;

    // Check if radiobutton is checked
    // **********************************************
    if ($('.is-visible').find("input[type='radio']").length > 0) {
        $('.is-visible input:radio').each(function () {
            var val = $('input:radio[name=' + this.name + ']:checked').val();
            if (val === undefined) {
                blank = true;
                return false;
            }
        });
    }
    if (blank == true) {
        var errorMessage = getData().data.general.error;
        var okButton = getData().data.buttons.ok;
        alertify.alert('', errorMessage).setting({
            label: okButton,
        });
        check = false;
    }

    // check vas score
    // **********************************************
    if (element.eq(currentStep).hasClass('vasscreen')) {
        score = $('#score-result').html();
        if (score == '&nbsp;') {
            var errorMessage = getData().data.vas.line4;
            var okButton = getData().data.buttons.ok;
            alertify.alert('', errorMessage).setting({
                label: okButton,
            });
            check = false;
        }
    }
    return check;
}
function isScreenshotMode() {
    return $('body').attr('data-screenshot-mode') === '';
}
function isMobile() {
    return $(window).width() < 768;
}
function isTabletOrDesktop() {
    return $(window).width() >= 768;
}
function renderVas() {
    var scalePosition = $('html').attr('dir') === 'LTR' ? 'right' : 'left';
    var scale_top = $('#vas').attr('data-scale-top');
    var scale_bottom = $('#vas').attr('data-scale-bottom');
    var steps = isTabletOrDesktop() ? 10 : 50;

    const instance = new VASScale({
        minValue: 0,
        maxValue: 100,
        steps: steps,
        onScoreChange: function onScoreChange(score, history) {
            $('#score-result').text(score);
            $('#vas').addClass('score-is-set');
        },
        header: scale_top,
        footer: scale_bottom,
        scalePosition: scalePosition,
    }).init();
    return instance;
}
function getData() {
    return JSON.parse(decodeURIComponent($('#appData').val()));
}
