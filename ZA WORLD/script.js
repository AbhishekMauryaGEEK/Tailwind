window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.dio_au')?.addEventListener('click', () => {
    const audio = document.getElementById('dio-audio');
    const container = document.querySelector('.container');
    const body = document.body;

    audio?.play();

    container?.classList.add('flicker');
    body.classList.add('flicker');

    setTimeout(() => {
      container?.classList.remove('flicker');
      body.classList.remove('flicker');
      body.classList.add('effect-negative');
      container?.classList.add('effect-negative');
    }, 2000);

    setTimeout(() => {
      body.classList.add('bg-grey');
    }, 2500);

    setTimeout(() => {
      body.classList.remove('effect-negative');
      container?.classList.remove('effect-negative');
      body.classList.add('effect-grayscale');
      container?.classList.add('effect-grayscale');
    }, 2500);

    setTimeout(() => {
      body.classList.remove('effect-grayscale');
      container?.classList.remove('effect-grayscale');
      body.classList.add('effect-normal');
      container?.classList.add('effect-normal');
    }, 3000);

    setTimeout(() => {
      body.classList.remove('effect-normal');
      container?.classList.remove('effect-normal');
      body.classList.remove('bg-grey');
    }, 3500);
  });
});