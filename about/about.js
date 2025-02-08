document.addEventListener("DOMContentLoaded", function() {

    // Show the terminal
    setTimeout(() => {
        const terminal = document.getElementById('terminal');
        terminal.classList.remove('hidden');
        terminal.classList.add('visible');
    }, 1200);
    

    // Show the prompt
    setTimeout(() => {
        const prompt = document.getElementById('prompt');
        prompt.classList.remove('hidden');
        prompt.classList.add('visible');

    }, 1600);

    // Show the text
    setTimeout(() => {
        const typing1 = document.getElementById('typing');
        typing1.removeAttribute('id');

        const pres = document.getElementById('presentation');
        pres.classList.remove('hidden');
        pres.classList.add('visible');
    }, 2400);    

    // Show the prompt
    setTimeout(() => {
        const typing2 = document.getElementsByClassName('prompt-text2')[0];
        typing2.id = 'typing';
        typing2.classList.remove('hidden');

        const prompt = document.getElementById('prompt2');
        prompt.classList.remove('hidden');
        prompt.classList.add('visible');
    }, 3000);

    // Show the experience
    setTimeout(() => {
        const typing2 = document.getElementById('typing');
        typing2.removeAttribute('id');

        const pres = document.getElementById('experience');
        pres.classList.remove('hidden');
        pres.classList.add('visible');
    }, 3500); 

    // Show the prompt
    setTimeout(() => {
        const typing3 = document.getElementsByClassName('prompt-text3')[0];
        typing3.id = 'typing';
        typing3.classList.remove('hidden');

        const prompt = document.getElementById('prompt3');
        prompt.classList.remove('hidden');
        prompt.classList.add('visible');
    }, 4000);

    // Step 2: Show the text
    setTimeout(() => {
        const typing3 = document.getElementById('typing');
        typing3.removeAttribute('id');

        const skill = document.querySelectorAll('.skillgroup');
        skill.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('hidden');
                item.classList.add('visible');
            }, index * 500);
        });
    }, 4500); 
    

});