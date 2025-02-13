document.addEventListener("DOMContentLoaded", function() {

    setTimeout(() => {
        const terminal = document.getElementById('terminal');
        terminal.classList.remove('hidden');
        terminal.classList.add('visible');
    }, 1200);
    

    setTimeout(() => {
        const prompt = document.getElementById('prompt');
        prompt.classList.remove('hidden');
        prompt.classList.add('visible');
    }, 1400);
    
    
    setTimeout(() => {
        const typing = document.getElementById('typing');
        typing.removeAttribute('id');

        const timeline = document.querySelector('.timeline');
        timeline.classList.remove('hidden');
        timeline.classList.add('visible');
    }, 2700);

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