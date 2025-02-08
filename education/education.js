document.addEventListener("DOMContentLoaded", function() {

    // Step 0: Show the terminal
    setTimeout(() => {
        const terminal = document.getElementById('terminal');
        terminal.classList.remove('hidden');
        terminal.classList.add('visible');
    }, 1200);
    

    // Step 1: Show the prompt
    setTimeout(() => {
        const prompt = document.getElementById('prompt');
        prompt.classList.remove('hidden');
        prompt.classList.add('visible');
    }, 1400);
    
    
    // Step 2: Show the timeline line
    setTimeout(() => {
        const typing = document.getElementById('typing');
        typing.removeAttribute('id');

        const timeline = document.querySelector('.timeline');
        timeline.classList.remove('hidden');
        timeline.classList.add('visible');
    }, 2700);

    // Step 3: Show the timeline items progressively
    setTimeout(() => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('hidden');
                item.classList.add('visible');
            }, index * 500);
        });
    }, 3000);
});