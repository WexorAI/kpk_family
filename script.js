$(function () {
    $('.genealogy-tree ul').hide();
    $('.genealogy-tree>ul').show();
    $('.genealogy-tree ul.active').show();
    $('.genealogy-tree li').on('click', function (e) {
        var children = $(this).find('> ul');
        if (children.is(":visible")) children.hide('fast').removeClass('active');
        else children.show('fast').addClass('active');
        e.stopPropagation();
    });
});



// $(document).ready(function () {
//     $('.member-view-box').on('click', function () {
//         var memberName = $(this).find('.member-details h3').text();
//         $('#member-details').html('<p>Name: ' + memberName + '</p> ');
//     });
// });

// $(document).ready(function () {
//     $('.member-view-box').on('click', function () {
//         var memberDetails = $(this).find('.member-details h3').text();
//         $('#member-details').html('<div class="member-details-popup">' + memberDetails + '</div>');
//     });
// });

// $(document).ready(function () {
//     $('.member-view-box').on('click', function () {
//         var memberDetails = $(this).find('.member-details').html();
//         $('#member-details').html('<div class="member-details-popup">' + memberDetails + '</div>');
//     });
// });

// $(document).ready(function () {
//     $('.member-view-box').on('click', function () {
//         var memberDetails = $(this).find('.member-details h3').map(function () {
//             return $(this).text();
//         }).get().join('<br>');  // Join the text with line breaks
//         $('#member-details').html('<div class="member-details-popup">' + memberDetails + '</div>');

//         // Show hidden elements
//         $('#member-details .member-details-popup h3[hidden]').show();
//     });
// });

$(document).ready(function () {
    $('.member-view-box').on('click', function () {
        var memberDetails = {};

        // Extract details and populate the memberDetails object
        $(this).find('.member-details h3').each(function () {
            var detailLabel = $(this).data('label') || 'unknown'; // Use a data attribute for custom labels
            var detailText = $(this).text();
            memberDetails[detailLabel] = detailText;
        });

        // Generate HTML for the popup
        var popupHTML = '<div class="member-details-popup">';
        for (var label in memberDetails) {
            popupHTML += '<p>' + label + ': ' + memberDetails[label] + '</p>';
        }
        popupHTML += '</div>';

        // Display the popup
        $('#member-details').html(popupHTML);

        // Show hidden elements
        $('#member-details .member-details-popup h3[hidden]').show();
    });
});
