document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons and story parts
    const optionOneButton = document.querySelector('.option-one');
    const optionTwoButton = document.querySelector('.option-two');
    const optionOneScreen = document.querySelector('.option-one-screen');
    const optionTwoScreen = document.querySelector('.option-two-screen');
    const optionOneEnd = document.querySelector('.option-one-end');
    const optionTwoEnd = document.querySelector('.option-two-end');

    // Hide all story sections initially
    optionOneScreen.style.display = 'none';
    optionTwoScreen.style.display = 'none';
    optionOneEnd.style.display = 'none';
    optionTwoEnd.style.display = 'none';

    // Option one button click handler
    optionOneButton.addEventListener('click', function() {
        optionOneScreen.style.display = 'block'; // Show the next part of the story
        optionOneButton.style.display = 'none'; // Hide the options
        optionTwoButton.style.display = 'none'; // Hide the options

        // Final choice for option one
        const finalOneButton = document.createElement('button');
        finalOneButton.textContent = "Finish Option 1";
        finalOneButton.className = "final-option";
        optionOneScreen.appendChild(finalOneButton);

        finalOneButton.addEventListener('click', function() {
            optionOneEnd.style.display = 'block'; // Show the ending for option one
            optionOneScreen.style.display = 'none'; // Hide the middle part
            finalOneButton.style.display = 'none'; // Hide the final button
        });
    });

    // Option two button click handler
    optionTwoButton.addEventListener('click', function() {
        optionTwoScreen.style.display = 'block'; // Show the next part of the story
        optionOneButton.style.display = 'none'; // Hide the options
        optionTwoButton.style.display = 'none'; // Hide the options

        // Final choice for option two
        const finalTwoButton = document.createElement('button');
        finalTwoButton.textContent = "Finish Option 2";
        finalTwoButton.className = "final-option";
        optionTwoScreen.appendChild(finalTwoButton);

        finalTwoButton.addEventListener('click', function() {
            optionTwoEnd.style.display = 'block'; // Show the ending for option two
            optionTwoScreen.style.display = 'none'; // Hide the middle part
            finalTwoButton.style.display = 'none'; // Hide the final button
        });
    });
});