$(document).ready(function() {
    function updateGradient() {
        const color1 = $('#color1').val();
        const color2 = $('#color2').val();

        const gradient = `linear-gradient(90deg, ${color1}, ${color2})`;

        $('.gradient-preview').css('background', gradient);

        $('#css-code-text').text(gradient);
    }

    $('#generate-button').click(function() {
        updateGradient();
    });

    $('#circle-gradient-button').click(function() {
        const color1 = $('#color1').val();
        const color2 = $('#color2').val();

        const gradient = `radial-gradient(circle, ${color1}, ${color2})`;

        $('.gradient-preview').css('background', gradient);

        $('#css-code-text').text(gradient);
    });

    updateGradient();
});